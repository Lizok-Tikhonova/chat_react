import React from "react";
// import { NavLink } from "react-router-dom";
import styles from "./Message.module.css";
import MessText from "../MessText";


function Message({ messText, role, path }) {
    
    if (role) {
        if (path == "/chat/Polz3") {
          return (
            <div className={styles.otprav}>
              <img src="./img/NikaJerrardo.svg" />
              <div className={styles.otpravText}>
                {messText.map((mess) => (
                  <MessText mess={mess} role={role} />
                ))}
              </div>
            </div>
          );
        } else if (path == "/chat/Polz2") {
          return (
            <div className={styles.otprav}>
              <img src="./img/JaredSunn.svg" />
              <div className={styles.otpravText}>
                {messText.map((mess) => (
                  <MessText mess={mess} role={role} />
                ))}
              </div>
            </div>
          );
        } else if (path == "/chat/Polz4") {
          return (
            <div className={styles.otprav}>
              <img src="./img/DavidAmrosa.svg" />
              <div className={styles.otpravText}>
                {messText.map((mess) => (
                  <MessText mess={mess} role={role} />
                ))}
              </div>
            </div>
          );
        } else if (path == "/chat/Polz1") {
          return (
            <div className={styles.otprav}>
              <img src="./img/LuiRobin.svg" />
              <div className={styles.otpravText}>
                {messText.map((mess) => (
                  <MessText mess={mess} role={role} />
                ))}
              </div>
            </div>
          );
        }
        
    }
    else {
        return (
            <div class={styles.poluch}>
                <div className={styles.poluchText}>
                    {messText.map((mess) => (
                        <MessText mess={mess} role={role} />
                    ))}
                </div >
            </div>
        )
    }
    
}




export default Message;