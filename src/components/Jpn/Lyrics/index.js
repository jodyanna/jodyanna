import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { lyrics } from "./txtFiles";

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
   * @param e
   */
  const handleClick = e => {
    e.preventDefault();
    if (lang === "en") setLang("jp");
    else setLang("en");
  }

  useEffect(() => {
    getTextFromFile(filename, lang);
  }, [filename, lang]);

  return (
    <div style={{whiteSpace: "pre"}}>
      <button onClick={handleClick}>{lang}</button>
      {text}
    </div>
  )
}