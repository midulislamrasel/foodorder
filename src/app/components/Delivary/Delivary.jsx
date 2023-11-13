import DelivarySectionContainer from "@/delliverySection/DelivarySectionContainer";
import DeliverySectionImage from "@/delliverySection/DeliverySectionImage";
import React from "react";

function Delivary() {
  return (
    <div>
      <div
        style={{
          display: "flex",
          columnGap: "90px",
          alignItems: "center",
        }}
      >
        <DeliverySectionImage></DeliverySectionImage>
        <DelivarySectionContainer></DelivarySectionContainer>
      </div>
    </div>
  );
}

export default Delivary;
