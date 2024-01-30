import React from "react";
import styles from "./styles.module.scss";
import { VIDEO, CAROUSEL } from "../MediaPlayer";
import cn from "classnames";

export const ToggleMediaType = ({ mediaType, setMediaType }) => (
  <div className={styles.toggleMediaType}>
    <button className={cn(styles.button, {[styles.inactive]: mediaType === VIDEO})} onClick={() => setMediaType(VIDEO)}>video</button>
    <button className={cn(styles.button, {[styles.inactive]: mediaType === CAROUSEL})} onClick={() => setMediaType(CAROUSEL)}>carousel</button>
  </div>
);
