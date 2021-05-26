import React from "react";
import { useLocation } from "react-router-dom";
import styles from "./index.module.css";


export default function Header() {
  const location = useLocation();

  return (
    <header className={styles.container}>
      <p className={styles.path}><code>jodyanna{location.pathname}</code></p>
    </header>
  )
}
