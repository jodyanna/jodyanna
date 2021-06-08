import React from "react";
import {
  Link,
  Route,
  Switch,
  useRouteMatch
} from "react-router-dom";
import Projects from "./Projects";
import TechSkills from "./TechSkills";
import styles from "./index.module.css";
import { WCC_LINK } from "./constants";

export default function Dev() {
  const { path, url } = useRouteMatch();

  return (
    <div className={styles.container}>
      <Switch>
        <Route exact path={path}>
          <h2>Welcome to my developer page!</h2>

          <div className={styles.linksContainer}>
            <p>Take a look at my...</p>

            <div>
              <Link to={`${url}/projects`}>Projects</Link>
            </div>

            <div>
              <Link to={`${url}/tech-skills`}>Tech Stack</Link>
            </div>

            <div>
              <a href="https://github.com/jodyanna">GitHub</a>
            </div>

            <div>
              <a href="https://leetcode.com/jodyanna/">LeetCode</a>
            </div>
          </div>

          <article>
            <h3>My background</h3>
            <p>
              I first got into computer programming in May 2019 as a hobby.
              I started out with Python; writing web scrapers and a simple tk-inter UI application.
              I began to get curious about web programming, so I decided to enroll in a couple of courses at my local <a href={WCC_LINK}>community college</a>.
              At school, I learned the basics of HTML, CSS, and JavaScript
              but the COVID pandemic st

            </p>
          </article>

        </Route>

        <Route path={`${path}/projects`}>
          <Projects />
        </Route>
        <Route path={`${path}/tech-skills`}>
          <TechSkills />
        </Route>
      </Switch>
    </div>
  )
}