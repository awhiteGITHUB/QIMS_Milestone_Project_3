import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

function navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleclick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  window.addEventListener("resize", showButton);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo">
            QIMS Inventory Management <i className="fa-brands fa-wolf-pack-battalion"></i>
          </Link>
          <div className="menu-icon" onClick={handleclick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu acitve" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                Logout
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/record"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Add Items
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/items"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Inventory 
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default navbar;