import { healthyfood } from "@/app/images";
import Image from "next/image";
import React from "react";
import styles from "./foodhealthysection.module.css";
import PhandEmContact from "@/phandemcontact/PhandEmContact";
import PhoneContact from "@/phandemcontact/PhoneContact";
import EmailContact from "@/phandemcontact/EmailContact";
import LocationContact from "@/phandemcontact/LocationContact";
import OutlineButton from "@/button/OutlineButton";

function FoodHealthySection1() {
  return (
    <div className={styles.healthFood__Section}>
      <div>
        <div className={styles.healthyFood__images_one}>
          <Image src={healthyfood} alt="healthyFood" />
          <div className={styles.healthyFood__images_two}>
            <p className={styles.contact__title}>Come and visit us</p>
            <PhoneContact></PhoneContact>
            <EmailContact></EmailContact>
            <LocationContact></LocationContact>
          </div>
        </div>
      </div>
      <div>
        <p className={styles.healthy_title}>
          We provide healthy food for your family.
        </p>
        <p className={styles.health__secend__title}>
          Our story began with a vision to create a unique dining experience
          that merges fine dining, exceptional service, and a vibrant ambiance.
          Rooted in city's rich culinary culture, we aim to honor our local
          roots while infusing a global palate.
        </p>
        <p className={styles.health_para}>
          At place, we believe that dining is not just about food, but also
          about the overall experience. Our staff, renowned for their warmth and
          dedication, strives to make every visit an unforgettable event.
        </p>
        <OutlineButton
          type="button"
          background="none"
          padding="20px 32px"
          color="#414536"
          border="1.5px solid #2C2F24"
          label="More About Us"
        ></OutlineButton>
      </div>
    </div>
  );
}

export default FoodHealthySection1;
