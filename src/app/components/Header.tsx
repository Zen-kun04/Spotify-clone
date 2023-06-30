"use client"

import style from '@/styles/header.module.scss'
// import Search from './Search';
import Link from 'next/link';
import {RxHamburgerMenu} from 'react-icons/rx'
import { api } from '../utils/SpotifyAPI';
import { useRef, useState } from 'react';
import Artist from './Artist';

const Header = ({token}) => {
    // const {results, setResults} = useSearchContext();
    const [results, setResults] = useState([]);
    const [found, setFound] = useState(false);
    const searchRef = useRef();
    const handleSearch = async (event) => {
        setResults([]);
        setFound(false);
        
        if(event.target.value.trim() !== ""){
            const req = await api("search", {
                method: "GET",
                data: `q=${event.target.value}&type=album,artist,playlist&limit=3&offset=0`,
                token: token
            });
            setResults(req.artists.items)
            
            if(Object.keys(req).length > 0){                
                setFound(true)
            }
        }
        
    }

    const handleLink = () => {
        searchRef.current.value = "";
        setFound(false);
        setResults([]);
    }
    return (
        <>
            <header className={style.header}>
            <div className={style.div}>
                <p id={style.burger}><RxHamburgerMenu /></p>
                <input ref={searchRef} onInput={handleSearch} type="text" />
                <Link href={"/profile"}>Profile</Link>
                
            </div>
            
            <ul>
                <li>
                    <Link href={"/"}>Home</Link>
                </li>
                <li>
                    Section 2
                    <ul>
                        <li>
                            Option 1
                        </li>
                        <li>
                            Option 2
                        </li>
                        <li>
                            Option 3
                        </li>
                    </ul>
                </li>
                <li>
                    Section 3
                    <ul>
                        <li>
                            Option 1
                        </li>
                        <li>
                            Option 2
                        </li>
                        <li>
                            Option 3
                        </li>
                    </ul>
                </li>
            </ul>
        </header>
        <div id={style.artist_section}>
            <div id={style.artists}>
                {
                    results.map((r, i) => (
                        <Link key={r.id.toString()} href={"/details/artist/" + r.id.toString()} onClick={handleLink}>
                        <Artist artist={r} />
                        </Link>
                    ))
                }
            </div>
        {
            found && (
                <Link href={"/search/" + searchRef.current?.value} onClick={handleLink}>Voir plus de résultats</Link>
            )
        }
        
        </div>
        
        </>
        
        
    );
}

export default Header;