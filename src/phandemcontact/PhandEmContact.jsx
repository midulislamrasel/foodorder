import React from "react";
import styles from "./phandemcontact.module.css";
import PhoneContact from "./PhoneContact";
import EmailContact from "./EmailContact";

function PhandEmContact() {
  return (
    <div>
      <div className="phone_And_Email_Secetion">
        <PhoneContact></PhoneContact>
        <EmailContact></EmailContact>
      </div>
    </div>
  );
}

export default PhandEmContact;
