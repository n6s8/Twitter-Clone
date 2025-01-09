import styles from './index.module.css';
import SearchContainer from "./SearchContainer";
import Follow from "./Follow";
import Trends from "./Trends";

export default function Recommendation() {
    return(
        <div className={styles.Rec}>
            <SearchContainer/>
            <Follow/>
            <Trends/>
        </div>

    )
}