import React, { useState, useEffect } from "react";

const useMultiAudio = (sources) => {
  const [tracks, setTracks] = useState([]);
  const [currentPosition, setCurrentPosition] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  console.log("HOOK currentPosition", currentPosition);
  const [duration, setDuration] = useState(0);
  console.log("HOOK duration", duration);

  useEffect(() => {
    if (sources && !tracks.length) {
      const _tracks = sources.map(({ title, source }, index) => {
        const instance = new Audio(source);

        if (index === 0) {
          instance.addEventListener("canplaythrough", () => {
            setDuration(Math.floor(instance.duration));
          });
        }
        return {
          title,
          instance,
          isMuted: false,
        };
      });
      setTracks(_tracks);
    }
  }, [sources, tracks]);

  useEffect(() => {
    let interval;
    if (isPlaying) {
      interval = setInterval(() => {
        setCurrentPosition(Math.floor(tracks[0].instance.currentTime));
      }, 300);
    } else {
      clearInterval(interval);
    }
  });

  const playAll = () => {
    tracks.forEach((track) => track.instance.play());
    setIsPlaying(true);
  };

  const stopAll = () => {
    tracks.forEach((track) => {
      track.instance.pause();
      track.instance.currentTime = 0;
    });
    setIsPlaying(false);
  };

  const setTrackMuteState = (index) => {
    const nextTracks = [...tracks];
    const muted = !nextTracks[index].isMuted;
    nextTracks[index].instance.muted = muted;
    nextTracks[index].isMuted = muted;
    setTracks(nextTracks);
  };

  return {
    tracks,
    playAll,
    stopAll,
    setTrackMuteState,
    currentPosition,
    duration,
  };
};

const Track = ({ track: { title, isMuted }, index, onMutePress }) => {
  return (
    <div style={{ backgroundColor: "#ff0", width: "100%" }}>
      <p>{`Track: ${title} -- isMuted ${isMuted}`}</p>
      <button onClick={() => onMutePress(index)}>mute</button>
    </div>
  );
};

const Controls = ({ currentPosition, duration }) => {
  //   return <ProgressBar />;
};

const MultiPlayer = ({ sources }) => {
  const {
    tracks,
    playAll,
    stopAll,
    setTrackMuteState,
    currentPosition,
    duration,
  } = useMultiAudio(sources);
  console.log("RENDER currentPosition ", currentPosition);
  console.log("REDNER duration ", duration);
  return (
    <>
      <Controls currentPosition={currentPosition} duration={duration} />
      <div style={{}}>
        {tracks.map((t, i) => (
          <Track track={t} key={i} index={i} onMutePress={setTrackMuteState} />
        ))}
      </div>

      <div>
        <button onClick={playAll}>Play all tracks</button>
      </div>
      <div>
        <button onClick={stopAll}>Stop all tracks</button>
      </div>
    </>
  );
};

export default MultiPlayer;
