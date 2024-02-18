import React from "react";
import "../style/Footer.css";
import { Link } from "react-router-dom";

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

function Footer() {
  return (
    <div className="footer-container" align="center">
      <section className="footer-subscription">
        <p className="footer-subcription-heading">
          Terima Kasih telah Mengunjungi Website Kami
        </p>
        <p className="footer-subscription-text">
          Website ini dibuat dengan penuh ❤️
        </p>
      </section>
      <div className="footer-links">
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2>Menu</h2>
            <Link to="/" onClick={scrollToTop}>
              Home
            </Link>
            <Link to="/Produk" onClick={scrollToTop}>
              Products
            </Link>
            <Link to="/Contact" onClick={scrollToTop}>
              Contact
            </Link>
          </div>
          <div className="footer-link-items">
            <h2>About</h2>
            <Link to="/About" onClick={scrollToTop}>
              About
            </Link>
          </div>
        </div>
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2>Team</h2>
            <Link to="/OurTeams" onClick={scrollToTop}>
              Our Team
            </Link>
          </div>
          <div className="footer-link-items">
            <h2>Social Media</h2>
            <Link to="https://instagram.com/kobara.id?igshid=NGVhN2U2NjQ0Yg==">
              Instagram
            </Link>
            <Link to="https://tokopedia.link/toko-baju-olahraga">
              Tokopedia
            </Link>
          </div>
        </div>
      </div>
      <section className="social-media">
        <div className="social-media-wrap">
          <div className="footer-logo">
            <Link to="/" className="social-logo" onClick={scrollToTop}>
              <img className="logo" src="../images/kobara1.png" alt="Logo" />
            </Link>
          </div>
          <small className="website-rights">Toko Baju OlahRaga © 2023</small>
          <div className="social-icons">
            <Link
              className="social-icon-link instagram"
              to="https://instagram.com/kobara.id?igshid=NGVhN2U2NjQ0Yg=="
              target="_blank"
              aria-label="Instagram"
            >
              <i className="fab fa-instagram" />
            </Link>
            <Link
              className="social-icon-link tokped"
              to="https://tokopedia.link/toko-baju-olahraga"
              target="_blank"
              aria-label="Tokopedia"
            >
              <img
                src="../images/tokped.png"
                className="tokopedia"
                alt="Tokopedia"
              />
            </Link>
            <Link
              className="social-icon-link github"
              to="https://github.com/agung7703"
              target="_blank"
              aria-label="GitHub"
            >
              <i className="fab fa-github" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
