import React from "react";
import { useLocation } from "react-router-dom";
import styles from "../MoreMenu/moreMenu.module.scss";
export default function MoreMenu() {
  const location = useLocation();
  const title = location.state.title;

  const img1 = location.state.img1;
  const title1 = location.state.title1;
  const content1 = location.state.content1;

  const img2 = location.state.img2;
  const title2 = location.state.title2;
  const content2 = location.state.content2;

  const img3 = location.state.img3;
  const title3 = location.state.title3;
  const content3 = location.state.content3;

  const img4 = location.state.img4;
  const title4 = location.state.title4;
  const content4 = location.state.content4;

  const img5 = location.state.img5;
  const title5 = location.state.title5;
  const content5 = location.state.content5;

  const img6 = location.state.img6;
  const title6 = location.state.title6;
  const content6 = location.state.content6;

  const img7 = location.state.img7;
  const title7 = location.state.title7;
  const content7 = location.state.content7;

  const img8 = location.state.img8;
  const title8 = location.state.title8;
  const content8 = location.state.content8;

  const items = [
    {
      img: img1,
      title: title1,
      content: content1,
    },
    {
      img: img2,
      title: title2,
      content: content2,
    },
    {
      img: img3,
      title: title3,
      content: content3,
    },
    {
      img: img4,
      title: title4,
      content: content4,
    },
    {
      img: img5,
      title: title5,
      content: content5,
    },
    {
      img: img6,
      title: title6,
      content: content6,
    },
    {
      img: img7,
      title: title7,
      content: content7,
    },
    {
      img: img8,
      title: title8,
      content: content8,
    },
  ];
  console.log(title);
  return (
    <div className={styles.container}>
      <p className={styles.title}>{title}</p>
      <div className={styles.wrapper}>
        {items.map((x) => (
          <div className={styles.itemsMenu}>
            <img src={x.img}></img>
            <p className={styles.itemTitle}>{x.title}</p>
            <p className={styles.itemContent}>{x.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
