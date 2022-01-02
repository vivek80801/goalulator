import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../logo.svg";
import navbar from "./navbar.module.scss";

const Navbar: React.FC = (): JSX.Element => {
  return (
    <>
      <nav className={navbar.desktop}>
        <div>
          <img src={logo} alt="logo" />
        </div>
        <ul>
          <li>
            <Link to={"/"}>home</Link>
          </li>
          <li>
            <Link to={"/editgoals"}>goals</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
