import React from "react";
import {
  KANJI_PRE_READER_SITE,
  KANJI_PRE_READER_REPO
} from "./constants";

export default function KanjiPreReader() {

  return (
    <article>
      <h3>Kanji Pre-Reader</h3>
      <div>
        <a href={KANJI_PRE_READER_SITE}>Visit site</a>
        <span>|</span>
        <a href={KANJI_PRE_READER_REPO}>View code</a>
      </div>
      <p>React, JavaScript, CSS, HTML</p>
      <p>
        Create custom kanji study sheets from any Japanese text with this web application.
        Input the text, select the kanji, and then download the PDF.
        Become a master of kanji with any text of your choosing!
      </p>
    </article>
  )
}
