import React from "react";
import Button from "../../UI/Button";
import styles from "./Import.module.css";
// import icons from "../../assets/icons.png"

function Import() {
  return (
    <section className={styles.import}>
        <div className={styles.title}>
          <h2>Easily import your bookmarks from existing platforms</h2>
          <p>
            Once you join the Linkvite family, your existing bookmarks from
            popular platforms can be automatically imported. You can also create
            CSV files that meet our import standards to import bookmarks.
          </p>
          <Button className={styles.btn} />
        </div>
        <div className={styles.icons}>
          {/* <img src={icons} alt="" /> */}
        </div>
    </section>
  );
}

export default Import;
