"use client";

import { useEffect, useState } from "react";
import {AiFillHeart, AiOutlineHeart} from "react-icons/ai";
import hasAlreadyLiked from "../utils/Global";
import Link from "next/link";
import {useRouter} from "next/router";

const Heart = ({type, id}) => {
    const [loading, setLoading] = useState(true);
    const [hasClicked, setHasClicked] = useState(false);

    const clicked = () => {
        const liked = localStorage.getItem("liked")
        if(liked) {
        try {
                const parsed = JSON.parse(liked);
                const filtered = parsed.filter(like => like.type === type && like.id === id)
                if(filtered.length === 0) {
                    const newfilter = parsed;
                    newfilter.push({
                        type: type,
                        id: id
                    })
                    localStorage.setItem("liked", JSON.stringify(newfilter));
                }else{
                    const new_filter = parsed.filter(like => like.id !== id || like.type !== type);
                    localStorage.setItem("liked", JSON.stringify(new_filter));
                }
        }catch(error) {
            console.log("error: " + error);
            
        }
        }else{
            localStorage.setItem("liked", JSON.stringify([{
                type: type,
                id: id
            }]));
        }
        setHasClicked(true);
    }

    useEffect(() => {
        setLoading(false);
    }, [])

    useEffect(() => {
        // useRouter().reload();
        setHasClicked(false);
    }, [, hasClicked])
    
    return (
        // <Link href={"/like/" + type + "/" + id}>
        <>
            {
                !loading && hasAlreadyLiked({type, id}) && (
                    <AiFillHeart color="red" onClick={clicked}/>
                )
            }

            {
                !loading && !hasAlreadyLiked({type, id}) && (
                    <AiOutlineHeart onClick={clicked}/>
                )
            }
        {/* </Link> */}
        </>
        
    )

}

export default Heart;