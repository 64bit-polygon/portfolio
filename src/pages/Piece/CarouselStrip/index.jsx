import React, { useState } from "react";
import styles from "./styles.module.scss";
import cn from "classnames";

export const CarouselStrip = ({ imgUrls, activeIndex }) => {
  const style = {
    transform: `translateX(-${activeIndex * 100}%)`
  }

  return (
    <div className={styles.strip} style={style}>
      <div className={styles.innerWrap} style={{ width: `${imgUrls.length * 100}%` }}>
      {imgUrls.map((url, index) => (
        <img src={url} className={styles.image} key={`${index}${url}`} />
      ))}
      </div>
    </div>
  )
};
