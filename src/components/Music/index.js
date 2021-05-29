import React from 'react';
import styles from './index.module.css';
import * as c from './constants';

export default function Music() {

  return (
    <div>
      <div>
        Here is an archive of most of my musical endeavors.
      </div>

      <section>
        <h2>Benny Timbre</h2>
        <p>I played organ and synthesizer from 2017-2018.</p>
        <p><a href={c.BT_BC_LINK}>Listen on bandcamp</a></p>
        <h3>Live videos</h3>
        <div className={styles.liveVideoLinks}>
          <a href={c.THANK_YOU_LIVE_DZ_FEST}>Thank You - Live @ DZ Fest 2018</a>
          <a href={c.GOOD_GURL_LIVE_DZ}>Good Gurl - Live @ DZ 2017</a>
          <a href={c.ALONE_LIVE_DZ}>Alone In The Cold, Alone - Live @ DZ 2017</a>
        </div>
      </section>

      <section>
        <h2>Jackie Islands</h2>
        <p>
          I played guitar, synthesizer, and various keyboards from 2015-2017.
          I played bass guitar from 2012-2014.
        </p>
        <p><a href={c.JI_BC_LINK}>Listen on bandcamp</a></p>
        <h3>Live videos</h3>
        <div className={styles.liveVideoLinks}>
          <a href={c.CAT_TONIC_LIVE_DZ_FEST}>Cat Tonic - Live @ DZ Fest 2016</a>
          <a href={c.IMPANEMA_LIVE_DZ}>Impanema - Live @ DZ 2016</a>
          <a href={c.STRIPPERS_LIVE_DZ}>Strippers - Live @ DZ 2016</a>
          <a href={c.NIGHT_BATH_LIVE_DZ}>Night Bath - Live @ DZ 2016</a>
          <p></p>
          <a href={c.SWIMMING_LIVE_CMS}>Swimming - Live @ CMS 2016</a>
          <a href={c.STRIPPERS_LIVE_CMS}>Strippers - Live @ CMS 2016</a>
          <a href={c.NIGHT_BATH_LIVE_CMS}>Night Bath - Live @ CMS 2016</a>
          <a href={c.CHERRY_BLOSSOM_LIVE_CMS}>Cherry Blossom - Live @ CMS 2016</a>
          <a href={c.LIVE_SET_WITH_INTERVIEWS_CMS}>Full set w/ interviews - Live @ CMS 2016</a>
          <p></p>
          <a href={c.ELEPHANTS_LIVE_CHILL_FEST}>Elephant's Heavenly Quest - Live @ Chill Fest 2015</a>
        </div>
      </section>

      <section>
        <h2>Maple's Magic Castle</h2>
        <p>
          Small solo project that ran throughout 2017.
        </p>
        <p><a href={c.MMC_BC_LINK}>Listen on bandcamp</a></p>
      </section>

    </div>
  )
}
