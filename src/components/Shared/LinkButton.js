import React from 'react';
import styles from "./LinkButton.module.css";

export default function LinkButton(props) {
  return (
    <button className={styles.button}>
      {props.children}
    </button>
  )
}
