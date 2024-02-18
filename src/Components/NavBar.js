import React, { useState, useEffect } from "react";
import "../style/navbar.css";
import { CustomButton } from "./Button";
import { Link, useLocation } from "react-router-dom";
import { Container } from "react-bootstrap";

function NavBar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const location = useLocation();

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  return (
    <>
      <div className="navbar">
        <Container>
          <div className="navbar-container">
            <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
              <img className="logo" src="../images/kobara1.png" alt="Logo" />
            </Link>
            <div className="menu-icon" onClick={handleClick}>
              <i className={click ? "fas fa-times" : "fas fa-bars"} />
            </div>
            <ul className={click ? "nav-menu active" : "nav-menu"}>
              <li className="nav-item">
                <Link
                  to="/"
                  className={`nav-links ${
                    location.pathname === "/" ? "active-link" : ""
                  }`}
                  onClick={closeMobileMenu}
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/produk"
                  className={`nav-links ${
                    location.pathname === "/produk" ? "active-link" : ""
                  }`}
                  onClick={closeMobileMenu}
                >
                  Products
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/About"
                  className={`nav-links ${
                    location.pathname === "/About" ? "active-link" : ""
                  }`}
                  onClick={closeMobileMenu}
                >
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/contact"
                  className={`nav-links ${
                    location.pathname === "/contact" ? "active-link" : ""
                  }`}
                  onClick={closeMobileMenu}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </Container>
      </div>
    </>
  );
}

export default NavBar;
