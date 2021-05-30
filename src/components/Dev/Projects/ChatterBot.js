import React from "react";
import {
  CHATTER_BOT_SITE,
  CHATTER_BOT_REPO
} from "../constants";

export default function ChatterBot() {

  return (
    <article>
      <h3>Chatter-bot</h3>
      <div>
        <a href={CHATTER_BOT_SITE}>Visit site</a>
        <span>|</span>
        <a href={CHATTER_BOT_REPO}>View code</a>
      </div>
      <p>React, JavaScript, CSS, HTML, Express, Node.js, MySQL</p>
      <p>
        Chatter away with this online message board application.
        Create custom chat rooms for topical discussion.
        Make posts up to 255 characters in length.
        Sign-up for user accounts with secure password hashing.
      </p>
    </article>
  )
}