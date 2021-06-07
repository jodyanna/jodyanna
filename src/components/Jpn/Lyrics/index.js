import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { lyrics } from "./txtFiles";
import ToggleButton from "../../Shared/ToggleButton";
import styles from "./index.module.css";

export default function Lyrics() {
  const [ text, setText ]  = useState("");
  const [ lang, setLang ] = useState("en");
  const { filename } = useParams();

  /**
   * Gets text from a file.
   * @param {string} filename
   * @param {string} lang
   * @returns {Q.Promise<void>}
   */
  const getTextFromFile = (filename, lang) => {
    return fetch(lyrics[filename][lang])
      .then(res => res.text())
      .then(text => setText(text))
      .catch(err => console.log(err))
  }

  /**
   * Toggle language between EN and JP
   */
  const handleClick = () => {
    if (lang === "en") setLang("jp");
    else setLang("en");
  }

  useEffect(() => {
    getTextFromFile(filename, lang);
  }, [filename, lang]);

  return (
    <div style={{whiteSpace: "pre"}}>
      <ToggleButton onClick={handleClick}>{lang}</ToggleButton>
      <article className={styles.textBlock}>
        {text}
      </article>

    </div>
  )
}