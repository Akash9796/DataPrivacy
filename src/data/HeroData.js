import img1 from "../assets/svg/Deal.svg";
import img2 from "../assets/svg/Connection.svg";
import img3 from "../assets/svg/ChartUp.svg";

export const heroOne = {
  reverse: true,
  inverse: true,
  topLine: {
    text: "Founded in 2012",
  },
  headLine: "We've been in bussiness for 9 years",
  description:
    "We have designed and implemented the best cloud security solutions",
  buttonLabel: "Find MOre",
  linkTo: "/",
  imgStart: "start",
  img: `${img1}`,
  start: "true",
};
export const heroTwo = {
  reverse: false,
  inverse: false,
  topLine: {
    text: "Designed & Developed",
  },
  headLine: "The best practices",
  description: "Our clients have had the best experience working with us",
  buttonLabel: "View Project",
  linkTo: "/more",
  imgStart: "start",
  img: `${img2}`,
  start: "true",
};
export const heroThree = {
  reverse: true,
  inverse: true,
  topLine: {
    text: "Highly reputed brand",
  },
  headLine: "Why us?",
  description:
    "Our 9 year experience have allowed us to use the most innovation technologies and methodologies",
  buttonLabel: "View Project",
  linkTo: "/download",
  imgStart: "",
  img: `${img3}`,
  start: "true",
};
