import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./ElemChat.module.css";



function ElemChat({href, icon, name_, status_, time, message, kolvoMess, file, photo}) {
  return (
    <NavLink className={({isActive}) => isActive ? styles.chatActive : styles.chatNotActive} to={href}>
      <div className={styles.div1}>
      <img src={icon} />
      <div className={styles.div1_1}>
        <h4 className={styles.name}>{name_}</h4>
        <p className={styles.status}>{status_}</p>
      </div>
      <p className={styles.time}>{time}</p>
     </div>
     <div className={styles.div2}>
      <p className={styles.message}>{message}</p>
     <div className={styles.kolvoMess}>{kolvoMess}</div>
     </div>
     <div className={styles.file}>{file}{photo}</div>
    </NavLink>
  );
}

export default ElemChat;
