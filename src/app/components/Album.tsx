import styles from '@/styles/album.module.scss';
import Image from 'next/image';

const Album = ({img, title}) => {
    return (
        <div className={styles.album}>
            <Image className={styles.album_image} src={img} alt="" width={100} height={100} />
            <p className={styles.album_name}>{title}</p>
        </div>
        
    )
}

export default Album