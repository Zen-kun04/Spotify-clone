import Album from "@/app/components/Album"
import Artist from "@/app/components/Artist"
import Track from "@/app/components/Track";
import { api, getAPIKey } from "@/app/utils/SpotifyAPI";
import styles from '@/styles/album.module.scss'
import { redirect } from "next/dist/server/api-utils";
import Link from "next/link";
import { NextResponse } from "next/server";

const DetailsPage = async ({params}) => {
    console.log(params);
    if(Object.keys(params)[0] === "album"){
        const albumId = params.album
        
        const token = await getAPIKey().then(k => k);
        const results = await api("albums/" + albumId, {
            method: "GET",
            data: "",
            token: token
        });
        const tracks = results.tracks.items;
        
        return (
            <>
                <div className={styles.center}>
                    <Album img={results.images[0].url} title={results.name}/>
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