import Image from "next/image";
import styles from "@/styles/album.module.scss";
import Heart from "./Heart";

const Track = ({ track }) => {
    const {name} = track;
    const {duration_ms} = track;
    const faketime = new Date(duration_ms).toISOString();
    const realtime = faketime.substring(faketime.indexOf(':')+1, faketime.length -1).split('.')[0];
    return (
        <div className={styles.track}>
            <p>{name}</p>
            <i>{realtime}</i>
            <Heart type="track" id={track.id} />
        </div>
    )
}

export default Track;