import React from "react";
import { MenuItems } from "./menu-items";
import { useNavigate } from "react-router-dom";
import "./nav-bar.css";

const NavBar = () => {
  const navigate = useNavigate();
  return (
    <nav className="NavBarItems">
      <h1 className="navbar-logo">React</h1>
      <div className="menu-icon"></div>
      <div>
      {MenuItems.map((items) => {
          return (
            <button
                className="nav-buttons"
                onClick={() => {
                  navigate(items.route);
                }}
              >
                {items.title}
              </button>
          );
        })}
      </div>
    </nav>
  );
};

export default NavBar;
