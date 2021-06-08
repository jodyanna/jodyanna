import React from "react";
import {
  Link,
  Route,
  Switch,
  useRouteMatch
} from "react-router-dom";
import SpiralDesigns from "./SpiralDesigns"
import KanjiPreReader from "./KanjiPreReader";
import ChatterBot from "./ChatterBot";
import styles from "./index.module.css";

export default function Projects() {
  const { path, url } = useRouteMatch();

  return (
    <div className={styles.container}>
      <Switch>
        <Route exact path={path}>
          <h2>My Projects</h2>
          <div className={styles.linksContainer}>
            <Link to={`${url}/kanji-pre-reader`}>Kanji Pre-Reader</Link>
            <Link to={`${url}/chatter-bot`}>Chatter-bot</Link>
            <Link to={`${url}/spiral-designs`}>Spiral Designs</Link>
          </div>
        </Route>

        <Route path={`${path}/spiral-designs`}>
          <SpiralDesigns />
        </Route>
        <Route path={`${path}/chatter-bot`}>
          <ChatterBot />
        </Route>
        <Route path={`${path}/kanji-pre-reader`}>
          <KanjiPreReader />
        </Route>
      </Switch>
    </div>
  )
}