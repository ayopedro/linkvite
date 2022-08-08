import React from "react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import styles from "./Footer.module.css";
import wLogo from "../../assets/white-logo.svg";
import cLogo from "../../assets/colored-logo.svg";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <div className={styles.logo1}>
          <img src={wLogo} alt="linkvite" />
        </div>
        <div className={styles.logo2}>
          <img src={cLogo} alt="linkvite" />
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipscising elit, sed do eimod,
          dolor sit amet consectetur lorem ipsum elit dolor.
        </p>
        <div className={styles.social}>
          <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
            <FaFacebook />
          </a>
          <a href="https://www.twitter.com" target="_blank" rel="noreferrer">
            <FaTwitter />
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noreferrer">
            <FaInstagram />
          </a>
        </div>
      </div>
      <div className={styles.copyright}>
        <p>Linkvite, by Decover Labs, Inc.</p>
      </div>
    </footer>
  );
}

export default Footer;
