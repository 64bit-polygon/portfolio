import React from "react";
import styles from "./styles.module.scss";
import { PlayButton } from "../PlayButton";
import cn from "classnames";

export const CarouselControls = ({
  isPlaying,
  setIsPlaying,
  activeIndex,
  setActiveIndex,
  imgUrls,
  playNext
}) => {
  const handleClick = () => {
    playNext();
  }

  return (
    <nav className={styles.carouselControls}>
      <PlayButton isPlaying={isPlaying} setIsPlaying={setIsPlaying} onClick={handleClick} />
      <div className={styles.imageSelection}>
      {imgUrls.map((url, index) => (
        <button
          className={cn(styles.imageSelector, {[styles.active]: activeIndex === index})}
          key={`${index}${url}`}
          onClick={() => {
            setActiveIndex(index);
            setIsPlaying(false);
          }}
        />
      ))}
      </div>
    </nav>
  );
};
