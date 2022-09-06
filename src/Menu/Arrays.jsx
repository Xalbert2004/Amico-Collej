import burger from "../images/burger.jpeg";
import tavariburger from "../images/tavariburger.png";
import haviburger from "../images/haviburger.png";
import vichinaburger from "../images/vichinaburger.png";

import tavarixorovac from "../images/tavarixorovac.png";
import garixorovac from "../images/garixorovac.png";
import amarxorovac from "../images/amarxorovac.jpg";
import tavarqyabab from "../images/tavarqyabab.png";
import havqyabab from "../images/havqyabab.png";
import ishxanxorovac from "../images/ishxanxorovac.jpg";
import sigxorovac from "../images/sigxorovac.jpg";
import havfri from "../images/havfri.jpg";
import panirdzoxik from "../images/panirdzoxik.png";
import havitevik from "../images/havitevik.png";
import havnagets from "../images/havnagets.png";
import kartolplech from "../images/kartolplech.png";
import tavarkatlet from "../images/tavarkatlet.jpg";
import havkatlet from "../images/havkatlet.jpeg";

import arax from "../images/arax.png";
import konyak from "../images/konyak.png";
import viski from "../images/viski.png";
import vino from "../images/vino.jpg";
import shampayn from "../images/shampayn.png";
import tekila from "../images/tekila.png";
import rom from "../images/rom.jpg";
import jin from "../images/jin.png";
import vermunt from "../images/vermunt.png";
import piva from "../images/piva.jpg";

import pizza from "../images/pizza.png";
import hotDishes from "../images/hotDishes.png";
import alkohol from "../images/alkohol.png";
import garnir from "../images/garnir.png";
import salat from "../images/salat.png";
import apur from "../images/borsh.png";
import cola from "../images/cola.png";
import zakuski from "../images/zakuski.png";

const menu = [
  {
    id: 1,
    img: pizza,
    title: "Պիցցա",
    content:
      "Ամիգո, Պեպերոնի, Կոռլեոն Մարգարիտա, Ալ Պրոշուտտո, Կորիդա, Վեգետարիական ․․․",

    pizzas: [
      { id: 1, img: pizza, title: "Ամիգո", salary: 450 + "/" + 3500 + "դր" },

      {
        id: 2,
        img: pizza,
        title: "Պեպերոնի",
        content:
          "Երշիկ «Պեպերոնի», բուլղարական պղպեղ, պանիր (Ֆենդել, մոցարելլա), սոուս ",
        salary: 360 + "/" + 2800 + "դր",
      },

      {
        id: 3,
        img: pizza,
        title: "Կոռլեոն",
        content:
          "Բաստուրմա,  բուլղարական պղպեղ, օրեգատո, պանիր (Ֆենդել, մոցարելլա), սոուս",
        salary: 380 + "/" + 2900 + "դր",
      },

      {
        id: 4,
        img: pizza,
        title: "Մարգարիտա",
        content: "պանիր (Ֆենդել, մոցարելլա), բուլղարական պղպեղ, սոուս",
        salary: 320 + "/" + 2500 + "դր",
      },

      {
        id: 5,
        img: pizza,
        title: "Ալ Պրոշուտտո",
        content:
          "Խոզապուխտ, լոլիկ, ձիթապտուղ, սերվելատ, սոուս, պանիր (Ֆենդել, մոցարելլա)",
        salary: 400 + "/" + 3000 + "դր",
      },

      {
        id: 6,
        img: pizza,
        title: "Կորիդա",
        content:
          "Տավարի միս, սունկ, սոուս, պանիր (Ֆենդել, մոցարելլա), լոլիկ, ձիթապտուղ",
        salary: 420 + "/" + 3200 + "դր",
      },

      {
        id: 7,
        img: pizza,
        title: "Վեգետարիական",
        content:
          "Սունկ, Բուլղարական պղպեղ, լոլիկ, մարինացված եգիպտացորեն, պանիր",
        salary: 340 + "/" + 2600 + "դր",
      },

      {
        id: 8,
        img: pizza,
        title: "Չեզարե",
        content: "Հավի կրծքամիս, բուլղարական պանիր, պանիր, սոուս",
        salary: 370 + "/" + 2900 + "դր",
      },

      {
        id: 9,
        img: pizza,
        title: "Ասորտի մսով",
        content:
          "Հավի կրծքամիս, սունկ, տավարի միս, լոլիկ, խոզապուխտ, սերվելատ, բաստուրմա",
        salary: 420 + "/" + 3200 + "դր",
      },

      {
        id: 10,
        img: pizza,
        title: "Կուատրո Ֆորմաջի",
        content: "Ռոկվոր, սուլուգունի, ֆենդել, մոցարելլա, օրեգանո, սոուս",
        salary: 340 + "/" + 2600 + "դր",
      },

      {
        id: 11,
        img: pizza,
        title: "Պրիմավերա",
        content:
          "Խոզապուխտ, հավի կրծքամիս, սունկ, պանիր (Ֆենդել, մոցարելլա), սոուս",
        salary: 400 + "/" + 3000 + "դր",
      },

      {
        id: 12,
        img: pizza,
        title: "Սիցիլիա",
        content:
          "Տավարի միս, բուլղարական պղպեղ, պանիր (Ֆենդել, մոցարելլա), սոուս ",
        salary: 420 + "/" + 3300 + "դր",
      },
    ],
  },

  {
    id: 2,
    img: burger,
    title: "Բուրգեր",
    content: "Տավարի մսով, հավի մսով, խոզապուխտով",

    pizzas: [
      {
        id: 1,
        img: tavariburger,
        title: "Տավարի մսով",
        content:
          "Տավարի կոտլետ, հազարի տերև, վարունգ, լոլիկ, մայոնեզ, կետչուպ, խոխլանդ պանիր",
        salary: "750դր",
      },

      {
        id: 2,
        img: haviburger,
        title: "Հավի մսով",
        content:
          "Հավի կոտլետ, հազարի տերև, վարունգ, լոլիկ, մայոնեզ, կետչուպ, խոխլանդ պանիր",
        salary: "650դր",
      },

      {
        id: 3,
        img: vichinaburger,
        title: "Խոզապուխտով",
        content:
          "Խոզապուխտ, հազարի տերև, վարունգ, լոլիկ, մայոնեզ, կետչուպ, խոխլանդ պանիր",
        salary: "500դր",
      },
    ],
  },

  {
    id: 3,
    img: hotDishes,
    title: "Տաք Ուտեստներ",
    content: "Խոզի խորոված, Գաոի խորոված, Ամաոային խորոված, Քաբաբ Տավարի,",

    pizzas: [
      { id: 1, img: tavarixorovac, title: "Խոզի խորոված", salary: "3000դր" },

      { id: 2, img: garixorovac, title: "Գառի խորոված", salary: "3500դր" },

      { id: 3, img: amarxorovac, title: "Ամառային խորոված", salary: "1000դր" },

      { id: 4, img: tavarqyabab, title: "Քաբաբ Տավարի", salary: "800դր" },

      { id: 5, img: havqyabab, title: "Հավի քաբաբ", salary: "700դր" },

      { id: 6, img: ishxanxorovac, title: "Իշխան խորոված", salary: "3000դր" },

      { id: 7, img: sigxorovac, title: "Սիգ խորոված", salary: "1000դր" },

      { id: 8, img: havfri, title: "Ճուտ ֆրիով", salary: "2000դր" },

      { id: 10, img: panirdzoxik, title: "Պանրի ձողիկներ", salary: "700դր" },

      { id: 11, img: havitevik, title: "Հավի տևիկ", salary: "800դր" },

      { id: 12, img: havnagets, title: "Հավի նագետս", salary: "800դր" },

      { id: 13, img: kartolplech, title: "Կարտոֆիլ պլեճ", salary: "700դր" },

      {
        id: 14,
        img: tavarkatlet,
        title: "Կոտլետ տավարի մսով",
        salary: "950դր",
      },

      { id: 15, img: havkatlet, title: "Կոտլետ հավի մսով", salary: "800դր" },
    ],
  },
  {
    id: 4,
    img: alkohol,
    title: "Ալկոհոլային ըմպելիքներ",

    pizzas: [
      {
        id: 1,
        img: arax,
        title: "Օղի",
        content: "Աբսալյուտ,Ֆինլանդիա,Չիստայա կապլյա,Ստալիչնայա,Օհանյան",
        salary: "4000-8000դր",
      },

      {
        id: 2,
        img: konyak,
        title: "Կոնյակ",
        content: "Նաիրի,Ախթամար,Արարատ",
        salary: "800-4500դր",
      },

      {
        id: 3,
        img: viski,
        title: "Վիսկի",
        content:
          "Chivas Regal, Jack Daniels, Black Label,Red Label, Jameson, Granis, Ballantines",
        salary: "1600-5200դր",

      },

      {
        id: 4,
        img: vino,
        title: "Գինի",
        content: "Կարաս կարմիր, Արմենիա",
        salary: "7000,2500դր",

      },

      { id: 5, img: shampayn, title: "Շամպայն", content: "Շամպայն հայկական",
      salary: "3000դր",
    
    },

      { id: 6, img: tekila, title: "Տեկիլա", content: "Օլմեգա, Սիեռա",
      salary: "1900,1200դր",
    },
      { id: 7, img: rom, title: "Ռոմ", content: "Bacardi black,bacardi" ,
      salary: "1800դր",
    },

      { id: 8, img: jin, title: "Ջին", content: "BomBay,Gordons,Beefeater" ,
    
      salary: "1100,1700դր",
    },

      {
        id: 9,
        img: vermunt,
        title: "Վերմունտ",
        content: "Black Martini,Wgite Martini",
        salary: "900/7000դր",

      },

      {
        id: 10,
        img: piva,
        title: "Գարեջուր",
        content: "Հեյնիկեն, Միլլեռ, Կիլիկիա, Լցնովի գարեջուր",
        salary: "600-750դր",

      },
    ],
  },
  {
    id: 5,
    img: garnir,
    title: "Խավարտ",
    content: "Lorem Ipsum",

    pizzas: [
      { id: 1, img: garnir, title: "Սպագետտի" },

      { id: 2, img: garnir, title: "Հնդկաձավար" },

      { id: 3, img: garnir, title: "Կարտոֆիլի պյուրե" },

      { id: 4, img: garnir, title: "Ֆրի" },

      { id: 5, img: garnir, title: "Կարտոֆիլ տնական" },

      { id: 6, img: garnir, title: "Լոլիկով ձվաձեղ" },
    ],
  },
  {
    id: 6,
    img: salat,
    title: "Աղցան",
    content:
      "Կայսերական, Հունական, Ամառային, Տավարի մսով աղցան, Հավի մսով աղցան",

    pizzas: [
      {
        id: 1,
        img: salat,
        title: "Կայսերական",
        content:
          "Հազարի տերևներ, հավի կրցքամիս, չորահաց, լոլիկ, սոուս, թարմ եզան պանիր",
      },

      {
        id: 2,
        img: salat,
        title: "Հունական",
        content: "Վարունգ, լոլիկ, ձիթապտուղ, ձիթապտղի ձեթ, բրինձա պանիր, սոխ",
      },

      {
        id: 3,
        img: salat,
        title: "Ամառային",
        content: "Լոլիկ, վարունգ, կանաչի, սոխ, բուսայուղ",
      },

      {
        id: 4,
        img: salat,
        title: "Տավարի մսով աղցան",
        content:
          "Բուլղարական պղպեղ, տավարի միս, գազար, բրոկոլի, ձիթայուղ, քունջութ",
      },

      {
        id: 5,
        img: salat,
        title: "Հավի մսով աղցան",
        content: "հավի կրցքամիս, մարինացված սունկ, մայոնեզ, ընկույզ",
      },
    ],
  },
  {
    id: 7,
    img: apur,
    title: "Ապուրներ",
    content: "Lorem Ipsum",

    pizzas: [
      { id: 1, img: apur, title: "Սոլյանկա" },

      { id: 2, img: apur, title: "Խարչո" },

      { id: 3, img: apur, title: "Հավով ապուր" },

      { id: 4, img: apur, title: "Սնկապուր" },

      { id: 5, img: apur, title: "Թանապուր" },

      { id: 6, img: apur, title: "Փիթի" },
    ],
  },
  {
    id: 8,
    img: cola,
    title: "Զովացուցիչ ըմպելիքներ",
    content: "Lorem Ipsum",

    pizzas: [
      { id: 1, img: cola, title: "Կոլա, Ֆանտա, Սփրայթ" },

      { id: 2, img: cola, title: "Լիմոնադ" },

      { id: 3, img: cola, title: "Հանքային ջուր" },

      { id: 4, img: cola, title: "Բնական հյութ" },

      { id: 5, img: cola, title: "Տոմատի հյութ" },

      { id: 6, img: cola, title: "Ելակ" },

      { id: 7, img: cola, title: "Բանան" },

      { id: 8, img: cola, title: "Խնձոր" },

      { id: 9, img: cola, title: "Նարինջ" },

      { id: 10, img: cola, title: "Կիվի" },

      { id: 11, img: cola, title: "Կիտրոն" },

      { id: 12, img: cola, title: "Գազար" },

      { id: 13, img: cola, title: "Խնձոր-կիվի" },

      { id: 14, img: cola, title: "Ելակ-բանան" },

      { id: 15, img: cola, title: "Ելակ-կիվի" },

      { id: 16, img: cola, title: "Նարինջ-բանակ" },
    ],
  },
  {
    id: 9,
    img: zakuski,
    title: "Սառը խորտիկներ",
    content: "Lorem Ipsum",

    pizzas: [
      { id: 1, img: zakuski, title: "Ձիթապտուղ" },

      { id: 2, img: zakuski, title: "Կիտրոն" },

      { id: 3, img: zakuski, title: "Կանաչի" },

      { id: 4, img: zakuski, title: "Պանրի տեսականի" },

      { id: 5, img: zakuski, title: "Թթվի տեսականի" },

      { id: 6, img: zakuski, title: "Մսի տեսականի" },

      { id: 7, img: zakuski, title: "Հաց" },
    ],
  },
];

export default menu;
