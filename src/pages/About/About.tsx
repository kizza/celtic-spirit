import React from "react";
import styles from "./About.module.scss";

const About = () => (
  <div className={styles.About}>
    <div className={styles.Inner}>
      <div className={[styles.Text, "space-y-8"].join(" ")}>
        <div className="space-y-6">
          <h2 className="text-3xl"><strong>Renowned composer and vocalist Susanna O’Leary is a creative powerhouse</strong>, delighting fans young and old with her incredible talent and infectious enthusiasm.</h2>
          <h4 className="text-xl">Her latest project, "Happy Singing Kids," is a delightful sonic adventure that captures Susanna’s playful spirit, showcasing fun-loving and sometimes downright silly tunes that have listeners tapping their toes and singing along.</h4>
        </div>
      </div>
    </div>
  </div>
);

export default About;
