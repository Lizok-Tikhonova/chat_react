import React from "react";
import Navigation from "../Navigation/Navigation";
import Profile from "../Profile/Profile";
import Buttons from "../Buttons";
import styles from "./AsideBar.module.css";


function AsideBar() {
  return (
    <aside className={styles.AsideBar}>
      <Profile label="Henry Jabbawockiez" img="/chel.png"/>
      <Navigation />
      <Buttons label="Log out" icon="/power.svg" />
    </aside>
  );
}

export default AsideBar;
