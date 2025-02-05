import { Key, useState } from "react";
import Tweet from "./Tweet.tsx";

interface Tweet {
    authorName: string;
    authorUsername: string;
    content: string;
    category?: string;
    img?: string;
    replies?: number;
    retweets?: number;
    likes?: number;
}

interface TweetsListProps {
    tweets: Tweet[];
}

export default function TweetsList({ tweets }: TweetsListProps) {
    const [text, UpdateText] = useState("");
    const [variant, SetVariant] = useState("");

    const filteredTweets = tweets.filter(
        (tweet: Tweet) =>
            (tweet.authorName.toLowerCase().includes(text.toLowerCase()) ||
                tweet.authorUsername.toLowerCase().includes(text.toLowerCase()) ||
                tweet.content.toLowerCase().includes(text.toLowerCase())) &&
            (variant === "" || tweet.category === variant)
    );

    return (
        <div>
            <input
                type="text"
                placeholder="Search tweets..."
                value={text}
                onChange={(e) => UpdateText(e.target.value)}
                style={{
                    width: "400px",
                    padding: "10px",
                    marginBottom: "20px",
                    border: "none",
                    outline: "none",
                    fontSize: "16px",
                }}
            />

            <select value={variant} onChange={(e) => SetVariant(e.target.value)}>
                <option value="">All</option>
                <option>Education</option>
                <option>Politics</option>
                <option>Personal</option>
                <option>API</option>
            </select>

            {filteredTweets.map((tweet, index: Key | null | undefined) => (
                <Tweet img={tweet.img || ""} replies={tweet.replies || 0} retweets={tweet.retweets || 0} likes={tweet.likes || 0} {...tweet} key={index} />
            ))}
        </div>
    );
}
