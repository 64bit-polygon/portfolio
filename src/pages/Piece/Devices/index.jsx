import React from "react";
import styles from "./styles.module.scss";
import cn from "classnames";

export const Devices = ({ hasDesktop, hasMobile, hasTablet }) => (
  <div className={styles.devices}>
    {hasDesktop && <div className={cn(styles.icon, styles.desktopIcon)} />}
    {hasTablet && <div className={cn(styles.icon, styles.tabletIcon)} />}
    {hasMobile && <div className={cn(styles.icon, styles.mobileIcon)} />}
  </div>
);
