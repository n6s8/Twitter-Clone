import { Key, useState } from "react";
import Tweet from "./Tweet.tsx";

interface Tweet {
    authorName: string;
    authorUsername: string;
    content: string;
}

interface TweetsListProps {
    tweets: Tweet[];
}

export default function TweetsList({ tweets }: TweetsListProps) {
    const [text, UpdateText] = useState("");

    const filteredTweets = tweets.filter(
        (tweet: Tweet) =>
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

            {filteredTweets.map((tweet, index: Key | null | undefined) => (
                <Tweet img={""} replies={0} retweets={0} likes={0} {...tweet} key={index} />
            ))}
        </div>
    );
}
