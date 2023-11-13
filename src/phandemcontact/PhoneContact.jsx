import React from "react";

function PhoneContact() {
  return (
    <div>
      <div className="Ph_and_Em_Contact">
        <svg
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2.25 3.75C2.25 2.92157 2.92157 2.25 3.75 2.25H6.20943C6.53225 2.25 6.81886 2.45657 6.92094 2.76283L8.0443 6.13291C8.16233 6.48699 8.00203 6.87398 7.6682 7.0409L5.97525 7.88737C6.80194 9.72091 8.27909 11.1981 10.1126 12.0247L10.9591 10.3318C11.126 9.99796 11.513 9.83767 11.8671 9.9557L15.2372 11.0791C15.5434 11.1811 15.75 11.4677 15.75 11.7906V14.25C15.75 15.0784 15.0784 15.75 14.25 15.75H13.5C7.2868 15.75 2.25 10.7132 2.25 4.5V3.75Z"
            stroke="white"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        <p className="phone_Email_text">(414)857 - 0107</p>
      </div>
    </div>
  );
}

export default PhoneContact;
