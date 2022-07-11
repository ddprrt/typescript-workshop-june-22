import React from "react"
import styles from  "../styles/Button.css"

import MainPage from "../documents/main.mdx"

function Button() {
    return <>
        <MainPage />
        <button className={styles.buttonPrimary}>Hello</button>
    </>
}

export {}