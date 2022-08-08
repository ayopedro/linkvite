import React from "react";
import Subscribe from "./Subscribe";
import heroImage from "../../assets/hero-image.svg";
import styles from "./Hero.module.css"

function Hero() {
  return (
    <div className={styles.hero}>
    <div className={styles.alert}>coming soon</div>
    <div className={styles.message}>
      <h1 className={styles.heading}>The easiest way to save and organize your bookmarks.</h1>
      <p className={styles.paragraph}>
        Linkvite is an all-in-one tool that allows you to save and organize
        bookmarks in a better way. Available on iOS, Android, Web Plugins and
        the cloud, among other platforms.
      </p>
      <Subscribe />
    </div>
      <img src={heroImage} alt="Linkvite" className={styles.image}/>
    </div>
  );
}

export default Hero;
