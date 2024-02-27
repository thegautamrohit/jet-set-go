import React from "react";
import styles from "./Navbar.module.scss";

function Navbar() {
  return (
    <nav className={styles.navbar__wrapper}>
      <h1>JetSetGo</h1>
      <p>Millions of cheap flights. One simple search.</p>
    </nav>
  );
}

export default Navbar;
