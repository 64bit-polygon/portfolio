import React, { useState } from "react";
import styles from "./styles.module.scss";
import { Nav } from "../Nav";
import Contact from "../../pages/Contact";
import cn from "classnames";

export const SiteWrap = ({ children }) => {
  const [isContactVisible, toggleContact] = useState();
  const [isPageNonscrollable, setPageNonscrollable] = useState();
  
  const handleAnimationEnd = () => {
    setPageNonscrollable(isContactVisible);
  }
  const classes = cn(styles.siteWrap, {
    [styles.showContact]: isContactVisible,
    [styles.hideContact]: isContactVisible === false,
    [styles.isPageNonscrollable]: isPageNonscrollable
  });

  return (
    <div className={classes}>
      <Nav isContactVisible={isContactVisible} toggleContact={toggleContact} />
      <main className={styles.main} onAnimationEnd={handleAnimationEnd}>{children}</main>
      <aside className={styles.contact}>
        <Contact />
      </aside>
    </div>
  );
};
