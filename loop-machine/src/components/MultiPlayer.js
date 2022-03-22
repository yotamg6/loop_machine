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
    "#4BE06F",
    "#4B60E0",
  ];
  return (
    <>
      <Grid container justifyContent="center" sx={{ m: 1 }}>
        <h1 className="headline"> LOOP MACHINE</h1>
      </Grid>

      <Grid container justifyContent="center" sx={{ m: 1 }}>
        <Controls
          currentPosition={currentPosition}
          duration={duration}
          setMouseIsDownState={setMouseIsDownState}
          seek={seek}
        />
      </Grid>
      <Grid
        container
        justifyContent="space-around"
        style={{ height: "70vh" }}
        cols={2}
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
        <Box sx={{ m: 1 }}>
          <Button
            style={{ margin: "1px" }}
            variant="contained"
            onClick={stopAll}
            startIcon={<StopCircleIcon />}
          >
            Stop all tracks
          </Button>

          <Button
            style={{ margin: "1px" }}
            variant="contained"
            color="secondary"
            onClick={playAll}
            startIcon={<PlayCircleIcon />}
          >
            Play all tracks
          </Button>

          {isLoop ? (
            <Button
              style={{ margin: "1px" }}
              variant="contained"
              onClick={loopAll}
              startIcon={<DoDisturbAltOutlinedIcon />}
            >
              Unloop
            </Button>
          ) : (
            <Button
              style={{ margin: "1px" }}
              variant="contained"
              onClick={loopAll}
              startIcon={<LoopIcon />}
            >
              Loop all tracks
            </Button>
          )}
        </Box>
      </Grid>
    </>
  );
};

export default MultiPlayer;
