import styles from "@/styles/profile.module.scss";
import stylesLoad from '@/styles/search.module.scss'
import { getAllLikes } from "../utils/Global";
import { api, getAPIKey } from "../utils/SpotifyAPI";
import ProfileListing from "../components/ProfileListing";

const ProfilePage = async () => {


	const key = await getAPIKey();
    // const info = await api(type + '/' + id, {
    //     method: "GET",
    //     data: "",
    //     token: key
    // });


  return (
	<>
		{
			
			<ProfileListing />
			
		}

		
	</>
  );
};

export default ProfilePage;