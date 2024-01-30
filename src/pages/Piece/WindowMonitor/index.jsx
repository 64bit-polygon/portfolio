import React from "react";
import styles from "./styles.module.scss";

export const WindowMonitor = ({ caption, isPlaying, setIsPlaying, children, onClick }) => {
  const handleOnClick = () => {
    setIsPlaying(!isPlaying);
    onClick()
  };

  return (
    <figure className={styles.window}>
      <figcaption className={styles.caption}>{!!caption ? caption : "· · ·"}</figcaption>
      <div className={styles.proportionedWrap}>
        <div className={styles.content}>
          <button className={styles.mediaPlayBtn} onClick={handleOnClick} />
          { children }
        </div>
      </div>
    </figure>
  )
};

WindowMonitor.defaultProps = {
  onClick: () => {}
};