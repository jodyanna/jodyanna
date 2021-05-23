import React from 'react';
import { Link } from 'react-router-dom';
import styles from './index.module.css';

export default function Welcome() {

  return (
    <div className={styles.container}>
      <h1>Hi friend!</h1>
      <p>What brings you here?</p>

      <hr />

      <div className={styles.linksContainerCol}>
        <Link to="/programming" className={styles.link}>
          Web & App Development
        </Link>
        <Link to="/japanese" className={styles.link}>
          Japanese & Translations
        </Link>
        <Link to="/music" className={styles.link}>
          Music
        </Link>
      </div>

      <hr />

      <div className={styles.linksContainerRow}>
        <Link to="/about" className={styles.link}>
          Where am I?
        </Link>
        <a href="http://www.google.com" className={styles.link}>
          I think I'm lost...
        </a>
      </div>
    </div>
  )
}
