import React, { useState, useEffect } from "react";
const UseMultiAudio = (sources) => {
  const [tracks, setTracks] = useState([]);
  const [currentPosition, setCurrentPosition] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [isLoop, setIsLoop] = useState(false);

  useEffect(() => {
    if (sources && !tracks.length) {
      const _tracks = sources.map(({ title, source }, index) => {
        const instance = new Audio(source);

        if (index === 0) {
          instance.addEventListener("canplaythrough", () => {
            setDuration(instance.duration);
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
        setCurrentPosition(tracks[0].instance.currentTime);
      }, 300);
    } else {
      clearInterval(interval);
    }
  }, [isPlaying]);

  const playAll = () => {
    try {
      tracks.forEach(async (track) => await track.instance.play());
      setIsPlaying(true);
    } catch (e) {
      console.log(e);
    }
  };

  const stopAll = () => {
    tracks.forEach((track) => {
      track.instance.pause();
      track.instance.currentTime = 0;
    });
    setIsPlaying(false);
  };

  const loopAll = () => {
    tracks.forEach((track) => {
      if (isLoop) {
        track.instance.loop = false;
        setIsLoop(false);
      } else {
        track.instance.loop = true;
        setIsLoop(true);
      }
    });
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
    loopAll,
    isLoop,
    setTrackMuteState,
    currentPosition,
    duration,
  };
};

export default UseMultiAudio;
