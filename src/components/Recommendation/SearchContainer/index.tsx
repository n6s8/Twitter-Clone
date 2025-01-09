import styles from './index.module.css'
export default function SearchContainer() {
    return (
        <div className={styles.searchBar}>
            <span className={styles.icon}>🔍</span>
            <input
                type="text"
                placeholder="Search Twitter"
                className={styles.searchInput}
            />
        </div>
    )
}