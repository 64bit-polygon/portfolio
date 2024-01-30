import React from "react";
import styles from "./styles.module.scss";

export const AnimatedView = ({ animatedSvg }) => {
  const src = animatedSvg && `/images/animatedSvgs/${animatedSvg}`;
  return (
    <figure className={styles.window}>
      <div className={styles.viewPort}>
        <div className={styles.content}>
          {src && <embed type="image/svg+xml" src={src} />}
        </div>
      </div>
    </figure>
  )
};
