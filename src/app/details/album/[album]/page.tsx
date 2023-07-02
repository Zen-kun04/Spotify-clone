import Album from "@/app/components/Album"
import Track from "@/app/components/Track";
import { api, getAPIKey } from "@/app/utils/SpotifyAPI";
import styles from '@/styles/album.module.scss'
import Link from "next/link";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import hasAlreadyLiked from "@/app/utils/Global";
import Heart from "@/app/components/Heart";
// import { use, useEffect, useState } from "react";


const DetailsPage = async ({params}) => {
    // const [loading, setLoading] = useState(true);
    // useEffect(() => {
    //     setLoading(false);
    // }, [])
    const albumId = params.album
    
    // const results = use(getters(albumId));
    const token = await getAPIKey();
    const results = await api("albums/" + albumId, {
        method: "GET",
        data: "",
        token: token
    });
    if(results) {
        const tracks = results.tracks.items;
        
        return (
            <>
                <div className={styles.center}>
                    <Album img={results.images[0].url} title={results.name}/>
                    {/* <Link href={"/like/album/" + results.id}><AiFillHeart color="red" /></Link>
                    <Link href={"/like/album/" + results.id}><AiOutlineHeart /></Link> */}
                    <Heart type="album" id={results.id} />
                    
                    
                </div>
                <div id={styles.tracks}>
                    {
                        tracks.map(track => (
                            <Track track={track} />
                        ))
                    }
                </div>
            </>
        )
    }
    
    return "No album found with that id"
    
}

export default DetailsPage;