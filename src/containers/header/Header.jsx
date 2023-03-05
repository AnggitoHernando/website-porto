import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import "./Header.css";

const Menu = () => (
  <>
    <div className="menu-header">
      <p className="active">
        <a href="#AboutMe">About Me</a>
      </p>
      <p>
        <a href="#MyProjects">My Projects</a>
      </p>
      <p>
        <a href="#Contact">Contact</a>
      </p>
    </div>
  </>
);

const ListMenu = [
  { name: "AboutMe", href: "/" },
  { name: "MyProjects", href: "/MyProjects" },
  { name: "Contact", href: "/Contact" },
];

const Archzone = () => (
  <>
    <span className="Arch"> Arch </span>
    <span className="Zone"> Zone </span>
  </>
);

const Header = () => {
  const [toogleMenu, setTooggleMenu] = useState(false);
  return (
    <div className="portofolio__navbar">
      <div className="portofolio__navbar-links">
        <div className="portofolio__navbar-links-logo">
          <Archzone />
        </div>
        <div className="portofolio__navbar-links_container">
          <Menu />
        </div>
        <div className="portofolio__navbar-menu">
          {toogleMenu ? (
            <RiCloseLine
              color="black"
              size={27}
              onClick={() => setTooggleMenu(false)}
            />
          ) : (
            <RiMenu3Line
              color="black"
              size={27}
              onClick={() => setTooggleMenu(true)}
            />
          )}
          {toogleMenu && (
            <div className="portofolio__navbar-menu_container scale-up-center">
              <div className="portofolio__navbar-menu_container-links">
                <Menu />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
