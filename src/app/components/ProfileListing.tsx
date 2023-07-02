"use client"

import { api, getAPIKey } from "../utils/SpotifyAPI";
import styles from "@/styles/profile.module.scss";
import stylesLoad from '@/styles/search.module.scss'
import { getAllLikes } from "../utils/Global";
import { useEffect, useState } from "react";



const ProfileListing = () => {

    const [data, setData] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        let fav = localStorage.getItem("fav");
        if (fav && JSON.parse(fav)["type"] === "album") {
            setData(JSON.parse(fav));
        }else{
            setData({});
            localStorage.setItem("fav", JSON.stringify(data));
            
        }
        setLoading(false);
    }, []);

    
    return (
        <div id={styles.profile}>
        
            {
            !loading && (getAllLikes().length > 0 && (
                <>
                <h1>Your favs</h1>
                {
                    getAllLikes().map(like => (
                        <p>({like.type}) {like.id}</p>
                    ))
                }
                
                
                </>
            )   
            )}
            {
            !loading && (getAllLikes().length === 0 && (
                <h1>No data found</h1>
            ))}
    </div>
    )
}

export default ProfileListing;