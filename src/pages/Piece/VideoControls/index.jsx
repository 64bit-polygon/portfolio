import React, { useState, useEffect } from "react";
import styles from "./styles.module.scss";
import { PlayButton } from "../PlayButton";
import cn from "classnames";

const percentPlayed = (videoPlaybackTime, duration) => {
  if (!videoPlaybackTime || !duration) return "0%";
  return `${videoPlaybackTime / duration * 100}%`;
}

export const VideoControls = ({ isPlaying, setIsPlaying, duration, videoPlaybackTime, jumpTo }) => {
  const [isScrubberJumping, setIsScrubberJumping] = useState();

  useEffect(() => {
    if (videoPlaybackTime === duration) {
      handleJump(0);
    }
  }, [videoPlaybackTime, duration]);

  const handleJump = timeStamp => {
    setIsScrubberJumping(true);
    jumpTo(timeStamp);
    setTimeout(() => setIsScrubberJumping(false), 100);
  }

  const handleClick = ev => {
    const { left, width } = ev.target.getBoundingClientRect();
    const x = ev.clientX - left;
    const newPlaybackTime = (x / width * duration);
    handleJump(newPlaybackTime);
  }

  return (
    <nav className={styles.videoControls}>
      <PlayButton isPlaying={isPlaying} setIsPlaying={setIsPlaying} />
      <div className={styles.progressBar} onClick={handleClick}>
        <div
          className={cn(styles.scrubber, {[styles.jumping]: isScrubberJumping})}
          style={{"left": percentPlayed(videoPlaybackTime, duration)}}
          onClick={ev => ev.stopPropagation()}
        />
      </div>
    </nav>
  )
}
