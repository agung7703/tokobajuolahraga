import React from "react";
import "../style/Button.css";
import { Link } from "react-router-dom";

const STYLES = ["btns--primary", "btns--outline", "btns--test"];

const SIZES = ["btns--medium", "btns--large"];

export const CustomButton = ({
  children,
  type,
  onClick,
  buttonStyle,
  buttonSize,
}) => {
  const checkButtonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[1];
  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[1];

  return (
    <Link to="/produk" className="btns-mobile">
      <button
        className={`btns ${checkButtonStyle} ${checkButtonSize}`}
        onClick={onClick}
        type={type}
      >
        {children}
      </button>
    </Link>
  );
};
