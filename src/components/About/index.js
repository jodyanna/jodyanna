import React from "react";
import styles from "./index.module.css";

export default function About() {

  return (
    <div className={styles.container}>
      <h1>Q&A</h1>

      <article>
        <h2>Where am I? What is this?</h2>
        <p>
          You are on the internet and this is the personal website of me, jodyanna!
          Please enjoy your stay!
        </p>
      </article>

      <article>
        <h2>Who are you?</h2>
        <p>
          I'm just some guy that enjoys learning new things and meeting new people.
          I like programming websites and applications, speaking and reading in Japanese, and producing music.
        </p>
      </article>

      <article>
        <h2>What can I do here?</h2>
        <p>
          A whole bunch of stuff! For starters...
        </p>
        <p>
          You can check out my deployed websites and applications, click <a href="#">here</a> for some links.
          You are also welcome to view the source code for each project on GitHub.
        </p>
        <p>
          From time to time, I like to do unofficial "fan" translations of whatever Japanese media I find interesting.
          Here you can view some translations I've done or checkout some resources I recommend for study.
          Interested in getting something translated? Click <a href="#">here</a> for more details.
        </p>
        <p>
          I also have an archive of material from all of the musical projects I've been involved with.
          There are links to live videos on YouTube, .mp3 files for download, and links to other resources.
        </p>
      </article>

    </div>
  )
}
