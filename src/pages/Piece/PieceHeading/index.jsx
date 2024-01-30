import React from "react";
import styles from "./styles.module.scss";
import cn from "classnames";

export const PieceHeading = ({ children, externalLink }) => {
  const hasLink = !!externalLink;
  const titleClass = cn({[styles.hasLink]: hasLink});
  return (
    <h1 className={styles.heading}>
      <span className={titleClass}>{children}</span>
      { hasLink && <a href={externalLink} target="_blank" className={styles.link}>site link</a> }
    </h1>
  )
};
