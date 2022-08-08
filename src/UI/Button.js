import React from "react";
import styles from "./Button.module.css";

function Button(props) {
  return (
    <button
      className={`${styles.btn} ${props.className}`}
      type={props.type || "button"}
      onClick={props.onConfirm}
    >
      Join waitlist
    </button>
  );
}

export default Button;
