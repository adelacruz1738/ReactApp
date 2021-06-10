import React from "react";
import "./Card.css";

function Card(props) {
  // Combines the css styles
  const classes = "card " + props.className;

  // children reserved name, it equals the content between Card component
  return <div className={classes}>{props.children}</div>;
}

export default Card;
