import Image from "next/image";

const { Icon1, Icon2, Icon3, Icon } = require("@/app/images");

export const data = [
  {
    id: 1,
    Image: <Image src={Icon} alt="icon" />,
    menu: "Breakfast",
    menuDetails:
      "In the new era of technology we look in the future with certainty and pride for our life.",
  },
  {
    id: 1,
    Image: <Image src={Icon} alt="icon" />,
    menu: "Breakfast",
    menuDetails:
      "In the new era of technology we look in the future with certainty and pride for our life.",
  },
  {
    id: 1,
    Image: <Image src={Icon} alt="icon" />,
    menu: "Breakfast",
    menuDetails:
      "In the new era of technology we look in the future with certainty and pride for our life.",
  },
  {
    id: 1,
    Image: <Image src={Icon} alt="icon" width="100" height="100" />,
    menu: "Breakfast",
    menuDetails:
      "In the new era of technology we look in the future with certainty and pride for our life.",
  },
];
