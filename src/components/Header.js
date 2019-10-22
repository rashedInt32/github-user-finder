import React from "react";
import { Link } from "react-router-dom";

const Header = () => (
  <nav className="navbar navbar-dark bg-dark">
    <Link className="navbar-brand" to="/">
      Github User Finder
    </Link>
  </nav>
);

export default Header;
