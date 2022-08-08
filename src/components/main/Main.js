import React from "react";
import Container from "../../UI/Container"
import Cta from "./Cta";
import Features from "./Features";
import Import from "./Import";
import styles from "./Main.module.css";

function Main() {
  return (
    <main className={styles.main}>
    <Container>
      <Features />
      <Import />
      <Cta />
    </Container>
    </main>
  );
}

export default Main;
