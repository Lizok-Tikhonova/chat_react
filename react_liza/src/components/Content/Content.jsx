import React from "react";
import WrapperChat from "../WrapperChat";
import Buttons from "../Buttons";
import styles from "./Content.module.css";
import WrapperDialog from "../WrapperDialog";

function Content() {
  
  return (
      <div className={styles.Content}>
          
          <WrapperChat/>
          <WrapperDialog/>


    </div>
  );
}

export default Content;
