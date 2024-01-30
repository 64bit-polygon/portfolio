import React from "react";
import styles from "./styles.module.scss";

export const AuthorRoles = ({ isDeveloper, isDesigner }) => (
  <div className={styles.authorRoles}>
    {isDeveloper && <span>developer</span>}
    {isDesigner && <span>designer</span>}
  </div>
);
