import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import styles from "./index.module.css";


export default function Header() {
  const location = useLocation();
  const [ routes, setRoutes ] = useState([]);

  useEffect(() => {
    let pathname = location.pathname;
    let paths = ["/"];

    // Split up pathname if not on root
    if (pathname.length > 1) {
      paths = pathname.split("/");
      // Remove first index's value, it is just an empty string.
      paths.shift();
      // Add '/' to each path in paths
      paths = paths.map(path => `/${path}`)
    }

    setRoutes(paths);
  }, [location])

  const renderPathLinks = () => {
    return routes.map((route, i) => {
      // Last route in path, do not link
      if (i === routes.length - 1) return <span className={styles.link}>{route}</span>

      let path = "";
      for (let j = 0; j < i; j++) {
        path += routes[j];
      }
      path += route;

      return <Link to={path} key={route} className={styles.link}>{route}</Link>
    })
  }

  return (
    <header className={styles.container}>
      <p className={styles.path}>
        <Link to="/" className={styles.link}>jodyanna</Link>
        {renderPathLinks()}
      </p>
    </header>
  )
}
