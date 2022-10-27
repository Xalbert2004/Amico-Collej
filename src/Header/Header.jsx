import React from "react";
import styles from "../Header/header.module.scss";
import amicoLogo from "../images/amicologo.png";

export default function Header() {
  function handleClick(e) {
    e.preventDefault();
  }
  return (
    <div className={styles.container}>
      <img
        onDragStart={handleClick}
        className={styles.headerLogo}
        src={amicoLogo}
      ></img>
      <nav>
        <ul>
          <li>
            <a href="#home">Գլխավոր</a>
          </li>
          <li>
            <a href="#menu1">Մենյու</a>
          </li>
          <li>
            <a href="#kap">Կապ</a>
          </li>
          <li>
          <a href="#">Գրանցում</a>  
          </li>
        </ul>
      </nav>
      <div className={styles.wrapper}>
        <p>Առաքում</p>
        <a href="tel:094-26-22-62">094-26-22-62</a>
      </div>
    </div>
  );
}
