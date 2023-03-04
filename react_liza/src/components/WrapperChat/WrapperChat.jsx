import React from "react";
import HeaderChat from "../HeaderChat";
// import { Link } from "react-router-dom";
import styles from "./WrapperChat.module.css";
import SearhChat from "../SearchChat/SearchChat";
import Chats from "../Chats";
import WrapperDialog from "../WrapperDialog";



function WrapperChat() {
  const chats = [
    {
      id:"0",
      href: "/chat/Polz1",
      icon: "./img/LuiRobin.svg",
      name_: "Lui Robin",
      status_: "...writes",
      time: "1 minute ago",
      message:"Most of its text is made up from sections 1.10.32–3 of Cicero's De finibus bonorum et malorum (On the Boundaries of Goods and Evils; finibus may also be translated as purposes). ",
      kolvoMess: "2",
    },
    {
      href: "/chat/Polz2",
      icon: "./img/JaredSunn.svg",
      name_: "Jared Sunn",
      status_: "• records voice message",
      time: "2 minutes ago",
      message: "Voice message (01:15) ",
      kolvoMess: "1",
      FileImg:"./img/files2.png",
      fileKolvo:"files (x2)",
      imgPh:"./img/photo2.png",
      textPh:"Photo",
  
    },
    {
      href: "/chat/Polz3",
      icon: "./img/NikaJerrardo.svg",
      name_: "Nika Jerrardo",
      status_: "last online 5 hours ago",
      time: "3 days ago",
      message: "Cicero famously orated against his political opponent Lucius Sergius Catilina.",
    },
    {
      href: "/chat/Polz4",
      icon: "./img/DavidAmrosa.svg",
      name_: "David Amrosa",
      status_: "last online 5 hours ago",
      time: "3 days ago",
    },
  
  
  ];
  
  return (
    <div className={styles.WrapperChat}>
      <div className={styles.gg}>
      <HeaderChat label="Chats" />
      {/* <div className={styles.search}> */}
        <SearhChat value = "           Search" dialogs={chats}/>
      {/* </div> */}
      </div>
    </div>
  );
}

export default WrapperChat;
