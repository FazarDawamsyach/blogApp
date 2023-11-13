import React from "react";
import styles from "./page.module.css";
import Image from "next/image";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div>@Copyright 2023. All Rights Reserved</div>
      <div>
        <div className={styles.social}>
          <Image
            src="/sc_facebook.png"
            className={styles.icon}
            width={15}
            height={15}
            alt="Grymephon Dev Facebook Account"
          />
          <Image
            src="/sc_linkedin.png"
            className={styles.icon}
            width={15}
            height={15}
            alt="Grymephon Dev LinkedIn Account"
          />
          <Image
            src="/sc_instagram.png"
            className={styles.icon}
            width={15}
            height={15}
            alt="Grymephon Dev Instagram Account"
          />
          <Image
            src="/sc_whatsapp.png"
            className={styles.icon}
            width={15}
            height={15}
            alt="Grymephon Dev Whatsapp Contact"
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
