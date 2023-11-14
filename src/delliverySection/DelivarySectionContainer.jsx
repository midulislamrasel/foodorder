import React from "react";
import styles from "./delevaryContainer.module.css";

function DelivarySectionContainer() {
  return (
    <div>
      <div className={styles.delevary__title}>
        <p>Fastest Food</p>
        <p>Delivary In City</p>
      </div>
      <div className={styles.delevary__para}>
        <p>
          Our visual designer lets you quickly and of drag a down your way to
          customapps for both keep desktop.{" "}
        </p>
      </div>
      <div>
        <div className={styles.Delivar__svgIcon}>
          <p
            style={{
              display: "flex",
              alignItems: "center",
              columnGap: "20px",
              marginBottom: "24px",
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              width="26"
              height="26"
              class="w-6 h-6"
              fontWeight="800"
              color="#fff"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            Delivery within 30 minutes
          </p>
          <p
            style={{
              display: "flex",
              alignItems: "center",
              columnGap: "20px",
              marginBottom: "24px",
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
              width="26"
              height="26"
              color="#fff"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
              />
            </svg>
            Best Offer & Prices
          </p>
          <p
            style={{
              display: "flex",
              alignItems: "center",
              columnGap: "20px",
              marginBottom: "24px",
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
              width="26"
              height="26"
              color="#fff"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M9 14.25l6-6m4.5-3.493V21.75l-3.75-1.5-3.75 1.5-3.75-1.5-3.75 1.5V4.757c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0c1.1.128 1.907 1.077 1.907 2.185zM9.75 9h.008v.008H9.75V9zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm4.125 4.5h.008v.008h-.008V13.5zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
              />
            </svg>
            Online Services Available
          </p>
        </div>
      </div>
    </div>
  );
}

export default DelivarySectionContainer;
