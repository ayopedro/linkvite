import React from "react";
import styles from "./Card.module.css";

function Card(props) {
  return (
    <div className={styles.card}>
      <div className={styles.img}>
        <img src={props.img} alt={props.title} />
      </div>
      <div className={styles.content}>
        <h3>{props.title}</h3>
        <p>{props.desc}</p>
      </div>
    </div>
  );
}

export default Card;
