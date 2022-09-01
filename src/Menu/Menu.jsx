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
      content:
        "Ամիգո, Պեպերոնի, Կոռլեոն Մարգարիտա, Ալ Պրոշուտտո, Կորիդա, Վեգետարիական, Չեզարե, Ասորտի մսով, Կուատրո Ֆորմաջի, Պրիմավերա, Սիցիլիա",

      pizzas: {
        img1: pizza,
        title1: "Ամիգո",
        // content1: "cheese",

        img2: pizza,
        title2: "Պեպերոնի",
        content2:
          "Երշիկ «Պեպերոնի», բուլղարական պղպեղ, պանիր (Ֆենդել, մոցարելլա), սոուս ",

        img3: pizza,
        title3: "Կոռլեոն",
        content3:
          "Բաստուրմա,  բուլղարական պղպեղ, օրեգատո, պանիր (Ֆենդել, մոցարելլա), սոուս",

        img4: pizza,
        title4: "Մարգարիտա",
        content4: "պանիր (Ֆենդել, մոցարելլա), բուլղարական պղպեղ, սոուս",

        img5: pizza,
        title5: "Ալ Պրոշուտտո",
        content5:
          "Խոզապուխտ, լոլիկ, ձիթապտուղ, սերվելատ, սոուս, պանիր (Ֆենդել, մոցարելլա)",

        img6: pizza,
        title6: "Կորիդա",
        content6:
          "Տավարի միս, սունկ, սոուս, պանիր (Ֆենդել, մոցարելլա), լոլիկ, ձիթապտուղ",

        img7: pizza,
        title7: "Վեգետարիական",
        content7:
          "Սունկ, Բուլղարական պղպեղ, լոլիկ, մարինացված եգիպտացորեն, պանիր",

        img8: pizza,
        title8: "Չեզարե",
        content8: "Հավի կրծքամիս, բուլղարական պանիր, պանիր, սոուս",

        img9: pizza,
        title9: "Ասորտի մսով",
        content9:
          "Հավի կրծքամիս, սունկ, տավարի միս, լոլիկ, խոզապուխտ, սերվելատ, բաստուրմա",

        img10: pizza,
        title10: "Կուատրո Ֆորմաջի",
        content10: "Ռոկվոր, սուլուգունի, ֆենդել, մոցարելլա, օրեգանո, սոուս",

        img11: pizza,
        title11: "Պրիմավերա",
        content11:
          "Խոզապուխտ, հավի կրծքամիս, սունկ, պանիր (Ֆենդել, մոցարելլա), սոուս",

        img12: pizza,
        title12: "Սիցիլիա",
        content12:
          "Տավարի միս, բուլղարական պղպեղ, պանիր (Ֆենդել, մոցարելլա), սոուս ",
      },
    },

    {
      id: 2,
      img: burger,
      title: "Բուրգեր",
      content: "Տավարի մսով, հավի մսով, խոզապուխտով",

      img1: burger,
      title1: "Տավարի մսով",
      content1:
        "Տավարի կոտլետ, հազարի տերև, վարունգ, լոլիկ, մայոնեզ, կետչուպ, խոխլանդ պանիր",

      img2: burger,
      title2: "Հավի մսով",
      content2:
        "Հավի կոտլետ, հազարի տերև, վարունգ, լոլիկ, մայոնեզ, կետչուպ, խոխլանդ պանիր",

      img3: burger,
      title3: "Խոզապուխտով",
      content3:
        "Խոզապուխտ, հազարի տերև, վարունգ, լոլիկ, մայոնեզ, կետչուպ, խոխլանդ պանիր",
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

      img1: salat,
      title1: "Կայսերական",
      content1:
        "Հազարի տերևներ, հավի կրցքամիս, չորահաց, լոլիկ, սոուս, թարմ եզան պանիր",

      img2: salat,
      title2: "Հունական",
      content2: "Վարունգ, լոլիկ, ձիթապտուղ, ձիթապտղի ձեթ, բրինձա պանիր, սոխ",

      img3: salat,
      title3: "Ամառային",
      content3: "Լոլիկ, վարունգ, կանաչի, սոխ, բուսայուղ,",

      img4: salat,
      title4: "Տավարի մսով աղցան",
      content4:
        "Բուլղարական պղպեղ, տավարի միս, գազար, բրոկոլի, ձիթայուղ, քունջութ",

      img5: salat,
      title5: "Հավի մսով աղցան",
      content5: "հավի կրցքամիս, մարինացված սունկ, մայոնեզ, ընկույզ",
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
    e.preventDefault();
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
              object1: menu[1, 0],
              object2: menu[1, 1]

              // img1: x.img1,
              // title1: x.title1,
              // content1: x.content1,

              // img2: x.img2,
              // title2: x.title2,
              // content2: x.content2,

              // img3: x.img3,
              // title3: x.title3,
              // content3: x.content3,

              // img4: x.img4,
              // title4: x.title4,
              // content4: x.content4,

              // img5: x.img5,
              // title5: x.title5,
              // content5: x.content5,

              // img6: x.img6,
              // title6: x.title6,
              // content6: x.content6,

              // img7: x.img7,
              // title7: x.title7,
              // content7: x.content7,

              // img8: x.img8,
              // title8: x.title8,
              // content8: x.content8,
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
