import React, { useState, useEffect } from "react";
import { MonitorWrapper } from "../MonitorWrapper";
import { CarouselControls } from "../CarouselControls";
import { CarouselStrip } from "../CarouselStrip";

export const CarouselPlayer = ({ imgUrls, captions, isPhone }) => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);
  
  const playNext = () => {
    const nextIndex = activeIndex + 1 < imgUrls.length ? activeIndex + 1 : 0;
    setActiveIndex(nextIndex);
  };

  const handlePlayNext = () => {
    if (!isPlaying) {
      playNext();
    }
  }

  useEffect(() => {
    let timer;
    if (isPlaying) {
      timer = setTimeout(() => {
        playNext();
      }, 4000);
    } else {
      clearTimeout(timer);
    }
    return () => clearTimeout(timer);
  }, [isPlaying, activeIndex])

  return (
    <div>
      <MonitorWrapper
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        caption={captions?.[activeIndex]}
        isPhone={isPhone}
        onClick={handlePlayNext}
      >
        <CarouselStrip imgUrls={imgUrls} activeIndex={activeIndex} />
      </MonitorWrapper>
      <CarouselControls
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        activeIndex={activeIndex}
        setActiveIndex={setActiveIndex}
        imgUrls={imgUrls}
        playNext={handlePlayNext}
      />
    </div>
  )
};
