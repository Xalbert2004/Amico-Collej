import React from "react";
import styles from "../AmicoBackground/amicoBackground.module.scss";
import amicoBackground from "../images/amicoBackground.jpeg";

export default function AmicoBackground({home}) {
  return (
    <div className={styles.container} id ={home}>
      <img className={styles.backgroundImage} src={amicoBackground}></img>
    </div>
  );
}
