"use client";
import { useEffect, useState } from "react";
import styles from "@/styles/profile.module.scss";
import stylesLoad from '@/styles/search.module.scss'

const ProfilePage = () => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let fav = localStorage.getItem("fav");
    if (fav && JSON.parse(fav)["type"] === "album") {
      setData(JSON.parse(fav));
    }else{
        localStorage.setItem("fav", JSON.stringify({}));
        setData({});
    }
    // } else {
    // //   localStorage.setItem("fav", JSON.stringify({ name: "baguette" }));
    //   setData({ name: "baguette" });
    // }
    setLoading(false);
  }, []); // Agrega [] como dependencia para que el efecto solo se ejecute una vez al montar el componente

  return (
    <div id={styles.profile}>
        {
            loading && (
                <div id={stylesLoad.loading}>
                    <div className={stylesLoad.lds_dual_ring}></div>
                </div>
            )
        }
      {!loading && Object.keys(data).length > 0 && (
        <h1>Your favs</h1>

      )}
      {!loading && Object.keys(data).length < 1 && (
        <h1>No data found</h1>
      )}
    </div>
  );
};

export default ProfilePage;