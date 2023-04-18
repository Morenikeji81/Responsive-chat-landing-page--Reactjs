import React, { useState } from "react";
import logo from "../assests/logo.png";
import { AiFillCloseCircle } from "react-icons/ai";
import { TbGridDots } from "react-icons/tb";
import "./NavBar.css";

const NavBar = () => {
  const [active, setActive] = useState("navBar");

  // FUNCTION TO TOGGLE NAVBAR

  const showNav = () => {
    setActive("navBar activeNavBar");
  };
  //  FUNCTION TO REMOVE TOGGLE

  const removeNavbar = () => {
    setActive("navBar");
  };
  return (
    // eslint-disable-next-line
    <header className="header flex">
      <div className="logoDiv">
        <p>
          <img src={logo} alt="success" />
        </p>
      </div>

      {/* navBar === Active */}

      <div className={active}>
        <nav className="navLists flex">
          <p className="navItem">Demos</p>

          <p className="navItem">About</p>

          <p className="navItem">Blog</p>

          <p className="navItem">Contact</p>

          <p className="navItem">Login</p>

          <p className="navItem">
            <button className="btn">Get Started Free</button>
          </p>
        </nav>

        <div onClick={removeNavbar} className="closeNavbar">
          <AiFillCloseCircle className="icon" />
        </div>
      </div>

      <div onClick={showNav} className="toggleNavbar">
        <TbGridDots className="icon" />
      </div>
    </header>
  );
};
export default NavBar;
