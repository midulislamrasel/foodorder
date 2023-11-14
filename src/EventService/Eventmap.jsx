import React from "react";
import { event } from "./EventData";
import styles from "./event.module.css";
import Image from "next/image";

function Eventmap() {
  return (
    <div className="container">
      <div className={styles.services__section}>
        {event.map(({ id, title, images, details }) => (
          <div key={id}>
            <div>
              <Image
                src={`/event/${images}`}
                width={200}
                height={300}
                alt="serves_img"
              />
            </div>
            <p className={styles.event__title}>{title}</p>
            <p className={styles.evernt__details}>{details}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Eventmap;
