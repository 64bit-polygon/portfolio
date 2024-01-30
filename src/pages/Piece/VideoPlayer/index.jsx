import React, { useState, useRef, useEffect } from "react";
import styles from "./styles.module.scss";
import { VideoControls } from "../VideoControls";
import { MonitorWrapper } from "../MonitorWrapper";

const determineCurrentCaption = (videoPlaybackTime, captionsData) => {
  if (!captionsData) return;
  const timeStamps = Object.keys(captionsData).map(timeStamp => parseInt(timeStamp, 10));
  if (!timeStamps) return;
  const captions = Object.values(captionsData);
  if ( videoPlaybackTime >= timeStamps[timeStamps.length - 1] ) {
    return captions[timeStamps.length - 1];
  }
  const currentCaptionIndex = timeStamps.findIndex(timeStamp => timeStamp > videoPlaybackTime) - 1;
  return captions[currentCaptionIndex];
}

export const VideoPlayer = ({
  videoUrl,
  captionsData,
  isPhone,
  poster
}) => {
  const videoRef = useRef();
  const [duration, setDuration] = useState();
  const [isPlaying, setIsPlaying] = useState(false);
  const [videoPlaybackTime, setVideoPlaybackTime] = useState(0);
  const [caption, setCaption] = useState(determineCurrentCaption(0, captionsData));

  useEffect(() => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.play();
      }
  
      if (!isPlaying) {
        videoRef.current.pause();
      }
    }
  }, [videoRef.current, isPlaying, duration]);

  useEffect(() => {
    setCaption(determineCurrentCaption(videoRef.current.currentTime, captionsData));
  }, [videoPlaybackTime]);

  const handleTimeUpdate = () => setVideoPlaybackTime(videoRef.current.currentTime);

  const handleLoadedMetadata = ev => setDuration(ev.target.duration);

  const jumpTo = timeStamp => {
    setVideoPlaybackTime(timeStamp);
    videoRef.current.currentTime = timeStamp;
    setIsPlaying(true);

    if (timeStamp === 0) {
      videoRef.current.play();
    }
  }

  return (
    <div>
      <MonitorWrapper isPhone={isPhone} isPlaying={isPlaying} setIsPlaying={setIsPlaying} caption={caption}>
        <video className={styles.video} poster={poster} ref={videoRef} onTimeUpdate={handleTimeUpdate} onLoadedMetadata={handleLoadedMetadata}>
          <source src={videoUrl} type="video/mp4" />
        </video>
      </MonitorWrapper>
      <VideoControls
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        videoPlaybackTime={videoPlaybackTime}
        jumpTo={jumpTo}
        duration={duration}
      />
    </div>
  )
};
