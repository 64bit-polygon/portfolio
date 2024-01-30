import React from "react";
import styles from "./styles.module.scss";
import cn from "classnames";

export const PlayButton = ({ isPlaying, setIsPlaying, onClick }) => {
  const handleOnClick = () => {
    setIsPlaying(!isPlaying);
    onClick();
  }

  return (
    <button className={cn(styles.playButton, {[styles.playing]: isPlaying})} onClick={handleOnClick}>
      {isPlaying ? "pause" : "play"}
    </button>
  )
};

PlayButton.defaultProps = {
  onClick: () => {}
};