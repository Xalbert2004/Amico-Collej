//pizzas
import pizza from "../images/pizza.png";
import amicopizza from '../images/amicopizza.jpg'
import basturmapizza from '../images/basturmapizza.jpg'
import margaritapizza from '../images/margaritapizza.png'
import vichinapizza from '../images/vichinapizza.jpg'
import koridapizza from '../images/koridapizza.jpg'
import veganpizza from '../images/veganpizza.png'
import chezarepizza from '../images/chezarepizza.png'
import asortipizza from '../images/asortipizza.png'
import kuatropizza from '../images/kuatropizza.png'
import primaverapizza from '../images/primavera.png'
import siciliapizza from '../images/siciliapizza.jpg'
//burgers
import burger from "../images/burger.jpeg";
import tavariburger from "../images/tavariburger.png";
import haviburger from "../images/haviburger.png";
import vichinaburger from "../images/vichinaburger.png";
//hot dishes
import hotDishes from "../images/hotDishes.png";
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
//alkohol
import alkohol from "../images/alkohol.png";
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
//garnir
import garnir from "../images/garnir.png";
import brindz from '../images/brindz.png'
import grechka from '../images/grechka.jpg'
import pyure from '../images/pyure.png'
import fri from '../images/fri.png'
import tnakankartol from '../images/tnakankartol.jpg'
import cvacexlolikov from '../images/cvacexlolikov.png'
//salat
import salat from "../images/salat.png";
import cezar from '../images/cezar.png'
import hunakan from '../images/hunakan.png'
import amarayin from '../images/amarayin.png'
import tavar from '../images/tavar.png'
import havov from '../images/havov.jpg'
//soups
import apur from "../images/borsh.png";
import solyanka from '../images/solyanka.png'
import xarcho from '../images/xarcho.png'
import havovsup from '../images/havovsup.png'
import snkapur from '../images/snkapur.png'
import spas from '../images/spas.png'
import piti from '../images/piti.png'
//drinks
import cola from "../images/cola.png";
import limonad from '../images/limonad.png'
import jermuk from '../images/jermuk.png'
import bnakan from '../images/bnakan.png'
import tomat from '../images/tomat.jpg'
import freshklubnik from '../images/freshklubnik.png'
import freshbanan from '../images/freshbanan.webp'
import freshxndzor from '../images/freshxndzor.jpg'
import freshnarinj from '../images/freshnarinj.jpg'
import freshkivi from '../images/freshkivi.jpg'
import freshlimon from '../images/freshlimon.png'
import freshgazar from '../images/freshgazar.jpg'
import freshxndzorkivi from '../images/freshxndzorkivi.jfif'
import freshklubnikbanan from '../images/freshklubnikbanan.jpg'   
import freshklubnikkivi from '../images/freshklubnikkivi.jpg'   
import freshbananapelsin from '../images/freshbananapelsin.jpg'   

//zaksuki
import zakuski from "../images/zakuski.png";
import zeytun from '../images/zeytun.png'
import limon from '../images/limon.png'
import kanachi from '../images/kanachi.png'
import panirner from '../images/panirner.png'
import ttu from '../images/ttu.png'
import msexen from '../images/msexen.png'
import hac from '../images/hac.png'

const menu = [
  {
    id: 1,
    img: pizza,
    title: "Պիցցա",
    content:
      "Ամիգո, Պեպերոնի, Կոռլեոն Մարգարիտա, Ալ Պրոշուտտո, Կորիդա, Վեգետարիական ․․․",

    pizzas: [
      { id: 1, img: amicopizza, title: "Ամիգո", salary: 450 + "/" + 3500 + "դր",content:"Ամիգո բրենդային պիցցա" },

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
        img: basturmapizza,
        title: "Կոռլեոն",
        content:
          "Բաստուրմա,  բուլղարական պղպեղ, օրեգատո, պանիր (Ֆենդել, մոցարելլա), սոուս",
        salary: 380 + "/" + 2900 + "դր",
      },

      {
        id: 4,
        img: margaritapizza,
        title: "Մարգարիտա",
        content: "պանիր (Ֆենդել, մոցարելլա), բուլղարական պղպեղ, սոուս",
        salary: 320 + "/" + 2500 + "դր",
      },

      {
        id: 5,
        img: vichinapizza,
        title: "Ալ Պրոշուտտո",
        content:
          "Խոզապուխտ, լոլիկ, ձիթապտուղ, սերվելատ, սոուս, պանիր (Ֆենդել, մոցարելլա)",
        salary: 400 + "/" + 3000 + "դր",
      },

      {
        id: 6,
        img: koridapizza,
        title: "Կորիդա",
        content:
          "Տավարի միս, սունկ, սոուս, պանիր (Ֆենդել, մոցարելլա), լոլիկ, ձիթապտուղ",
        salary: 420 + "/" + 3200 + "դր",
      },

      {
        id: 7,
        img: veganpizza,
        title: "Վեգետարիական",
        content:
          "Սունկ, Բուլղարական պղպեղ, լոլիկ, մարինացված եգիպտացորեն, պանիր",
        salary: 340 + "/" + 2600 + "դր",
      },

      {
        id: 8,
        img: chezarepizza,
        title: "Չեզարե",
        content: "Հավի կրծքամիս, բուլղարական պանիր, պանիր, սոուս",
        salary: 370 + "/" + 2900 + "դր",
      },

      {
        id: 9,
        img: asortipizza,
        title: "Ասորտի մսով",
        content:
          "Հավի կրծքամիս, սունկ, տավարի միս, լոլիկ, խոզապուխտ, սերվելատ, բաստուրմա",
        salary: 420 + "/" + 3200 + "դր",
      },

      {
        id: 10,
        img: kuatropizza,
        title: "Կուատրո Ֆորմաջի",
        content: "Ռոկվոր, սուլուգունի, ֆենդել, մոցարելլա, օրեգանո, սոուս",
        salary: 340 + "/" + 2600 + "դր",
      },

      {
        id: 11,
        img: primaverapizza,
        title: "Պրիմավերա",
        content:
          "Խոզապուխտ, հավի կրծքամիս, սունկ, պանիր (Ֆենդել, մոցարելլա), սոուս",
        salary: 400 + "/" + 3000 + "դր",
      },

      {
        id: 12,
        img: siciliapizza,
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
    title: "Տաք \nՈւտեստներ",
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
    content: "Օղի, Կոնյակ, Վիսկի, Գինի, Շամպայն, Տեկիլա, Ռոմ, Ջին, Վերմունտ, Գարեջուր",

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
    content: "Սպագետտի,Հնդկաձավար,Կարտոֆիլի պյուրե,Ֆրի,Կարտոֆիլ տնական,Լոլիկով ձվաձեղ",

    pizzas: [
      { id: 1, img: garnir, title: "Սպագետտի",salary:"800դր" },
      { id: 2, img: brindz, title: "Բրինձ",salary:"700դր" },

      { id: 3, img: grechka, title: "Հնդկաձավար",salary:"800դր" },

      { id: 4, img: pyure, title: "Կարտոֆիլի պյուրե",salary:"500դր" },

      { id: 5, img: fri, title: "Ֆրի",salary:"350դր" },

      { id: 6, img: tnakankartol, title: "Կարտոֆիլ տնական",salary:"500դր" },

      { id: 7, img: cvacexlolikov, title: "Լոլիկով ձվաձեղ",salary:"700դր" },
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
        img: cezar,
        title: "Կայսերական",
        content:
          "Հազարի տերևներ, հավի կրցքամիս, չորահաց, լոլիկ, սոուս, թարմ եզան պանիր",
          salary:"1300դր"
      },

      {
        id: 2,
        img: hunakan,
        title: "Հունական",
        content: "Վարունգ, լոլիկ, ձիթապտուղ, ձիթապտղի ձեթ, բրինձա պանիր, սոխ",
        salary:"1100դր"
      },

      {
        id: 3,
        img: amarayin,
        title: "Ամառային",
        content: "Լոլիկ, վարունգ, կանաչի, սոխ, բուսայուղ",
        salary:"900դր"
      },

      {
        id: 4,
        img: tavar,
        title: "Տավարի մսով աղցան",
        content:
          "Բուլղարական պղպեղ, տավարի միս, գազար, բրոկոլի, ձիթայուղ, քունջութ",
          salary:"1200դր"
      },

      {
        id: 5,
        img: havov,
        title: "Հավի մսով աղցան",
        content: "հավի կրցքամիս, մարինացված սունկ, մայոնեզ, ընկույզ",
        salary:"700դր"
      },
    ],
  },
  {
    id: 7,
    img: apur,
    title: "Ապուրներ",
    content: "Սոլյանկա,Խարչո,Հավով ապուր,Սնկապուր,Թանապուր,Փիթի",

    pizzas: [
      { id: 1, img: solyanka, title: "Սոլյանկա",salary:"1200դր" },

      { id: 2, img: xarcho, title: "Խարչո",salary:"1000դր" },

      { id: 3, img: havovsup, title: "Հավով ապուր",salary:"800դր" },

      { id: 4, img: snkapur, title: "Սնկապուր",salary:"700դր" },

      { id: 5, img: spas, title: "Թանապուր",salary:"500դր" },

      { id: 6, img: piti, title: "Փիթի",salary:"1500դր" },
    ],
  },
  {
    id: 8,
    img: cola,
    title: "Զովացուցիչ ըմպելիքներ",
    content:"Կոլա, Ֆանտա, Սփրայթ, Լիմոնադ, Հանքային ջուր, Բնական հյութ, Տոմատի հյութ, Ելակ, Բանան, Խնձոր, Նարինջ, Կիվի, Կիտրոն, Գազար, Խնձոր-կիվի, Ելակ-բանան, Ելակ-կիվի, Նարինջ-բանակ",

    pizzas: [
      { id: 1, img: cola, title: "Կոլա, Ֆանտա, Սփրայթ",salary:"350դր" },

      { id: 2, img:limonad, title: "Լիմոնադ",salary:"350դր" },

      { id: 3, img:jermuk, title: "Հանքային ջուր",salary:"350դր" },

      { id: 4, img:bnakan, title: "Բնական հյութ",salary:"350դր" },

      { id: 5, img:tomat, title: "Տոմատի հյութ",salary:"350դր" },

      { id: 6, img:freshklubnik, title: "Ելակ",salary:"1200դր" },

      { id: 7, img:freshbanan, title: "Բանան",salary:"600դր" },

      { id: 8, img:freshxndzor, title: "Խնձոր",salary:"500դր" },

      { id: 9, img:freshnarinj, title: "Նարինջ",salary:"600դր" },

      { id: 10, img:freshkivi, title: "Կիվի",salary:"600դր" },

      { id: 11, img:freshlimon, title: "Կիտրոն",salary:"600դր" },

      { id: 12, img:freshgazar, title: "Գազար",salary:"500դր" },

      { id: 13, img:freshxndzorkivi, title: "Խնձոր-կիվի",salary:"600դր" },

      { id: 14, img:freshklubnikbanan, title: "Ելակ-բանան" ,salary:"1000դր"},

      { id: 15, img:freshklubnikkivi, title: "Ելակ-կիվի",salary:"1000դր" },

      { id: 16, img:freshbananapelsin, title: "Նարինջ-բանան",salary:"1000դր" },
    ],
  },
  {
    id: 9,
    img: zakuski,
    title: "Սառը խորտիկներ",
    content:"Ձիթապտուղ, Կիտրոն, Կանաչի, Պանրի տեսականի, Թթվի տեսականի, Մսի տեսականի, Հաց",

    pizzas: [
      { id: 1, img: zeytun, title: "Ձիթապտուղ",salary:"800դր" },

      { id: 2, img: limon, title: "Կիտրոն",salary:"500դր" },

      { id: 3, img: kanachi, title: "Կանաչի",salary:"500դր" },

      { id: 4, img: panirner, title: "Պանրի տեսականի",salary:"1500դր" },

      { id: 5, img: ttu, title: "Թթվի տեսականի",salary:"800դր" },

      { id: 6, img: msexen, title: "Մսի տեսականի",salary:"2200դր" },

      { id: 7, img: hac, title: "Հաց" ,salary:"400դր"},
    ],
  },
];

export default menu;
