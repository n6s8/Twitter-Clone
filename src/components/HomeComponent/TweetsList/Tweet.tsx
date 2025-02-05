import { useState } from "react";
import { COMMENTS, LIKES, RETWEETS, SHARE } from "../images";
import like from "../images/redlike.png";
import styles from './Tweet.module.css';
import Profile from "../images/profilePhoto.jpeg";

interface TweetProps {
    img?: string;
    authorName: string;
    authorUsername: string;
    content: string;
    replies?: number;
    retweets?: number;
    likes?: number;
}

export default function Tweet(tweet: TweetProps) {
    const [likes, setLikes] = useState(tweet.likes || 0);
    const [clicked, setClicked] = useState(true);
    const LIKED = () => {
        setClicked(!clicked);
        setLikes((prevLikes) => (clicked ? prevLikes + 1 : prevLikes - 1));
    };

    return (
        <div style={{ borderBottom: "2px solid whitesmoke" }}>
            <div className={styles.info}>
                <img
                    src={(tweet.img) ? tweet.img : Profile}
                    alt="Profile"
                    style={{ width: 50, height: 50, borderRadius: "50%" }}
                />
                <div className={styles.content}>
                    <p style={{ fontWeight: 600 }}>
                        {tweet.authorName} <span style={{ color: "grey" }}>{tweet.authorUsername}</span>
                    </p>
                    <p>{tweet.content}</p>
                </div>
            </div>
            <div className={styles.details}>
                <div className={styles.block}><div style={{width: "18px", height: "15px"}}>{COMMENTS}</div><p>{tweet.replies}</p></div>
                <div className={styles.block}><div style={{width: "18px", height: "15px"}}>{RETWEETS}</div><p>{tweet.retweets}</p></div>
                <div className={styles.block}>
                    <div onClick={LIKED} style={{width: "18px", height: "15px"}}>{clicked ? LIKES : <img src={like} alt="Like" width={18} height={15} />}</div>
                    <p>{likes}</p>
                </div>
                <div style={{width: "18px", height: "15px"}}>{SHARE}</div>
            </div>
        </div>
    );
}
