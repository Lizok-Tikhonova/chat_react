import React from "react";
import Message from "../Message/Message";
import styles from "./DialogMessage.module.css";



function DialogMessage({arr}) {
  const pathname = window.location.pathname 

  return(
    <div className={styles.dialog}>
      {arr.map(({mess, role})=>(
       
        <div className={styles.dialog1}>  
          <Message messText={mess} role={role} path={pathname} />
        </div>
        
      ))}
    </div>   
  )
}





export default DialogMessage
