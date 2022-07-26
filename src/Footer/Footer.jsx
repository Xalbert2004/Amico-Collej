import React from "react";
import styles from "../Footer/footer.module.scss";
import {HiLocationMarker} from "react-icons/hi";
import {HiPhone} from 'react-icons/hi'
import {MdSmsFailed} from 'react-icons/md'
import {IoLogoFacebook} from 'react-icons/io'
import {AiOutlineInstagram} from 'react-icons/ai'
import {IoLogoTwitter} from 'react-icons/io'

export default function Footer() {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.item}>
          <p className={styles.title}>Հասցե</p>
          <div className={styles.iconItem}>
            <HiLocationMarker style={{fontSize:'1.2vw'}} />
            <p className={styles.content}>Nairyan street 166/26 1501 Sevan,Armenia</p>
          </div>
          <div className={styles.iconItem}>
            <HiPhone style={{fontSize:'1.2vw'}}/>
            <p className={styles.content}>094-26-22-62</p>
          </div>
          <div className={styles.iconItem}>
            <MdSmsFailed style={{fontSize:'1.2vw'}}/>
            <p className={styles.content}>Հասցե</p>
          </div>
        </div>
        <div className={styles.item}>
          <p className={styles.title}>Կապ մեզ հետ</p>
          <div className={styles.socItem}>
            <IoLogoFacebook style={{fontSize:'3.7vw', cursor:'pointer'}}/>
            <AiOutlineInstagram style={{fontSize:'3.7vw', cursor:'pointer'}}/>
            <IoLogoTwitter style={{fontSize:'3.7vw', cursor:'pointer'}} />
          </div>
        </div>
      </div>
      <p className={styles.copyright}>Amico LLC © 2022. Բոլոր իրավունքները պաշտպանված են.</p>
    </div>
  );
}
