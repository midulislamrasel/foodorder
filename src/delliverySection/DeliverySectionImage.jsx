import { Delivir, Delivir2, Delivir3 } from "@/app/images";
import Image from "next/image";
import React from "react";

function DeliverySectionImage() {
  return (
    <div>
      <div style={{ display: "flex", gap: "20px" }}>
        <Image src={Delivir} alt="delivary Image" />
        <div
          style={{
            display: "flex",
            flexDirection: "column-reverse",
            rowGap: "20px",
            marginTop: "30px",
          }}
        >
          <Image src={Delivir2} alt="Delivary Image2" />
          <Image src={Delivir3} alt="Delivary Image3" />
        </div>
      </div>
    </div>
  );
}

export default DeliverySectionImage;
