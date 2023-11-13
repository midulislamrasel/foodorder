import Eventmap from "@/EventService/Eventmap";
import React from "react";
import styles from "./event.module.css";
function Event() {
  return (
    <div className="container">
      <div className={styles.event__title}>
        <p> We also offer unique</p>
        <p>services for your events</p>
      </div>
      <Eventmap></Eventmap>
    </div>
  );
}

export default Event;
