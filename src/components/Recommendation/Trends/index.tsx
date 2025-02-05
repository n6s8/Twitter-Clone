import styles from './index.module.css'
import Settings from '../images/settings.png'
import Vector from '../images/Vector.png'

export default function Trends(){
    const Trendings =[
        {
            location: 'Trending in Russia',
            content: 'It is not our fault',
            stats: '50.4 Tweets'
        },
        {
            location: 'Trending in Kazakhstan',
            content: 'I want to live pleaseee',
            stats: '100.8 Tweets'
        },
        {
            location: 'Trending in Azerbaijan',
            content: 'Russia We will destroy',
            stats: '80 Tweets'
        }
    ]


    return(
        <div className={styles.Content}>
            <div className={styles.Header}>
                <h1 className={styles.Text}>Trends for you</h1>
                <div className={styles.Image}>
                    <img src={Settings} className={styles.Icon} alt='Settings'/>
                </div>
            </div>
            {Trendings.map((item, index) => (
                <div key={index} className={styles.Blog}>
                    <div>
                        <p className={styles.Text1}>{item.location}</p>
                        <h2 className={styles.Text}>{item.content}</h2>
                        <p className={styles.Text2}>{item.stats}</p>
                    </div>
                    <div>
                        <img src={Vector} alt='Vector' />
                    </div>
                </div>

            ))}
            <a className={styles.showMore}>
                Show more
            </a>
        </div>
    )
}