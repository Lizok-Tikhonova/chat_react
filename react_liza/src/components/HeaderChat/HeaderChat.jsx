import React from "react";
// import { Link } from "react-router-dom";
import styles from "./HeaderChat.module.css";
import Buttons from "../Buttons";




<Buttons className={styles.but}/>

function HeaderChat({ label }) {
  return (
    <div className={styles.HeaderChat}>
      <h1>{label}</h1>
      <button className={styles.but}>+ Create New Chat</button>
    </div>
  );
}



export default HeaderChat;
