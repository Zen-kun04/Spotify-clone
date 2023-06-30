import Album from "./components/Album";
import { api, getAPIKey } from "./utils/SpotifyAPI"
import stylesAlbum from "@/styles/album.module.scss";


const HomePage = async () => {
  const key = await getAPIKey().then(k => k);
  const featured_albums = await api("browse/new-releases", {
    method: "GET",
    data: "country=US&limit=30&offset=0",
    token: key
  });

  const featured_playlists = await api("browse/featured-playlists", {
    method: "GET",
    data: "country=US&offset=0",
    token: key
  });

  return (
    <>
      <p>Featured Albums</p>
      <div id={stylesAlbum.albums}>
        {
          featured_albums.albums.items.map(album => (
            <Album img={album.images[0].url} title={album.name} />
          ))
        }
        
      </div>

      <p>Featured Playlists</p>
      <div id={stylesAlbum.albums}>
        {
          featured_playlists.playlists.items.map(playlist => (
            <Album img={playlist.images[0].url} title={playlist.name} />
          ))
        }
        
      </div>
    </>
    
    
  )
}

export default HomePage;