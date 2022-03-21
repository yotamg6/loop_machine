import React from "react";
import Track from "./Track";
import Controls from "./Controls";
import UseMultiAudio from "./UseMultiAudio";

import { Grid } from "@mui/material";
import { Button, Box } from "@mui/material/";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import StopCircleIcon from "@mui/icons-material/StopCircle";
import LoopIcon from "@mui/icons-material/Loop";
import DoDisturbAltOutlinedIcon from "@mui/icons-material/DoDisturbAltOutlined";

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
    setMouseIsDownState,
    seek,
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
      <Controls
        currentPosition={currentPosition}
        duration={duration}
        setMouseIsDownState={setMouseIsDownState}
        seek={seek}
      />
      <Grid
        // container
        // direction="column"
        alignItems="center"
        justifyContent="center"
        // style={{ height: "80vh" }}
        cols={2}
        rowHeight={164}
      >
        {tracks.map((t, i) => (
          <Track
            track={t}
            key={i}
            index={i}
            onMutePress={setTrackMuteState}
            style={{ backgroundColor: `${colors[i]}` }}
          />
        ))}
      </Grid>
      <Box>
        <Button startIcon={<PlayCircleIcon />} onClick={playAll}>
          Play all tracks
        </Button>
        <Button startIcon={<StopCircleIcon />} onClick={stopAll}>
          Stop all tracks
        </Button>
        {isLoop ? (
          <Button startIcon={<DoDisturbAltOutlinedIcon />} onClick={loopAll}>
            Unloop
          </Button>
        ) : (
          <Button startIcon={<LoopIcon />} onClick={loopAll}>
            Loop all tracks
          </Button>
        )}
      </Box>
    </>
  );
};

export default MultiPlayer;

{
  /* <div>
        <button onClick={playAll}>Play all tracks</button>
      </div>
      <div>
        <button onClick={stopAll}>Stop all tracks</button>
      </div>
      <div>
        <button onClick={loopAll}>{isLoop ? "UnLoop" : "Loop All"} </button>
      </div> */
}
