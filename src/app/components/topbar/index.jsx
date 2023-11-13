import SocilIcon from "@/socilicon";
import React from "react";
import styles from "./topbar.module.css";
import PhandEmContact from "@/phandemcontact/PhandEmContact";

function Topbar() {
  return (
    <div className={styles.topbar}>
      <div className="container">
        <div className={styles.phoneAndEmail}>
          <PhandEmContact></PhandEmContact>
          <SocilIcon></SocilIcon>
        </div>
      </div>
    </div>
  );
}

export default Topbar;
