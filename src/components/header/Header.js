import React from "react";

import Hero from "./Hero";
import Navbar from "./Navbar";

import styles from "./Header.module.css";
import Container from "../../UI/Container";

function Header() {
  return (
    <header className={styles.header}>
      <Container>
        <Navbar />
        <Hero />
      </Container>
    </header>
  );
}

export default Header;
