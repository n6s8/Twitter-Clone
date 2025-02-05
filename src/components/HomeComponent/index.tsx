import { useState } from "react";
import styles from './index.module.css';
import NewTweet from "./NewTweet";
import TweetsList from "./TweetsList";
import useFetch from "../../hooks/useFetch.ts";
import KZ_IMG_PATH from "./images/kz.png";
import NFACTORIAL_IMG_PATH from "./images/nfactorial.png";

export default function Home() {
    const [tweets, UpdateTweets] = useState([
        {
            authorName: "Free KZ today",
            authorUsername: "@kz",
            img: KZ_IMG_PATH,
            content: 'Youth won GOLD MEDALS FROM IOI and IMO',
            replies: 200,
            retweets: 1000,
            likes: 500,
            category: "Politics",
        },
        {
            authorName: "nFactorial",
            authorUsername: "@nfactorial",
            img: NFACTORIAL_IMG_PATH,
            content: 'Data analytics course starts today',
            replies: 1000,
            retweets: 2000,
            likes: 5000,
            category: "Education",
        },
    ]);

    const { data: posts, loading, error, refetch } = useFetch("https://jsonplaceholder.typicode.com/posts");

    const addNewTweet = (newTweet: {
        authorName: string;
        authorUsername: string;
        img: string;
        content: string;
        replies: number;
        retweets: number;
        likes: number;
        category: string;
    })  => {
        UpdateTweets((prevTweets) => [newTweet, ...prevTweets]);
    };

    return (
        <div className={styles.MainPart}>
            <h5>Home</h5>

            <NewTweet addTweet={addNewTweet} />

            <TweetsList tweets={tweets} />

            <h5>Fetched Posts</h5>
            {loading && <p>Loading...</p>}
            {error && <p>Error: {error}</p>}
            <button onClick={refetch} style={{ marginBottom: "20px", padding: "10px", fontSize: "16px" }}>
                Reload Posts
            </button>

            {posts && (
                <TweetsList
                    tweets={posts.map((post: { id: number; title: string; body: string }) => ({
                        authorName: "API User",
                        authorUsername: "@api_user",
                        content: post.title + " - " + post.body,
                        replies: Math.floor(Math.random() * 500),
                        retweets: Math.floor(Math.random() * 1000),
                        likes: Math.floor(Math.random() * 2000),
                        img: "",
                        category: "API",
                    }))}
                />
            )}
        </div>
    );
}
