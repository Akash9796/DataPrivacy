import React from "react";
import { BsFillShieldLockFill } from "react-icons/bs";
import { IoIosOptions } from "react-icons/io";
import { AiOutlineCloudUpload } from "react-icons/ai";
import { BiSupport, BiDollar } from "react-icons/bi";
import { GrHostMaintenance } from "react-icons/gr";
const iconStyle = (Icon) => <Icon size="3rem" color="#0f0f0f" />;

export const featureData = [
  {
    name: "Best Security",
    description:
      "We offer the best data security to our clients, which makes us stand out",
    icon: iconStyle(BsFillShieldLockFill),
    imgClass: "one",
  },
  {
    name: "Ease of Use",
    description: "Our System is easy to use and integrate",
    icon: iconStyle(IoIosOptions),
    imgClass: "two",
  },
  {
    name: "Maintainance",
    description:
      "Our caode is written in highest standard , which makes it highly sustainable",
    icon: iconStyle(GrHostMaintenance),
    imgClass: "three",
  },
  {
    name: "24/7 Support",
    description: "Our team is available all time in case you need us",
    icon: iconStyle(BiSupport),
    imgClass: "four",
  },
  {
    name: "Price",
    description: "We offer the highest value/cost ratio",
    icon: iconStyle(BiDollar),
    imgClass: "five",
  },
  {
    name: "Scaleable",
    description: "Our service are located all over the the world",
    icon: iconStyle(AiOutlineCloudUpload),
    imgClass: "six",
  },
];
