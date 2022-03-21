import React from "react";
import Track from "./Track";
import Controls from "./Controls";
import UseMultiAudio from "./UseMultiAudio";

const MultiPlayer = ({ sources }) => {
  const {
    tracks,
    playAll,
    stopAll,
    loopAll,
    isLoop,
    setTrackMuteState,
    currentPosition,
    duration,
  } = UseMultiAudio(sources);
  const colors = [
    "#8D7B9C",
    "#DAF7A6",
    "#FFC300",
    "#FF5733",
    "#C70039",
    "#900C3F",
    "#581845",
    "#4B60E0",
  ];
  return (
    <>
      <Controls currentPosition={currentPosition} duration={duration} />
      <div style={{}}>
        {tracks.map((t, i) => (
          <Track
            track={t}
            key={i}
            index={i}
            onMutePress={setTrackMuteState}
            style={{ backgroundColor: `${colors[i]}` }}
          />
        ))}
      </div>

      <div>
        <button onClick={playAll}>Play all tracks</button>
      </div>
      <div>
        <button onClick={stopAll}>Stop all tracks</button>
      </div>
      <div>
        <button onClick={loopAll}>{isLoop ? "UnLoop" : "Loop All"} </button>
      </div>
    </>
  );
};

export default MultiPlayer;
