// import NavLink from "../link";
import React from "react";
import { data } from "./data";
import styles from "./nav.module.css";
function Menu() {
  return (
    <nav className={styles.menu}>
      <ul>
        {data.map(({ id, label, href }) => (
          <li key={id}>
            <a href={href}>{label}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Menu;
