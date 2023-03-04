import React from "react";
import styles from "./Buttons.module.css";
// import { Link } from "react-router-dom";
// import styles from "./Battons.module.css";

function Buttons({ label, icon }) {
  return (
    <div className={styles.but_exit}>
      <img src={icon} />
      <button>{label}</button>
    </div>
  );
}

export default Buttons;
