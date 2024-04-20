import React from "react";
import styles from "./Footer.module.scss";
import knot from "../../assets/knot.png";

const Footer = () => (
  <div className={styles.Footer}>
    <img src={knot} alt="Celtic Spirit" />
  </div>
);

export default Footer;
