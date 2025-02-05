import styles from "./index.module.css";
import DalidaAvatar from "../images/Dalida.png";
import MeAvatar from "../images/Me.png";
import SamatAvatar from "../images/SamatMentor.png"

export default function Follow() {
    const users = [
        {
            name: "Dalida",
            username: "@Dalida",
            avatar: DalidaAvatar,
        },
        {
            name: "Aruzhan",
            username: "@Aruzhan",
            avatar: MeAvatar,
        },
        {
            name: "Samat",
            username: "@Samat",
            avatar: SamatAvatar,
        }
    ];
    return (
        <div className={styles.container}>
            <h3 className={styles.title}>You might like</h3>
            <div className={styles.userList}>
                {users.map((user, index) => (
                    <div key={index} className={styles.userItem}>
                        <img
                            src={user.avatar}
                            alt={user.name}
                            className={styles.avatar}
                        />
                        <div className={styles.userInfo}>
                            <p className={styles.name}>{user.name}</p>
                            <p className={styles.username}>{user.username}</p>
                        </div>
                        <button className={styles.followButton}>Follow</button>
                    </div>
                ))}
            </div>
            <a className={styles.showMore}>
                Show more
            </a>
        </div>
    )
}