
import React from "react";
import styles from "./Photo.module.css";





function Photo({img, textPh}){
    return(
        
    <div class={styles.files}>
        <img src={img}/>
        <div class={styles.text}>
         <span>{textPh}</span>
        </div>
     </div>
    )  
  }



  export default Photo;