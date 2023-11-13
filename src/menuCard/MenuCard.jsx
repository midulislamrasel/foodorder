import React from "react";
import { data } from "./data";
import Image from "next/image";
import styles from "./menucard.module.css";
import OutlineButton from "@/button/OutlineButton";
import DefaultButton from "@/button/DefaultButton";

function MenuCard() {
  return (
    <div className="container">
      <div className={styles.menu__section}>
        <p className={styles.menu__title}>Browse Our Menu</p>
        <div className={styles.menu_card}>
          {data.map(({ id, Image, menu, menuDetails }) => (
            <div className="border" key={id}>
              <div>{Image}</div>
              <div className="mtb-30">
                <p className="headline_h3 mb-15">{menu}</p>
                <p>{menuDetails}</p>
              </div>
              <div className={styles.menu__card__button}>
                <OutlineButton
                  label="Explore Menu"
                  type="button"
                  background="none"
                  color="#AD343E"
                  border="#AD343E"
                  borderRadius="none"
                ></OutlineButton>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MenuCard;
