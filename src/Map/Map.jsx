import React from "react";
import styles from "../Map/map.module.scss";

export default function Map({kap}) {
  return (
    <div className={styles.container} id={kap}>
      <iframe
        className={styles.map}
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d637.3354734109938!2d44.960550962177926!3d40.54831562169715!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x404046c3c1d203e3%3A0xb55dfa4d40f7c544!2sAMICO%20cafeteria!5e0!3m2!1sru!2s!4v1661598538978!5m2!1sru!2s"
        width="600"
        height="450"
      ></iframe>
    </div>
  );
}
