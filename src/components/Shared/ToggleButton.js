import React, { useState } from "react";
import styles from "./ToggleButton.module.css";

export default function ToggleButton(props) {
  const [ isActive, setIsActive ] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
    props.onClick();
  }

  return (
    <button onClick={handleClick}
            className={isActive ? styles.buttonActive : styles.button}
    >
      <span className={isActive ? styles.sliderActive : styles.slider}>
        {props.children}
      </span>
    </button>
  )
}
