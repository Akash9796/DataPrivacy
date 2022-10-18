import React from "react";
import { Link } from "react-router-dom";
import { Button, MainHeading, Container } from "../globalStyles";
import styled from "styled-components";
import backVid from "../assets/hero.mp4";

export default function Hero() {
  return (
    <HeroSection>
      <HeroVideo src={backVid} autoPlay muted loop />
      <Container>
        <MainHeading>Your Data is Secure with us</MainHeading>
        <HeroText>
          We provide the best security systems for clients all over the world
        </HeroText>
        <ButtonWrapper>
          <Link to="signup" style={{ textDecoration: "none" }}>
            <Button>Get Started</Button>
          </Link>
          <HeroButton>Find More</HeroButton>
        </ButtonWrapper>
      </Container>
    </HeroSection>
  );
}

const HeroSection = styled.section`
  height: 100vh;
  background-position: center;
  background-size: cover;
  padding-top: clamp(70px, 25vh, 220px);
  box-shadow: inset 0 0 0 1000px rgba(0, 0, 0, 0.2);
`;
const HeroVideo = styled.video`
  object-fit: cover;
  width: 100%;
  height: 100%;
  background: linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.1));
  top: 0;
  position: absolute;
  z-index: -1;
`;
const HeroText = styled.p`
  margin-bottom: 35px;
  font-size: clamp(0.9rem, 1.5vw, 1.3rem);
  line-height: 24px;
  text-align: 24px;
  text-align: center;
  letter-spacing: 2px;
  color: #fff;
`;
const ButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-flow: wrap;
  gap: 0.5rem;
  text-decoration: none;

  @media screen and (max-width: 960px) {
    flex-direction: column;
    align-items: center;
  }
`;
const HeroButton = styled(Button)`
  background: white;
  color: black;
  &:before {
    background: #fff;
    height: 500%;
  }
  &:hover:before {
    height: 0%;
  }
  &:hover {
    color: white;
    background: black;
  }
`;
