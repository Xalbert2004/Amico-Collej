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
import {
  BrowserRouter as Router,
  Link
} from "react-router-dom";

export default function Menu({ menu1 }) {
  const menu = [
    {
      id: 1,
      img: pizza,
      title: "Պիցցա",
      content: "Lorem Ipsum",
    },
    {
      id: 2,
      img: burger,
      title: "Բուրգեր",
      content: "Lorem Ipsum",
    },

    {
      id: 3,
      img: hotDishes,
      title: "Տաք Ուտեստներ",
      content: "Lorem Ipsum",
    },
    {
      id: 4,
      img: alkohol,
      title: "Ալկոհոլային ըմպելիքներ",
      content: "Lorem Ipsum",
    },
    {
      id: 5,
      img: garnir,
      title: "Խավարտ",
      content: "Lorem Ipsum",
    },
    {
      id: 6,
      img: salat,
      title: "Աղցան",
      content: "Lorem Ipsum",
    },
    {
      id: 7,
      img: apur,
      title: "Ապուրներ",
      content: "Lorem Ipsum",
    },
    {
      id: 8,
      img: cola,
      title: "Զովացուցիչ ըմպելիքներ",
      content: "Lorem Ipsum",
    },
    {
      id: 9,
      img: zakuski,
      title: "Սառը խորտիկներ",
      content: "Lorem Ipsum",
    },
    
  ];

  function handleClick(e) {
    e.preventDefauult();
  }

  function oneClick(id, img, title, content) {
    console.log(id);
    console.log(img);
    console.log(title);
    console.log(content)
  }

  return (
    <div className={styles.container} id={menu1}>
      <p className={styles.title}>Մենյու</p>
      <div className={styles.wrapper}>
        {menu.map((x, index) => (
          // <link>
            <div key={index} className={styles.item} 
            onClick={() => oneClick(x.id, x.img, x.title, x.content)}>
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
            // </link>
        ))}
      </div>
    </div>
  );
}
