import styles from '@/styles/artist.module.scss'
import Image from 'next/image';

const Artist = ({artist}) => {
    return (
        <div className={styles.artist}>
            <div id={styles.image}>
                <div className={styles.image_shadow}>
                    <Image src={artist.images[0]? artist.images[0].url : "https://cdn-icons-png.flaticon.com/512/2550/2550383.png"} alt="" draggable="false" width={300} height={50} />
                </div>
                <p id={styles.name}>{artist.name}</p>
            </div>
            
            <div id={styles.info}>
                <p id={styles.type}>Artist</p>
                <p id={styles.followers}>{artist.followers.total} followers</p>
            </div>
            
        </div>
    )
}

export default Artist;