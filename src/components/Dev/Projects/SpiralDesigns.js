import React from "react";
import {
  SPIRAL_DESIGNS_SITE,
  SPIRAL_DESIGNS_REPO
} from "./constants";

export default function SpiralDesigns() {
  return (
    <article>
      <h3>Spiral Designs</h3>
      <div>
        <a href={SPIRAL_DESIGNS_SITE}>Visit site</a>
        <span>|</span>
        <a href={SPIRAL_DESIGNS_REPO}>View code</a>
      </div>
      <p>JavaScript, CSS, HTML</p>
      <p>
        Watch an arithmetic spiral spin.
        A settings toolbar allows for real-time adjustment of the spiral's color, size and background color.
      </p>
    </article>
  )
}
