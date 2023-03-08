import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import "./Header.css";

export default function Header(props) {
  const Archzone = () => (
    <>
      <span className="Arch"> Itto </span>
      <span className="Zone"> Zone </span>
    </>
  );
  const [toogleMenu, setTooggleMenu] = useState(false);

  return (
    <div className="portofolio__navbar">
      <div className="portofolio__navbar-links">
        <div className="portofolio__navbar-links-logo">
          <Archzone />
        </div>
        <div className="portofolio__navbar-links_container">
          <div className="menu-header">
            <p>
              <NavLink
                to={"/"}
                className={({ isActive }) => (isActive ? "active" : "inactive")}
              >
                About Me
              </NavLink>
            </p>
            <p>
              <NavLink
                to={"/MyProject"}
                className={({ isActive }) => (isActive ? "active" : "inactive")}
              >
                Portofolio
              </NavLink>
            </p>
            <p>
              <NavLink
                to={"/Contact"}
                className={({ isActive }) => (isActive ? "active" : "inactive")}
              >
                Contact
              </NavLink>
            </p>
          </div>
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
                <div className="menu-header">
                  <p>
                    <NavLink
                      to={"/"}
                      className={({ isActive }) =>
                        isActive ? "active" : "inactive"
                      }
                    >
                      About Me
                    </NavLink>
                  </p>
                  <p>
                    <NavLink
                      to={"/MyProject"}
                      className={({ isActive }) =>
                        isActive ? "active" : "inactive"
                      }
                    >
                      Portofolio
                    </NavLink>
                  </p>
                  <p>
                    <NavLink
                      to={"/Contact"}
                      className={({ isActive }) =>
                        isActive ? "active" : "inactive"
                      }
                    >
                      Contact
                    </NavLink>
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
