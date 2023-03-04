
import React from "react";
import styles from "./Files.module.css";





function Files({kolvo, img}){
    return(
      <div class={styles.files}>
        <img src={img}/>
        <div class={styles.text}>
        {/* <img src="./img/filetext.png"/> */}
        <span>{kolvo}</span>
        </div>
     </div>   
    )  
  }


  export default Files;
