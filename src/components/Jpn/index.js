import React from 'react';
import {
  Switch,
  Route,
  Link,
  useRouteMatch
} from 'react-router-dom';
import Lyrics from "./Lyrics";
import styles from './index.module.css';

export default function Jpn() {
  const { path, url } = useRouteMatch();

  return (
    <div className={styles.container}>
      <Switch>

        <Route exact path={path}>
          <h2>Song Lyric Translations</h2>
          <div className={styles.linksContainer}>
            <Link to={`${url}/shyness-boy`}>SHYNESS BOY by Anri</Link>
            <Link to={`${url}/paradisus-paradoxum`}>Paradisus-Paradoxum by MYTH & ROID</Link>
            <Link to={`${url}/kataomoiwazurai`}>カタオモイワズライ by Cy8er</Link>
          </div>
        </Route>

        <Route path={`${path}/:filename`}>
          <Lyrics />
        </Route>

      </Switch>
    </div>
  )
}
