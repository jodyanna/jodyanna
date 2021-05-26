import React, { useState, useEffect } from 'react';
import {
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch
} from 'react-router-dom';
import Lyrics from "./Lyrics";
import styles from './index.module.css';

export default function Jpn() {
  let { path, url } = useRouteMatch();

  return (
    <div>

      <h2>Song Lyric Translations</h2>
      <div className={styles.linksContainer}>
        <Link to={`${url}/shyness-boy`}>SHYNESS BOY by Anri</Link>
        <Link to={`${url}/paradisus-paradoxum`}>Paradisus-Paradoxum by MYTH & ROID</Link>
      </div>

      <Switch>
        <Route exact path={path}>
        </Route>
        <Route path={`${path}/:filename`}>
          <Lyrics />
        </Route>
      </Switch>
    </div>
  )
}
