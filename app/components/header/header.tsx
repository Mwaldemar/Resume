import React from "react";
import { Navbar } from "../navbar/navbar";
import styles from './header.module.scss'

export const Header = () => {
    return (
        <div className={styles.headerWrapper}>
            <Navbar />
        </div>
    )
}