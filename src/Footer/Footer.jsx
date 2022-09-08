import React from "react";
import styles from "../Footer/footer.module.scss";
import { HiLocationMarker } from "react-icons/hi";
import { HiPhone } from "react-icons/hi";
import { IoLogoFacebook } from "react-icons/io";
import { AiOutlineInstagram } from "react-icons/ai";
export default function Footer({kap}) {
  return (
    <div className={styles.container} id={kap}>
      <div className={styles.wrapper}>
        <div className={styles.item}>
          <p className={styles.title}>Հասցե</p>
          <div className={styles.iconItem}>
            <HiLocationMarker className={styles.icons} />
            <a target="_blank" href="https://www.google.com/maps/place/166,+AMICO+cafeteria,+26+Nairyan+St,+Sevan+1501,+%D0%90%D1%80%D0%BC%D0%B5%D0%BD%D0%B8%D1%8F/@40.5484617,44.9607482,19z/data=!4m5!3m4!1s0x404046c3c1d203e3:0xb55dfa4d40f7c544!8m2!3d40.5483708!4d44.9605251">
              <p className={styles.content}>Nairyan street 166/26 1501 Sevan</p>
            </a>
          </div>
          <div className={styles.iconItem}>
            <HiPhone className={styles.icons} />
            <a className={styles.content} href="tel:094-26-22-62">
              094-26-22-62
            </a>
          </div>
          <div className={styles.iconItem}>
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
