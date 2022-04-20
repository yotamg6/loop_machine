import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
let interval;
const useMultiAudio = (sources) => {
  const [tracks, setTracks] = useState([]);
  const [currentPosition, setCurrentPosition] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [isLoop, setIsLoop] = useState(false);
  const [loadedTracks, setLoadedTracks] = useState(false);
  const [areReady, setAreReady] = useState(false);

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
          isReady: false,
        };
      });
      setTracks(_tracks);
    }
  }, [sources, tracks]);

  useEffect(() => {
    if (tracks.length) {
      const nextTracks = [...tracks];
      nextTracks.forEach((track, index) => {
        const audio = track.instance;
        audio.currentTime = 0;
        audio.addEventListener("canplaythrough", () => {
          track.isReady = true;
          if (index === nextTracks.length - 1) {
            setAreReady(true);
          }
        });
      });
      setTracks(nextTracks);
    }
  }, [duration]);

  useEffect(() => {
    if (tracks.length) {
      const filtered = tracks.filter((track) => track.isReady == false);

      if (!filtered.length) {
        setLoadedTracks(true);
      }
    }
  }, [areReady]);

  useEffect(() => {
    if (isPlaying) {
      interval = setInterval(
        () => setCurrentPosition(tracks[0].instance.currentTime),
        100
      );
    } else {
      clearInterval(interval);
    }
  }, [isPlaying]);

  const playAll = async () => {
    if (loadedTracks) {
      try {
        await Promise.all(tracks.map((track) => track.instance.play()));
        setIsPlaying(true);
      } catch (e) {
        console.log(e);
      }
    } else {
      toast.error(
        "Not all files are loaded. Please press the play button again"
      );
    }
  };

  const stopAll = () => {
    tracks.forEach((track) => {
      track.instance.pause();
      track.instance.currentTime = 0;
      setCurrentPosition(0);
    });
    setIsPlaying(false);
  };

  const seek = (e) => {
    const clickPosition = e.target.value / 100;
    const clickTime = clickPosition * duration;
    setCurrentPosition(clickTime);
    tracks.forEach((track) => {
      track.instance.currentTime = clickTime;
    });
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
    seek,
  };
};

export default useMultiAudio;
