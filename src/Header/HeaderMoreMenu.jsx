import React from "react";
import styles from "../Header/headerMoreMenu.module.scss";
import amicoLogo from "../images/amicologo.png";
import { IoMdArrowRoundBack } from "react-icons/io";

export default function Header() {
  function handleClick(e) {
    e.preventDefault();
  }
  return (
    <div className={styles.container}>
      <a href = "/"><IoMdArrowRoundBack className={styles.backward} /></a>
      <img
        onDragStart={handleClick}
        className={styles.headerLogo}
        src={amicoLogo}
      ></img>
      <div className={styles.wrapper}>
        <p>Առաքում</p>
        <p>094-26-22-62</p>
      </div>
    </div>
  );
}
