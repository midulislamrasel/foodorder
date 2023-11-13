import { banner } from "@/app/images";
import Image from "next/image";
import React from "react";
import styles from "./banner.module.css";
import DefaultButton from "@/button/DefaultButton";
import OutlineButton from "@/button/OutlineButton";

function Banner() {
  return (
    <div>
      <div>
        <Image src={banner} alt="banner" className={styles.banner} />
        <div className={styles.banner_title_and_button}>
          <div className="h1">
            <p>Best food for</p>
            <p>your taste</p>
          </div>
          <div className="h2">
            <p>Discover delectable cuisine and unforgettable moments</p>
            <p>in our welcoming, culinary haven.</p>
          </div>
          <div className={styles.banner__button}>
            <DefaultButton
              type="button"
              label="Book A Table"
              background="#AD343E"
              padding="20px 32px"
              color="#ffff"
            ></DefaultButton>
            <OutlineButton
              border="1.5px solid #2C2F24"
              type="button"
              label="Explore Menu"
              background="none"
              padding="20px 32px"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
