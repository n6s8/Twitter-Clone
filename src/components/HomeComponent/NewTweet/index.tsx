import {PROFILE_IMG_PATH} from "../images";
import styles from './index.module.css';

export default function NewTweet(){
    return (
        <div className={styles.input} style={{borderBottom: '2px solid whitesmoke'}}>
            <div className={styles.info}>
                <img src={PROFILE_IMG_PATH} style={{width: 50, height: 50, borderRadius: 50}} alt={PROFILE_IMG_PATH}/>
                <input placeholder='Whats happening?' style={{border: 'none', fontSize: 18, outline: 'none'}}/>
            </div>

            <div className={styles.press}>
                <button className={styles.tweetButton}>
                    Tweet
                </button>
            </div>
        </div>
    )
}