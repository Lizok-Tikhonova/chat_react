import React from "react";
// import { Link } from "react-router-dom";
import styles from "./SearchChat.module.css";
import { useState} from "react";
import Chats from "../Chats";


function SearhChat({ value, dialogs }) {

  const [values, setValue] = useState('')

  const filteredChats = dialogs.filter((elem)=>{
    return elem.name_.toLowerCase().includes(values.toLowerCase())
  })

  return (
    <div className={styles.SearhChat}>
      <input placeholder={value} className={styles.input} onChange={(event)=>setValue(event.target.value)}/>
      <div>
        {
          filteredChats.map((chat)=>{
            return(
              <Chats chats={chat}/>
            )
          })
        }
      </div>
    </div>
  );
}

export default SearhChat;

