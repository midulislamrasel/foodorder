import React from "react";

const OutlineButton = ({
  type,
  label,
  background = "#4CAF4F",
  padding,
  color,
  border,
  borderRadius = "118px",
  fontWeight = "700",
}) => {
  const ButtonStyle = {
    textAlign: "center",
    textTransform: "capitalize",
    fontFamily: "DM Sans",
    fontSize: "16px",
    fontStyle: "normal",
    fontWeight: fontWeight,
    lineHeight: "24px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "10px",
    fontWeight: fontWeight,
    borderRadius: borderRadius,
    background: background,
    color: color,
    padding: padding,
    border: border,
  };

  return (
    <>
      <button type={type} style={ButtonStyle} color={color} border={border}>
        {label}
      </button>
    </>
  );
};

export default OutlineButton;
