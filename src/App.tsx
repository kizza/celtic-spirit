import "animate.css/animate.min.css";
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import styles from "./App.module.scss";
import Footer from "./components/Footer";
import Header from "./components/Header";
import routes from "./routes";
import "./Typography.module.scss";

export default () => {
  return (
    <div className={styles.App}>
      <Router>
        <div className={styles.Page}>
          <Header />
          <div className={styles.Content}>
            <div className={styles.Inner}>{routes}</div>
          </div>
          <Footer />
        </div>

        {/*<Nav
          open={menuState === "open"}
          closing={menuClosing}
          closeMenu={closeMenu}
        />*/}
      </Router>

      {/*<Mask
        showing={showMask}
        closing={popupClosing || menuClosing}
        onClose={closeMask}
      />*/}
    </div>
  );
};
