import React, { useEffect, useState } from "react";
import Button from "../../UI/Button";
import styles from "./Navbar.module.css";
import logo from "../../assets/colored-logo.svg";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showNav, setShowNav] = useState(false);
  const [windowsize, setWindowSize] = useState(getWindowSize());

  const toggleHandler = () => {
    setIsOpen(!isOpen);
    setShowNav(!showNav);
  };

  let width = windowsize.innerWidth;

  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize());
    }

    window.addEventListener("resize", handleWindowResize);

    width > 900 ? setShowNav(true) : setShowNav(false);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, [width]);

  function getWindowSize() {
    const { innerWidth, innerHeight } = window;
    return { innerWidth, innerHeight };
  }

  return (
    <nav id="navbar" className={styles.navbar}>
      <div className={styles.logo}>
        <img src={logo} alt="linkvite" />
      </div>
      <button className={styles.toggle} onClick={toggleHandler}>
        {isOpen && showNav ? (
          <svg
            width="20"
            height="20"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11.8334 1.34175L10.6584 0.166748L6.00008 4.82508L1.34175 0.166748L0.166748 1.34175L4.82508 6.00008L0.166748 10.6584L1.34175 11.8334L6.00008 7.17508L10.6584 11.8334L11.8334 10.6584L7.17508 6.00008L11.8334 1.34175Z"
              fill="#4E4E4E"
            />
          </svg>
        ) : (
          <svg
            width="20"
            height="20"
            viewBox="0 0 12 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 8H12V6.66667H0V8ZM0 4.66667H12V3.33333H0V4.66667ZM0 0V1.33333H12V0H0Z"
              fill="#4E4E4E"
            />
          </svg>
        )}
      </button>
      {showNav && (
        <ul className={styles.navlinks}>
          <li>
            <a href="#home" className={styles.navlink}>
              home
            </a>
          </li>
          <li>
            <a href="#products" className={styles.navlink}>
              products
            </a>
          </li>
          <li>
            <a href="#contact" className={styles.navlink}>
              contact us
            </a>
          </li>
        </ul>
      )}
      <Button className={styles.button} />
    </nav>
  );
}

export default Navbar;
