import React from "react";
import styles from "./styles.module.scss";
import cn from "classnames";
import { Link } from "react-router-dom";
import { AnimatedView } from "../AnimatedView";

export const PieceLink = ({
  title,
  subtitle,
  route,
  isTextBgColored,
  animatedSvg,
  isShimmer
}) => (
  <div className={cn(styles.pieceLink, {[styles.shimmer]: isShimmer})}>
    <h1 className={styles.title}>{title}</h1>
    <div className={styles.animatedView}>
      <AnimatedView animatedSvg={animatedSvg} />
    </div>
    <p className={styles.subtitle}>
      <span className={cn({[styles.highlighted]: isTextBgColored})}>{subtitle}</span>
    </p>
    <Link className={styles.link} to={route}>piece info</Link>
  </div>
);
