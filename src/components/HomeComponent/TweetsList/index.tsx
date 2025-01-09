import { useState } from "react";
import Tweet from "./Tweet.tsx";

export default function TweetsList({ tweets }) {
    const [text, UpdateText] = useState("");

    const filteredTweets = tweets.filter(
        (tweet) =>
            tweet.authorName.toLowerCase().includes(text.toLowerCase()) ||
            tweet.authorUsername.toLowerCase().includes(text.toLowerCase()) ||
            tweet.content.toLowerCase().includes(text.toLowerCase())
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

            {filteredTweets.map((tweet, index) => (
                <Tweet {...tweet} key={index} />
            ))}
        </div>
    );
}
