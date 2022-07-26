import React from "react";
import styles from "../Menu/menu.module.scss";
import burger from "../images/burger.jpeg";
import pizza from "../images/pizza.png";
import hotDishes from "../images/hotDishes.png";
import alkohol from "../images/alkohol.png";
import garnir from "../images/garnir.png";
import salat from "../images/salat.png";
import apur from "../images/borsh.png";
import cola from "../images/cola.png";
import zakuski from "../images/zakuski.png";

export default function Menu({menu1}) {
  const menu = [
    {
      img: pizza,
      title: "Պիցցա",
      content: "Lorem Ipsum",
    },
    {
      img: burger,
      title: "Բուրգեր",
      content: "Lorem Ipsum",
    },

    {
      img: hotDishes,
      title: "Տաք Ուտեստներ",
      content: "Lorem Ipsum",
    },
    {
      img: alkohol,
      title: "Ալկոհոլային ըմպելիքներ",
      content: "Lorem Ipsum",
    },
    {
      img: garnir,
      title: "Խավարտ",
      content: "Lorem Ipsum",
    },
    {
      img: salat,
      title: "Աղցան",
      content: "Lorem Ipsum",
    },
    {
      img: apur,
      title: "Ապուրներ",
      content: "Lorem Ipsum",
    },
    {
      img: cola,
      title: "Զովացուցիչ ըմպելիքներ",
      content: "Lorem Ipsum",
    },
    {
      img: zakuski,
      title: "Սառը խորտիկներ",
      content: "Lorem Ipsum",
    },
  ];
  function handleClick(e) {
    e.preventDefauult();
  }
  return (
    <div className={styles.container} id = {menu1}>
      <p className={styles.title}>Մենյու</p>
      <div className={styles.wrapper}>
        {menu.map((x, index) => (
          <div key={index} className={styles.item}>
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
        ))}
      </div>
    </div>
  );
}
