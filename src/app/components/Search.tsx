// "use client";
// import { api, resetAPIKey } from "../utils/SpotifyAPI";
// import { useSearchContext } from "../context/search";

// const Search = ({token}) => {
//     const {setResults} = useSearchContext();
    
//     const handleSearch = async (event) => {
//         if(event.target.value.trim() !== ""){
//             // await resetAPIKey();
//             const req = await api("search", {
//                 method: "GET",
//                 data: `q=${event.target.value}&type=album,artist,playlist&limit=20&offset=0`,
//                 token: token
//             });
//             setResults(req);
//         }
//     }
//     return (
//         <input onInput={handleSearch} type="text" /> 
//     );
// }

// export default Search;
