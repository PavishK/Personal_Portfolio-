import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";
import resume from './Resume_1_Page.pdf';

export const About = () => {

  const handleDownload=()=>{
    const link=document.createElement('a');
    link.href=resume;
    link.download='Pavish_Resume.pdf';
    link.click();
  }
  
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/aboutImage.png")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Frontend Developer</h3>
              <p>
                I'm a frontend developer with experience in creating responsive and performance-optimized websites.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>Backend Developer</h3>
              <p>
                I build fast, efficient backend systems and APIs designed for performance and scalability.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <div className={styles.aboutItemText}>
              <h3>Download CV</h3>
              <p>
                <a
                  onClick={handleDownload}
                  className={styles.downloadLink}
                >
                  Click here to download my resume
                </a>
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
