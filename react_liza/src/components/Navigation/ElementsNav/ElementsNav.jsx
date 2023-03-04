import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./NavigationNav.module.css";



function ElementsNav({ href, label, icon }) {
  return (
    <NavLink className={({ isActive }) =>
     isActive? styles.item + " " + styles.activeItem : styles.item
    }
      to={href}>
      <img src={icon} />
      <p className={styles.textItem}>{label}</p> 
    </NavLink>
  );
}

export default ElementsNav;
