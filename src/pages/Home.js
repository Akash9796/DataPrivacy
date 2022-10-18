import React from "react";
import Hero from "../Components/Hero";
import Features from "../Components/Features";
import Content from "../Components/Content";
import Carousel from "../Components/Carousel";
import { heroOne, heroTwo, heroThree } from "../data/HeroData";

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <Content {...heroOne} />
      <Content {...heroTwo} />
      <Content {...heroThree} />
      <Carousel />
    </>
  );
}
