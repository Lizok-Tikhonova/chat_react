import React from "react";
import ElemChat from "./ElemChat";
import styles from "./Chats.module.css";
import Files from "./Files";
import Photo from "./Photo";
import KolvoMess from "./KolvoMess";





function Chats(chats) {
  
  let elem = chats.chats
  
  return (
    <nav>
      <ul className={styles.ul}>
            <li key={elem.href}>
              <ElemChat
                href={elem.href}
                icon={elem.icon}
                name_={elem.name_}
                status_={elem.status_}
                message={elem.message}
                time={elem.time}
                kolvoMess = <KolvoMess kolvo = {elem.kolvoMess}/>
                file = <Files kolvo={elem.fileKolvo} img={elem.FileImg}/>
                photo = <Photo img={elem.imgPh} textPh={elem.textPh}/>
               
              />
            </li>
      </ul>
    </nav>
  );
}

export default Chats;
