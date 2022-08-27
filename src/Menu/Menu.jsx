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
import { Link } from "react-router-dom";

export default function Menu(menu1) {
  const menu = [
    {
      id: 1,
      img: pizza,
      title: "Պիցցա",
      content: "Lorem Ipsum",

      img1: pizza,
      title1: "pizza1",
      content1: "cheese",

      img2: pizza,
      title2: "pizza2",
      content2: "cheese",

      img3: pizza,
      title3: "pizza3",
      content3: "cheese",

      img4: pizza,
      title4: "pizza4",
      content4: "cheese",

      img5: pizza,
      title5: "pizza5",
      content5: "cheese",

      img6: pizza,
      title6: "pizza6",
      content6: "cheese",

      img7: pizza,
      title7: "pizza7",
      content7: "cheese",

      img8: pizza,
      title8: "pizza8",
      content8: "cheese",
    },
    {
      id: 2,
      img: burger,
      title: "Բուրգեր",
      content: "Lorem Ipsum",

      img1: burger,
      title1: "burger1",
      content1: "cheese",

      img2: burger,
      title2: "burger2",
      content2: "cheese",

      img3: burger,
      title3: "burger3",
      content3: "cheese",

      img4: burger,
      title4: "burger4",
      content4: "cheese",

      img5: burger,
      title5: "burger5",
      content5: "cheese",

      img6: burger,
      title6: "burger6",
      content6: "cheese",

      img7: burger,
      title7: "burger7",
      content7: "cheese",

      img8: burger,
      title8: "burger8",
      content8: "cheese",
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
  return (
    <div className={styles.container} id={menu1}>
      <p className={styles.title}>Մենյու</p>
      <div className={styles.wrapper}>
        {menu.map((x) => (
          <Link
            key={x.id}
            to="moremenu"
            state={{
              title: x.title,

              img1: x.img1,
              title1: x.title1,
              content1: "cheese",

              img2: x.img2,
              title2: x.title2,
              content2: "cheese",

              img3: x.img3,
              title3: x.title3,
              content3: "cheese",

              img4: x.img4,
              title4: x.title4,
              content4: "cheese",

              img5: x.img5,
              title5: x.title5,
              content5: "cheese",

              img6: x.img6,
              title6: x.title6,
              content6: "cheese",

              img7: x.img7,
              title7: x.title7,
              content7: "cheese",

              img8: x.img8,
              title8: x.title8,
              content8: "cheese",
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
