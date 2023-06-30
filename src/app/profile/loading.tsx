import styles from '@/styles/search.module.scss'

export default function Loading() {
    return (
        <div id={styles.loading}>
            <div className={styles.lds_dual_ring}></div>
        </div>
        
    )
}