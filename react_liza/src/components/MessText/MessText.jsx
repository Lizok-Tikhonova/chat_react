import React from "react";
import styles from "./MessText.module.css"

function MessText ({mess, role}) {
    if(!role){
        return(
            <div className={styles.mes}>
                <button className={styles.btn}>
                    <img src="img/more-horizontal.svg"/>
                </button>
                <p className={styles.textAuthor}>
                    {mess}
                </p>
        </div>
        )
    }
    return(
        <div className={styles.mes}>
            <p className={styles.text}>
                {mess}
            </p>
            <button className={styles.btn}>
                <img src="img/more-horizontal.svg"/>
            </button>
        </div>
    )
    
}

export default MessText