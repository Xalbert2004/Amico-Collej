import React from "react";
import styles from "../Menu/menu.module.scss";
import Arrays from '../Menu/Arrays'
import { Link } from "react-router-dom";

export default function Menu(menu1) {
  
  function handleClick(e) {
    e.preventDefault();
  }
  return (
    <div className={styles.container} id={menu1}>
      <p className={styles.title}>Մենյու</p>
      <div className={styles.wrapper}>
        {Arrays.map((x) => (
          <Link
            key={x.id}
            to="moremenu"
            state={{
              title: x.title,
              pizzas: x.pizzas
            }}
          >
            <div className={styles.item} id="menu1">
              <img
                onDragStart={handleClick}
                className={styles.itemImage}
                src={x.img}
              ></img>
              <div className={styles.hoverItem}>
                <p>{x.title}</p>
              </div>
              <p>{x.title}</p>
              <p>{x.content}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
