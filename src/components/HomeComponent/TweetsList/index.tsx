import React, { useState } from "react";
import { KZ_IMG_PATH, NFACTORIAL_IMG_PATH } from "../images";
import Tweet from "./Tweet.tsx";

export default function TweetsList() {
    const allTweets = [
        {
            authorName: "Free KZ today",
            authorUsername: "@kz",
            img: KZ_IMG_PATH,
            content: 'Youth won GOLD MEDALS FROM IOI and IMO',
            replies: 200,
            retweets: 1000,
            likes: 500,
        },
        {
            authorName: "nFactorial",
            authorUsername: "@nfactorial",
            img: NFACTORIAL_IMG_PATH,
            content: 'Data analytics course starts today',
            replies: 1000,
            retweets: 2000,
            likes: 5000,
        },
        {
            authorName: "nFactorial",
            authorUsername: "@nfactorial",
            img: NFACTORIAL_IMG_PATH,
            content: 'Black friday! Успей купить все курсы!',
            replies: 1000,
            retweets: 2000,
            likes: 5000,
        },
    ];

    const [text, FixText] = useState("");
    const [filteredTweets, FilteredTweets] = useState(allTweets);

    const ChangeDetect = (e: React.ChangeEvent<HTMLInputElement>) => {
        const input = e.target.value.toLowerCase();

        FixText(input);

        const filtered = allTweets.filter(
            (tweet) =>
                tweet.authorName.toLowerCase().includes(input) ||
                tweet.authorUsername.toLowerCase().includes(input) ||
                tweet.content.toLowerCase().includes(input)
        );

        FilteredTweets(filtered);
    };

    return (
        <div>
            <input
                type="text"
                placeholder="Search tweets..."
                value={text}
                onChange={ChangeDetect}
                style={{
                    width: "400px",
                    padding: "10px",
                    marginBottom: "20px",
                    border: "none",
                    outline: "none",
                    fontSize: "16px",
                }}
            />

            {filteredTweets.map((tweet, index) => (
                <Tweet {...tweet} key={index} />
            ))}
        </div>
    );
}
