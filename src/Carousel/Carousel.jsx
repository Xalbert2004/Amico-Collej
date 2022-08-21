import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import styles from "../Carousel/carousel.module.scss";
import img1 from "../images/img1.jpg";
import img2 from "../images/img2.jpg";
import img3 from "../images/img3.jpg";
import img4 from "../images/img4.jpg";
import img5 from "../images/img5.jpg";

export default function Carousel() {
  const settings = {
    infinite: true,
    centerMode: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    speed:500,
  };

  const items = [
    {
      img: img1,
    },
    {
      img: img2,
    },
    {
      img: img3,
    },
    {
      img: img4,
    },
    {
      img: img5,
    },
  ];
  return (
    <div className={styles.container}>
      <Slider style={{backgroundColor:'#FBFDFC', height:'10vw'}} {...settings}>
        {items.map((x, index) => {
          return (
            <div key={index} className={styles.item}>
              <img className={styles.itemImage} src={x.img}></img>
            </div>
          );
        })}
      </Slider>
    </div>
  );
}
