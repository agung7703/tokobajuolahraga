import React from "react";
import { Image } from "react-bootstrap";
import "../style/Content.css";

function Content({
  lightBg,
  topLine,
  lightText,
  lightTextDesc,
  headline,
  description,
  img,
  alt,
  imgStart,
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
              </div>
            </div>
            <div className="col-md">
              <div className="home__content-img-wrapper">
                <Image
                  src={img}
                  alt={alt}
                  className="home__content-img"
                  rounded
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Content;
