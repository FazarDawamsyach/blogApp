import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import Button from "@/components/button/button";
const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="AboutImage"
          fill={true}
          className={styles.img}
        />
        <div className={styles.imgText}>
          <h1 className={styles.imgTitle}>Digital Story Teller</h1>
          <h2 className={styles.imgDesc}>
            Handcrafting award winning digital experience
          </h2>
        </div>
      </div>
      <div className={styles.textContainer}>
        <div className={styles.item}>
          <h1 className={styles.title}>Who are we?</h1>
          <p className={styles.desc}>
            Laborum commodo commodo enim cupidatat sit irure voluptate
            incididunt ea. Labore laborum consequat Lorem sit sint officia
            occaecat ut. Voluptate proident voluptate ea ea sit irure duis non
            quis Lorem do. 
            <br/>
            <br/>
            Consectetur culpa proident dolor nisi aliqua duis qui
            dolore veniam velit exercitation sunt amet ad. Laboris laboris esse
            est id excepteur excepteur minim sint. Id pariatur incididunt
            aliquip sunt aute ad enim consequat amet dolore ex.
          </p>
        </div>
        <div className={styles.item}>
        <h1 className={styles.title}>What we do?</h1>
          <p className={styles.desc}>
            Laborum commodo commodo enim cupidatat sit irure voluptate
            incididunt ea. Labore laborum consequat Lorem sit sint officia
            occaecat ut. Voluptate proident voluptate ea ea sit irure duis non
            quis Lorem do. 
            <br/>
            <br/>
            Consectetur culpa proident dolor nisi aliqua duis qui
            <br/>
            <br/>
            dolore veniam velit exercitation sunt amet ad.
            <br/>
            <br/>
             Id pariatur incididunt aliquip sunt aute ad enim consequat amet dolore ex.
          </p>
          <Button url="/contact" text="Contact"/>
        </div>
      </div>
    </div>
  );
};

export default About;
