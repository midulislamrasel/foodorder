import DelivarySectionContainer from "@/delliverySection/DelivarySectionContainer";
import DeliverySectionImage from "@/delliverySection/DeliverySectionImage";
import React from "react";

function Delivary() {
  return (
    <div style={{ backgroundColor: "#f9f9f7", padding: "120px 0px" }}>
      <div className="container">
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
    </div>
  );
}

export default Delivary;
