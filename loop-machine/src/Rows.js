import React, { useState } from "react";

import t1 from "./tracks/asaftrack1.mp3";
import t2 from "./tracks/asaftrack2.mp3";
import t3 from "./tracks/asaftrack3.mp3";
import t4 from "./tracks/asaftrack4.mp3";
import t5 from "./tracks/asaftrack5.mp3";
import t6 from "./tracks/asaftrack6.mp3";
import t7 from "./tracks/asaftrack7.mp3";
import t8 from "./tracks/asaftrack8.mp3";
const Rows = () => {
  const [mute, setMute] = useState(false);
  // const [audio1, setAudio1] = useState(new Audio(t1));
  // const audio2 = new Audio(t2);
  // const audio3 = new Audio(t3);
  // const audio4 = new Audio(t4);
  // const audio5 = new Audio(t5);
  // const audio6 = new Audio(t6);
  // const audio7 = new Audio(t7);
  // const audio8 = new Audio(t8);

  const buildRow = (track) => {
    return (
      <audio controls>
        <source src={track} type="audio/mpeg"></source>
      </audio>
    );
  };
  const toggleMute = (track) => {
    setMute(!mute);
  };

  return (
    <>
      <div>
        <div style={{ backgroundColor: "green" }}>
          {buildRow(t1)}
          <button onClick={() => toggleMute(t1)}>
            {mute ? "Unmute" : "Mute"}
          </button>
        </div>
        <div style={{ backgroundColor: "blue" }}>{buildRow(t2)}</div>
        <div style={{ backgroundColor: "red" }}>{buildRow(t3)}</div>
        <div style={{ backgroundColor: "purple" }}>{buildRow(t4)}</div>
        <div style={{ backgroundColor: "yellow" }}>{buildRow(t5)}</div>
        <div style={{ backgroundColor: "pink" }}>{buildRow(t6)}</div>
        <div style={{ backgroundColor: "tomato" }}>{buildRow(t7)}</div>
        <div style={{ backgroundColor: "lavender" }}>{buildRow(t8)}</div>
      </div>
      <button>Play all</button>
      <button>Stop all</button>
      <button>Loop all</button>
    </>
  );
};

export default Rows;
