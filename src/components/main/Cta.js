import React from "react";
import styles from "./Cta.module.css";
import Subscribe from "../header/Subscribe";

function Cta() {
  return (
    <section className={styles.cta}>
      <div className={styles.content}>
        <h2>
          What are you waiting for? Join the waitlist now, to reserve a spot!
        </h2>
        <Subscribe />
      </div>
    </section>
  );
}

export default Cta;
