import styles from './index.module.css';
import NewTweet from "./NewTweet";
import TweetsList from "./TweetsList";

export default function Home() {
    return (
        <div className={styles.MainPart}>
            <h5>Home</h5>
            <NewTweet/>
            <TweetsList/>
        </div>
    );
}