import styles from "./MenuItem.module.css";
import React from "react";

interface MenuItemProps {
    item: {
        icon: React.ReactNode;
        name: string;
    }
}

export default function MenuItem( {item} : MenuItemProps ) {

    return (
        <div className={styles.menuItem}>
            <div className={styles.icon}>
                {item.icon}
            </div>
            <p className={styles.name}>{item.name}</p>
        </div>
    )
}