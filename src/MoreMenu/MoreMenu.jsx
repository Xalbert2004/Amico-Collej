import React from "react";
import { useLocation } from "react-router-dom";
import styles from "../MoreMenu/moreMenu.module.scss";
export default function MoreMenu() {
  const location = useLocation();
  const title = location.state.title;
  const pizzas = location.state.pizzas;

  console.log(pizzas);
  console.log(title);

  return (
    <div className={styles.container}>
      <p className={styles.title}>{title}</p>
      <div className={styles.wrapper}>
        {pizzas.map((x) => (
          <div key={x.id} className={styles.itemsMenu}>
            <img src={x.img}></img>
            <p className={styles.itemTitle}>{x.title}</p>
            <p className={styles.itemContent}>{x.content}</p>
            <div className={styles.hoverItem}>
                <p>{x.salary}</p>
              </div>
          </div>
          
        ))}
      </div>
    </div>
  );
}
