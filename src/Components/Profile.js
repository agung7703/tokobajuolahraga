import React from "react";
import "../style/Profile.css";
import { Link } from "react-router-dom";
import { Image } from "react-bootstrap";

function Profile({
  lightBg,
  topLine,
  lightText,
  lightTextDesc,
  headline,
  description,
  img,
  alt,
  imgStart,
  fb,
  ig,
  gh,
}) {
  return (
    <>
      <div
        className={
          lightBg ? "home__content-section" : "home__content-section darkBg"
        }
      >
        <div className="container">
          <div
            className="row home__content-row"
            style={{
              display: "flex",
              flexDirection: imgStart === "start" ? "row-reverse" : "row",
            }}
          >
            <div className="col-md">
              <div className="home__content-text-wrapper">
                <div className="top-line">{topLine}</div>
                <h1 className={lightText ? "heading" : "heading dark"}>
                  {headline}
                </h1>
                <p
                  className={
                    lightTextDesc
                      ? "home__content-subtitle"
                      : "home__content-subtitle dark"
                  }
                >
                  {description}
                </p>
                <div className="social-icons">
                  {fb && (
                    <Link
                      className={`social-icon-link facebook ${
                        lightBg ? "black-icon" : ""
                      }`}
                      to={fb}
                      target="_blank"
                      aria-label="Facebook"
                    >
                      <i className="fab fa-facebook-f" />
                    </Link>
                  )}
                  {ig && (
                    <Link
                      className={`social-icon-link instagram ${
                        lightBg ? "black-icon" : ""
                      }`}
                      to={ig}
                      target="_blank"
                      aria-label="Instagram"
                    >
                      <i className="fab fa-instagram" />
                    </Link>
                  )}
                  {gh && (
                    <Link
                      className={`social-icon-link github ${
                        lightBg ? "black-icon" : ""
                      }`}
                      to={gh}
                      target="_blank"
                      aria-label="GitHub"
                    >
                      <i className="fab fa-github" />
                    </Link>
                  )}
                </div>
              </div>
            </div>
            <div className="col-md">
              <div className="home__content-img-wrapper">
                <Image
                  src={img}
                  alt={alt}
                  className="home__content-img"
                  roundedCircle
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
