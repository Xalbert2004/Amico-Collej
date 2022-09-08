import React from "react";
import styles from "../Footer/footer.module.scss";
import { HiLocationMarker } from "react-icons/hi";
import { HiPhone } from "react-icons/hi";

import { IoLogoFacebook } from "react-icons/io";
import { AiOutlineInstagram } from "react-icons/ai";
import { IoLogoTwitter } from "react-icons/io";
import { IoIosContacts } from "react-icons/io";

export default function Footer() {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.item}>
          <p className={styles.title}>Հասցե</p>
          <div className={styles.iconItem}>
            <HiLocationMarker className={styles.icons} />
            <p className={styles.content}>Nairyan street 166/26 1501 Sevan</p>
          </div>
          <div className={styles.iconItem}>
            <HiPhone className={styles.icons} />
            <a className={styles.content} href="tel:094-26-22-62">
              094-26-22-62
            </a>
          </div>
          <div className={styles.iconItem}>
            {/* <IoIosContacts className={styles.icons} /> */}
            {/* <p className={styles.content}>Այս Վեբ․ կայքը պատրաստվել է "Global IT Sevan" Կազմակերպության մասնագետների կողմից</p> */}
          </div>
        </div>
        <div className={styles.item}>
          <p className={styles.title}>Կապ մեզ հետ</p>
          <div className={styles.socItem}>
            <a
              className={styles.hoverIcons}
              target="_blank"
              href="https://www.facebook.com/AMICO.cafe.pizzeria/"
            >
              <IoLogoFacebook className={styles.socIcon} />
            </a>

            <a
              className={styles.hoverIcons}
              target="_blank"
              href="https://instagram.com/amico.cafeteria?igshid=YmMyMTA2M2Y="
            >
              <AiOutlineInstagram className={styles.socIcon} />
            </a>
            {/* <a
              className={styles.hoverIcons}
              target="_blank"
              href="https://www.facebook.com/AMICO.cafe.pizzeria/"
            >
              <IoLogoTwitter className={styles.socIcon} />
            </a> */}
          </div>
        </div>
      </div>
      <p className={styles.content}>
        Վեբ կայքը ստեղծվել է "Global IT Sevan" Կազմակերպության
      </p>
      {"\n"} <p className={styles.content}>մասնագետների կողմից</p>
      <p className={styles.copyright}>
        Amico LLC © 2022. Բոլոր իրավունքները պաշտպանված են.
      </p>
    </div>
  );
}
