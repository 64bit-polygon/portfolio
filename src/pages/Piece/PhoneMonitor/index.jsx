import React from "react";
import styles from "./styles.module.scss";

export const PhoneMonitor = ({ isPlaying, setIsPlaying, children, onClick }) => {
  const handleOnClick = () => {
    setIsPlaying(!isPlaying);
    onClick()
  };

  return (
    <figure className={styles.phone}>
      <div className={styles.content}>
        <button className={styles.mediaPlayBtn} onClick={handleOnClick} />
        { children }
      </div>
    </figure>
  )
};

PhoneMonitor.defaultProps = {
  onClick: () => {}
};