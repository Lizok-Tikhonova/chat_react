import React from "react";
import styles from "./DialogNewMess.module.css";
import { useState, useEffect } from "react";



function DialogNewMess({arr, new_arr}) {
  let [input, change] = useState([""])
 
    return (     
      <div className={styles.newM}>      
        <button className={styles.plus}>
          +
        </button>
        <input className={styles.input} type="text" placeholder="      Type a message here" onChange={(event)=>{change(event.target.value)}}/>

        <button className={styles.smile}>
            <img src="img/Smileicon.png"/>
        </button>
        <button className={styles.samolet} onClick={()=>{new_arr([...arr, { icon: "",mess: [input],
         status: "", time: "",role: 0}])}}>
            <img src="img/samolet.svg"/>
        </button>
  
      </div>
      
    );
  }

export default DialogNewMess;