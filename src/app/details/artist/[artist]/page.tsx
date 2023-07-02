import Album from "@/app/components/Album"
import Artist from "@/app/components/Artist"
import { api, getAPIKey } from "@/app/utils/SpotifyAPI";
import styles from '@/styles/album.module.scss'
import { redirect } from "next/dist/server/api-utils";
import Link from "next/link";
import { NextResponse } from "next/server";

const DetailsPage = async ({params}) => {
    if(Object.keys(params)[0] === "artist"){
        const artistId = params.artist
        
        const token = await getAPIKey().then(k => k);
        const results = await api("artists/" + artistId, {
            method: "GET",
            data: "",
            token: token
        });

        const albumsRes = await api("search/", {
            method: "GET",
            data: "q=" + results.name + "&type=album",
            token: token
        });
        
        return (
            <>
            <Artist artist={results}></Artist>
                <div id={styles.albums}>
                    {
                    albumsRes.albums.items.map((key, value) => {
                        return (
                            <Link href={'/details/album/' + albumsRes.albums.items[value].id}>
                                <div key={"album_" + value} className={styles.album}>
                                    <Album img={albumsRes.albums.items[value].images[0].url} title={albumsRes.albums.items[value].name}/>
                                </div>
                            </Link>
                            
                        
                        )
                    })
                    }
                </div>
            </>
        )
    }
    return "No artist found with that id"
    // return NextResponse.rewrite("http://127.0.0.1:3000/")
    
}

export default DetailsPage;