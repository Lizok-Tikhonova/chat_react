import React from "react";

import styles from "./DialogProfile.module.css";


function DialogProfile({ label, img, status }) {
    return (
      <div className={styles.D_profile}>
        
          <img src={img} className={styles.D_img}/>
          <div className={styles.name_}>
          <h3>{label}</h3>
          <p>{status}</p>
        </div>
        <div className={styles.settings}>
            <button>
                <img src="./img/settingsDialog.svg"/>
            </button>
            <button>
                <img src="./img/Dialog_tocki.svg"/>
            </button>
        </div>
        
      </div>
      
    );
  }

export default DialogProfile;