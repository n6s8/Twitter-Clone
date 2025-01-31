import { useState } from "react";
import { COMMENTS, LIKES, RETWEETS, SHARE,  } from "../images";
import like from "../images/redlike.png";
import styles from './Tweet.module.css';

interface TweetProps {
    img: string;
    authorName: string;
    authorUsername: string;
    content: string;
    replies: number;
    retweets: number;
    likes: number;
}

export default function Tweet(tweet: TweetProps) {
    const [likes, setLikes] = useState(tweet.likes);
    const [clicked, setClicked] = useState(true);
    const LIKED = () => {
        setClicked(!clicked)
        if (clicked){
            setLikes(likes + 1)
        } else{
            setLikes(likes - 1)
        }
    }
    return (
        <div style={{ borderBottom: "2px solid whitesmoke" }}>
            <p className={styles.rec} style={{ fontSize: 13, fontWeight: "600" }}>
                You might like! <span style={{ color: "blue" }}>See more</span>
            </p>
            <div className={styles.info}>
                <img
                    src={tweet.img}
                    alt="Profile"
                    style={{ width: 50, height: 50, borderRadius: "50%", borderWidth: 50 }}
                />
                <div className={styles.content}>
                    <p style={{ fontWeight: 600 }}>
                        {tweet.authorName} <span style={{ color: "grey" }}>{tweet.authorUsername}</span>
                    </p>
                    <p>{tweet.content}</p>
                </div>
            </div>
            <div>
                <div className={styles.details} style={{ width: "80%" }}>
                    <div className={styles.block}>
                        <div style={{ width: 18, height: 15 }}>{COMMENTS}</div>
                        <p>{tweet.replies}</p>
                    </div>

                    <div className={styles.block}>
                        <div style={{ width: 18, height: 15 }}>{RETWEETS}</div>
                        <p>{tweet.retweets}</p>
                    </div>

                    <div className={styles.block}>
                        <div style={{width: 18, height: 15, cursor: "pointer"}}
                             onClick={LIKED}
                        > {clicked ? LIKES : <img src={like} style={{width: 18, height: 15, cursor: "pointer"}} alt={"Like"}/>}</div>
                        <p>{likes}</p>
                    </div>

                    <div style={{ width: 18, height: 15 }}>{SHARE}</div>
                </div>
            </div>
        </div>
    );
}
