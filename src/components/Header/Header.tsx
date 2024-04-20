import React from "react";
import styles from "./Header.module.scss";
import hero from "../../assets/celtic-spirit.jpg";
import knot from "../../assets/knot.png";

interface Props {
}

const Header = ({}: Props) => {
  return (
    <div className={styles.Header}>
      <div className={styles.Gradient}></div>
      {/*<div className={styles.Knot}>
        <img src={knot} alt="Celtic Spirit" />
      </div>*/}
      <div className={styles.Content}>
        <h1>Celtic Spirit</h1>
        <img className={styles.Hero} src={hero} alt="Celtic Spirit" />
      </div>
    </div>
  )
};

export default Header;
