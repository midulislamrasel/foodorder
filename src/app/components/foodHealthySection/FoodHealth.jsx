import React from "react";
import styles from "./foodHealth.module.css";
import FoodHealthySection1 from "@/foodHealthySection1/FoodHealthySection1";
function FoodHealth() {
  return (
    <div className={styles.foodHealth__Section}>
      <div className="container">
        <FoodHealthySection1></FoodHealthySection1>
      </div>
    </div>
  );
}

export default FoodHealth;
