import React from "react";

import styles from "./WrapperDialog.module.css";
import DialogProfile from "../DialogProfile";
import DialogMessage from "../DialogMessage";
import DialogNewMess from "../DialogNewMess";
import { Route, Routes } from "react-router-dom";
import { useState } from "react";


function WrapperDialog() {
  const arr = [[
    {
      icon: "img/grid.svg",
      mess: ["Hello! Finally found the time to write to you) I need your help in creating interactive animations for my mobile application.", "Can I send you files?"],
      status: "white",
      time: "",
      role: 1,
    },
    {
      icon: "img/grid.svg",
      mess: ["Hey! Okay, send out."],
      status: "",
      time: "",
      role: 0,
    },
    {
      icon: "img/grid.svg",
      mess: ["Hello! I tweaked everything you asked. I am sending the finished file."],
      status: "",
      time: "",
      role: 0,
    },
   
  ],
  [{
      icon: "img/grid.svg",
      mess: ["Hello! I tweaked everything you asked. I am sending the finished file."],
      status: "",
      time: "",
      role: 1,
    },],[{
      icon: "img/grid.svg",
      mess: ["Most of its text is made up from sections 1.10.32–3 of Cicero's De finibus bonorum et malorum (On the Boundaries of Goods and Evils; finibus may also be translated as purposes). "],
      status: "",
      time: "",
      role: 1,}
    ],[]];




  // let [messages, newMess] = useState(arr)
  let [polz1, mes_polz1] = useState(arr[0]);
  let [polz2, mes_polz2] = useState(arr[1]);
  let [polz3, mes_polz3] = useState(arr[2]);
  let [polz4, mes_polz4] = useState(arr[3]);


    return (
      <div className={styles.WrapperDialog}>
        <Routes>
          <Route
            path="/Polz3"
            element={
              <DialogProfile
                label="Nika Jerrado"
                img="./img/NikaJerrardo.svg"
                status="last online 5 hours ago"
              />
            }
          />
          <Route
            path="/Polz2"
            element={
              <DialogProfile
                label="Jared Sunn"
                img="./img/JaredSunn.svg"
                status="...records voice message"
              />
            }
          />
          <Route
            path="/Polz1"
            element={
              <DialogProfile
                label="Lui Robin"
                img="./img/LuiRobin.svg"
                status="...writes"
              />
            }
          />
          <Route
            path="/Polz4"
            element={
              <DialogProfile
                label="David Amrosa"
                img="./img/DavidAmrosa.svg"
                status="last online 5 hours ago"
              />
            }
          />
        </Routes>
        <Routes>
          <Route path="/Polz3" element={<DialogMessage arr={polz1} />} />

          <Route path="/Polz2" element={<DialogMessage arr={polz2} />} />
          <Route path="/Polz1" element={<DialogMessage arr={polz3} />} />
          <Route path="/Polz4" element={<DialogMessage arr={polz4} />} />
        </Routes>
        <Routes>
          <Route
            path="/Polz1"
            element={<DialogNewMess arr={polz3} new_arr={mes_polz3} />}
          />
          <Route
            path="/Polz2"
            element={<DialogNewMess arr={polz2} new_arr={mes_polz2} />}
          />
          <Route
            path="/Polz3"
            element={<DialogNewMess arr={polz1} new_arr={mes_polz1} />}
          />
          <Route
            path="/Polz4"
            element={<DialogNewMess arr={polz4} new_arr={mes_polz4} />}
          />
        </Routes>
      </div>
    );
  }

export default WrapperDialog;