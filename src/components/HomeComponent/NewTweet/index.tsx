import { useState } from "react";
import PROFILE_IMG_PATH from "../images/profilePhoto.jpeg";
import styles from './index.module.css';

interface Tweet {
    authorName: string;
    authorUsername: string;
    img: string;
    content: string;
    replies: number;
    retweets: number;
    likes: number;
    category: string;
}

interface NewTweetProps {
    addTweet: (tweet: Tweet) => void;
}

export default function NewTweet({ addTweet }: NewTweetProps) {
    const [tweetContent, ChangedContent] = useState("");

    const Submit = () => {
        const newTweet: Tweet = {
            authorName: "Nurzhan Sultanov",
            authorUsername: "@n6s8",
            img: PROFILE_IMG_PATH,
            content: tweetContent,
            replies: 900,
            retweets: 400,
            likes: 500,
            category: "Personal",
        };

        addTweet(newTweet);

        ChangedContent("");
    };

    return (
        <div className={styles.input} style={{ borderBottom: '2px solid whitesmoke' }}>
            <div className={styles.info}>
                <img
                    src={PROFILE_IMG_PATH}
                    style={{ width: 50, height: 50, borderRadius: 50 }}
                    alt="User"
                />
                <input
                    placeholder="What's happening?"
                    value={tweetContent}
                    onChange={(e) => ChangedContent(e.target.value)}
                    style={{ border: 'none', fontSize: 18, outline: 'none' }}
                />
            </div>

            <div className={styles.press}>
                <button className={styles.tweetButton} onClick={Submit}>
                    Tweet
                </button>
            </div>
        </div>
    );
}
