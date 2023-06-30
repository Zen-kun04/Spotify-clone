import Album from "@/app/components/Album";
import Artist from "@/app/components/Artist";
import { getAPIKey, api, SpotifyResult } from "@/app/utils/SpotifyAPI";
import { AxiosResponse } from "axios";
import styles from '@/styles/album.module.scss';
import Link from "next/link";

// function fakeLoadingFctn() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve(true);
//         }, 3000);
//     });
// }


const SearchArtist = async() => {
    
    const key = await getAPIKey().then(k => k);
    if(key) {
        //const artist = await getArtistById("7dGJo4pcD2V6oG8kP0tJRR").then(data => data) // Eminem
        // à mettre dans votre composant
        // await fakeLoadingFctn()

        // à mettre à l'exterieur de votre composant
        const eminem = "7dGJo4pcD2V6oG8kP0tJRR";
        const artist = await api(`artists/${eminem}`, {method: "GET", data: "", token: key});
        const albums: SpotifyResult = await api(`artists/${eminem}/albums`, {method: "GET", data: "", token: key});
        
        // const category = await api("recommendations/", {method: "GET", data: "available-genre-seeds"})
        // console.log(category);
        
        // return <p>{artist.name}</p>
        return (
            <>
            <h1>Best result</h1>
            <Artist artist={artist}></Artist>
            <div id={styles.albums}>
                {
                albums.items.map((key, value) => {
                    return (
                        <Link href={"/"} key={"album_" + value}>
                            <div  className={styles.album}>
                                <Album img={albums.items[value].images[0].url} title={albums.items[value].name}/>
                            </div>
                        </Link>
                        
                    
                    )
                })
                }
            </div>
            
            </>
        )
        
    }
    return <h1>No data</h1>
    
}

export default SearchArtist


