import React from "react";

const Textbox = (props) => {
  const {
    x,
    y,
    width,
    height,
    text,
    fontSize,
    fontColor,
    borderWidth,
    borderColor,
    backgroundColor,
  } = props;

  const style = {
    position: "absolute",
    top: y,
    left: x,
    width,
    height,
    fontSize,
    color: fontColor,
    borderWidth,
    borderColor,
    backgroundColor,
  };

  return <div style={style}>{text}</div>;
};

export default Textbox;
