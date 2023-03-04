import React from "react";

import styles from "./KolvoMess.module.css";

function KolvoMess(kolvo){
  // console.log(kolvo.kolvo)
    if(kolvo.kolvo !=  "" && kolvo.kolvo != undefined){
      return( 
        <div className={styles.mess}> 
        <p>{kolvo.kolvo}</p>
        </div>   
      ) 
    }
   }
  

export default KolvoMess;