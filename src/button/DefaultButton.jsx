import React from "react";

const DefaultButton = ({
  type,
  label,
  background = "#4CAF4F",
  padding,
  color,
}) => {
  const ButtonStyle = {
    textAlign: "center",
    textTransform: "capitalize",
    fontFamily: "DM Sans",
    fontSize: "16px",
    fontStyle: "normal",
    fontWeight: "500",
    lineHeight: "24px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "10px",
    borderRadius: "118px",
    background: background,
    color: color,
    padding: padding,
  };

  return (
    <>
      <button type={type} style={ButtonStyle} color={color}>
        {label}
      </button>
    </>
  );
};

export default DefaultButton;
