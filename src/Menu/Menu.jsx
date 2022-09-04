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

      pizzas: [
        {id:1,
        img: pizza,
        title: "Ամիգո"},
        // content1: "cheese",

        {id:2,
        img: pizza,
        title: "Պեպերոնի",
        content:
          "Երշիկ «Պեպերոնի», բուլղարական պղպեղ, պանիր (Ֆենդել, մոցարելլա), սոուս "},

        {id:3,
        img: pizza,
        title: "Կոռլեոն",
        content:
          "Բաստուրմա,  բուլղարական պղպեղ, օրեգատո, պանիր (Ֆենդել, մոցարելլա), սոուս"},

        {id:4,
        img: pizza,
        title: "Մարգարիտա",
        content: "պանիր (Ֆենդել, մոցարելլա), բուլղարական պղպեղ, սոուս"},

        {id:5,
        img: pizza,
        title: "Ալ Պրոշուտտո",
        content:
          "Խոզապուխտ, լոլիկ, ձիթապտուղ, սերվելատ, սոուս, պանիր (Ֆենդել, մոցարելլա)"},

        {id:6,
        img: pizza,
        title: "Կորիդա",
        content:
          "Տավարի միս, սունկ, սոուս, պանիր (Ֆենդել, մոցարելլա), լոլիկ, ձիթապտուղ"},

        {id:7,
        img: pizza,
        title: "Վեգետարիական",
        content:
          "Սունկ, Բուլղարական պղպեղ, լոլիկ, մարինացված եգիպտացորեն, պանիր"},

        {id:8,
        img: pizza,
        title: "Չեզարե",
        content: "Հավի կրծքամիս, բուլղարական պանիր, պանիր, սոուս"},

        {id:9,
        img: pizza,
        title: "Ասորտի մսով",
        content:
          "Հավի կրծքամիս, սունկ, տավարի միս, լոլիկ, խոզապուխտ, սերվելատ, բաստուրմա"},

        {id:10,
        img: pizza,
        title: "Կուատրո Ֆորմաջի",
        content: "Ռոկվոր, սուլուգունի, ֆենդել, մոցարելլա, օրեգանո, սոուս"},

        {id:11,
        img: pizza,
        title: "Պրիմավերա",
        content:
          "Խոզապուխտ, հավի կրծքամիս, սունկ, պանիր (Ֆենդել, մոցարելլա), սոուս"},

        {id:12,
        img: pizza,
        title: "Սիցիլիա",
        content:
          "Տավարի միս, բուլղարական պղպեղ, պանիր (Ֆենդել, մոցարելլա), սոուս "}
        ],
    },

    {
      id: 2,
      img: burger,
      title: "Բուրգեր",
      content: "Տավարի մսով, հավի մսով, խոզապուխտով",

      pizzas: [
      {id:1,  
      img: burger,
      title: "Տավարի մսով",
      content:
        "Տավարի կոտլետ, հազարի տերև, վարունգ, լոլիկ, մայոնեզ, կետչուպ, խոխլանդ պանիր"},

      {id:2,
      img: burger,
      title: "Հավի մսով",
      content:
        "Հավի կոտլետ, հազարի տերև, վարունգ, լոլիկ, մայոնեզ, կետչուպ, խոխլանդ պանիր"},

      {id:3,
      img: burger,
      title: "Խոզապուխտով",
      content:
        "Խոզապուխտ, հազարի տերև, վարունգ, լոլիկ, մայոնեզ, կետչուպ, խոխլանդ պանիր"}
      ]
    },

    {
      id: 3,
      img: hotDishes,
      title: "Տաք Ուտեստներ",
      content: "Խոզի խորոված, Գաոի խորոված, Ամաոային խորոված, Քաբաբ Տավարի,",

      pizzas: [
        {id:1,
      img: hotDishes,
      title: "Խոզի խորոված",
      },

      {id:2,
      img: hotDishes,
      title: "Գաոի խորոված",
      },

      {id:3,
      img: hotDishes,
      title: "Ամաոային խորոված",
      },

      {id:4,
      img: hotDishes,
      title: "Քաբաբ Տավարի",
      },

      {id:5,
      img: hotDishes,
      title: "Հավի քաբաբ",
      },

      {id:6,
        img: hotDishes,
        title: "Իշխան խորոված",
      },

      {id:7,
        img: hotDishes,
        title: "Սիգ խորոված",
      },

      {id:8,
        img: hotDishes,
        title: "Ճուտ ֆրիով",
      },

      {id:10,
        img: hotDishes,
        title: "Պանրի ձողիկներ",
      },

      {id:11,
        img: hotDishes,
        title: "Հավի տևիկ",
      },

      {id:12,
        img: hotDishes,
        title: "Հավի նագետս",
      },

      {id:13,
        img: hotDishes,
        title: "Կարտոֆիլ պլեճ",
      },

      {id:14,
        img: hotDishes,
        title: "Կոտլետ տավարի մսով",
      },

      {id:15,
        img: hotDishes,
        title: "Կոտլետ հավի մսով",
      }
    ]
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

      pizzas: [
        {id:1,  
        img: garnir,
        title: "Սպագետտի",
        },
  
        {id:2,
        img: garnir,
        title: "Հնդկաձավար",
        },
  
        {id:3,
        img: garnir,
        title: "Կարտոֆիլի պյուրե",
        },

        {id:4,
          img: garnir,
          title: "Ֆրի",
        },

        {id:5,
          img: garnir,
          title: "Կարտոֆիլ տնական",
        },

        {id:6,
          img: garnir,
          title: "Լոլիկով ձվաձեղ",
        }
        ]
    },
    {
      id: 6,
      img: salat,
      title: "Աղցան",
      content: "Կայսերական, Հունական, Ամառային, Տավարի մսով աղցան, Հավի մսով աղցան",

      pizzas: [
        {id:1,
      img: salat,
      title: "Կայսերական",
      content:
        "Հազարի տերևներ, հավի կրցքամիս, չորահաց, լոլիկ, սոուս, թարմ եզան պանիր"},

      {id:2,
      img: salat,
      title: "Հունական",
      content: "Վարունգ, լոլիկ, ձիթապտուղ, ձիթապտղի ձեթ, բրինձա պանիր, սոխ"},

      {id:3,
      img: salat,
      title: "Ամառային",
      content: "Լոլիկ, վարունգ, կանաչի, սոխ, բուսայուղ"},

      {id:4,
      img: salat,
      title: "Տավարի մսով աղցան",
      content:
        "Բուլղարական պղպեղ, տավարի միս, գազար, բրոկոլի, ձիթայուղ, քունջութ"},

      {id:5,
      img: salat,
      title: "Հավի մսով աղցան",
      content: "հավի կրցքամիս, մարինացված սունկ, մայոնեզ, ընկույզ"}
    ]
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

      pizzas: [
        {id:1,  
        img: cola,
        title: "Կոլա, Ֆանտա, Սփրայթ",
        },
  
        {id:2,
        img: cola,
        title: "Լիմոնադ",
        },
  
        {id:3,
        img: cola,
        title: "Հանքային ջուր",
        },

        {id:4,
          img: cola,
          title: "Բնական հյութ",
        },

        {id:5,
          img: cola,
          title: "Տոմատի հյութ",
        },

        {id:6,
          img: cola,
          title: "Ելակ",
        },

        {id:7,
          img: cola,
          title: "Բանան",
        },

        {id:8,  
          img: cola,
          title: "Խնձոր",
        },
    
        {id:9,
          img: cola,
          title: "Նարինջ",
        },
    
        {id:10,
          img: cola,
          title: "Կիվի",
        },
  
        {id:11,
          img: cola,
          title: "Կիտրոն",
        },
  
        {id:12,
          img: cola,
          title: "Գազար",
        },
  
        {id:13,
          img: cola,
          title: "Խնձոր-կիվի",
        },
  
        {id:14,
          img: cola,
          title: "Ելակ-բանան",
        },

        {id:15,  
          img: cola,
          title: "Ելակ-կիվի",
        },
      
        {id:16,
          img: cola,
          title: "Նարինջ-բանակ",
        }
        ]
    },
    {
      id: 9,
      img: zakuski,
      title: "Սառը խորտիկներ",
      content: "Lorem Ipsum",

      pizzas: [
        {id:1,  
        img: zakuski,
        title: "Ձիթապտուղ",
        },
  
        {id:2,
        img: zakuski,
        title: "Կիտրոն",
        },
  
        {id:3,
        img: zakuski,
        title: "Կանաչի",
        },

        {id:4,
          img: zakuski,
          title: "Պանրի տեսականի",
        },

        {id:5,
          img: zakuski,
          title: "Թթվի տեսականի",
        },

        {id:6,
          img: zakuski,
          title: "Մսի տեսականի",
        },

        {id:7,
          img: zakuski,
          title: "Հաց",
        }
        ]
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
