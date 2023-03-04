import React from "react";
import { Link } from "react-router-dom";
import styles from "./Profile.module.css";

function Profile({ label, img }) {
  return (
    <div className={styles.profile}>
      <img src={img} className={styles.img}/>
        <p>{label}</p>
    </div>
  );
}

export default Profile;
