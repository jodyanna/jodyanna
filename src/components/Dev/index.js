import React from "react";
import {
  Link,
  Route,
  Switch,
  useRouteMatch
} from "react-router-dom";
import SpiralDesigns from "./Projects/SpiralDesigns"
import KanjiPreReader from "./Projects/KanjiPreReader";
import ChatterBot from "./Projects/ChatterBot";
import styles from "./index.module.css";

export default function Dev() {
  const { path, url } = useRouteMatch();

  return (
    <div>
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