import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import Button from "@/components/button/button";


export const metadata = {
  title: "Grymephon Contact information",
  description: "This is Grymephon contact information",
};

const Contact = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Lets Keep in Touch!</h1>
      <div className={styles.content}>
        <div className={styles.imgContainer}>
          <Image
            src="/il_12.png"
            alt="Contact"
            fill={true}
            className={styles.image}
          />
        </div>
        <form className={styles.form}>
          <input type="text" placeholder="Name" className={styles.input}></input>
          <input type="text" placeholder="Email" className={styles.input}></input>
          <textarea placeholder="Message" cols="30" rows="10" className={styles.textArea}></textarea>
          <Button url="/contact" text="Send" />
        </form>
      </div>
    </div>
  );
};

export default Contact;
