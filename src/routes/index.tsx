import React from "react";
import { Route, Switch } from "react-router-dom";
import About from "../pages/About";
import Home from "../pages/Home";

export default (
  <Switch>
    <Route exact path="/(cancel)?">
      <Home />
    </Route>

    <Route path="/about">
      <About />
    </Route>

    <Route path="/contact">
      <p style={{ textAlign: "center" }}>
        Get in touch at{" "}
        <a href="mailto:happysingingkids@gmail.com">
          happysingingkids@gmail.com
        </a>
        ,
        <br /> we'd love to hear from you!
      </p>
    </Route>
  </Switch>
);
