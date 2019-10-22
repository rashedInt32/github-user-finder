import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Header from "../components/Header";
import Home from "../pages/Home";

function Routes() {
  return (
    <Router>
      <Header />
      <Route path="/" component={Home} />
    </Router>
  );
}

export default Routes;
