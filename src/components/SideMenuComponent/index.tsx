import styles from './index.module.css';
import twitterLogo from './images/twitter.png';
import LogoPersonal from './images/profilePhoto.jpeg';
import {BOOKMARKS_SVG, EXPLORE_SVG, HOME_SVG, MESSAGES_SVG, NOTIFICATIONS_SVG} from "./images";
import MenuItem from "./MenuItem/MenuItem.tsx";

export default function SideMenu() {
    const menu = [
        {
            icon: HOME_SVG,
            name: 'Home'
        },
        {
            icon: EXPLORE_SVG,
            name: 'Explore'
        },
        {
            icon: NOTIFICATIONS_SVG,
            name: 'Notifications'
        },
        {
            icon: MESSAGES_SVG,
            name: 'Messages'
        },
        {
            icon: BOOKMARKS_SVG,
            name: 'Bookmarks'
        }

    ]

    return (
        <div className={styles.SideMenu}>
            <img src={twitterLogo} alt="Twitter Logo" className={styles.logoIcon}/>
            {menu.map((item, index) => (
                <MenuItem item={item} key={index} />
            ))}
            <div className={styles.User}>
                <div className={styles.icon}>
                    <img src={LogoPersonal} alt="User Personal" className={styles.UserIcon}/>
                </div>
                <p className={styles.name}>Nurzhan Sultanov</p>
            </div>
        </div>
    );
}
