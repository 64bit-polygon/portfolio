import React, { useState, useEffect } from "react";
import styles from "./styles.module.scss";
import cn from "classnames";
import {
  useLocation,
  Link,
  useNavigationType
} from "react-router-dom";
import { useRecoilValue } from "recoil";
import { pieceSelector } from "../../state/selectors";

export const Nav = ({ isContactVisible, toggleContact }) => {
  const [isNavVisible, toggleNav] = useState();
  const route = useLocation().pathname.substring(1);
  const navigation = useNavigationType();

  const isSinglePage = !!route.length;
  const piece = useRecoilValue(pieceSelector(route));
  const linkClasses = cn(styles.link, {[styles.inactive]: !isContactVisible});
  const contactBtnClasses = cn(styles.link, {[styles.inactive]: isContactVisible});
  const showContact = () => toggleContact(true);
  const hideContact = () => toggleContact(false);
  const showNav = () => toggleNav(true);
  const hideNav = () => toggleNav(false);

  useEffect(() => {
    if(navigation === "POP" && isContactVisible) {
      hideContact();
    }
  }, [navigation, route]);
  const pieceTitle = piece?.title ?? "";
  return (
    <div className={styles.navWrap}>
      <nav className={cn(styles.nav, {[styles.visible]: isNavVisible})}>
        <div className={styles.links}>
          <button className={cn(styles.hideNav, styles.hideText)} onClick={hideNav}>hide nav</button>
          {isSinglePage ? (
          <>
            <Link className={styles.link} to="/" onClick={hideContact}>work</Link>
            <button className={contactBtnClasses} onClick={showContact}>contact</button>
            <button className={linkClasses} onClick={hideContact}>{pieceTitle}</button>
          </>
          ) : (
          <>
            <button className={linkClasses} onClick={hideContact}>work</button>
            <button className={contactBtnClasses} onClick={showContact}>contact</button>
          </>
          )}
        </div>
        <a className={styles.link} href="https://github.com/64bit-polygon/links" target="_blank">github</a>
      </nav>
      <button className={cn(styles.showNav, styles.hideText, {[styles.visible]: !isNavVisible})} onClick={showNav}>show nav</button>
    </div>
  );
};
