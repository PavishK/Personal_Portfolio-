import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../../src/utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Pavish</h1>
        <p className={styles.description}>
        I'm a full-stack developer with experience from 3 academic projects. I'm passionate about building user-friendly web applications and ready to contribute to real-world projects. Hire me and let's build something great together!
        </p>
        <a href="mailto:kpavish136@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/devloper.jpg")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
