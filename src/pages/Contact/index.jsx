import React from "react";
import styles from "./styles.module.scss";

const Contact = () => (
  <address className={styles.contact}>
    <div>Nate De La Cruz</div>
    <div>NYC Based</div>
    <a href="mailto:64bit.polygon@gmail.com">64bit.polygon@gmail.com</a>
    <a href="https://github.com/64bit-polygon/links" target="_blank">github.com/64bit-polygon</a>
    <div>😘</div>
  </address>
);

export default Contact;