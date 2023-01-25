import React from "react";
import styled from "styled-components";
import rocket from "../images/rocket.png";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <>
      <Navbar />
      <Heading>Launching infinite possibilities, ONE brief at a time.</Heading>
      <Rocket src={rocket} alt="" />
      <Button>Contact Us</Button>
    </>
  );
};

const Heading = styled.nav`
  position: relative;
  width: 891px;
  height: 146px;
  margin: auto;
  /* left: 195px; */
  top: 180px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  /* font-size: 40px; */
  /* line-height: 70px; */
  /* or 175% */
  @media only screen and (max-width: 600px) {
    width: 70%;
  }
  text-align: center;
  letter-spacing: 0.05em;
  text-transform: uppercase;

  color: #ffffff;
`;

const Rocket = styled.img`
  height: 500px;
  position: relative;
  top: 200px;
  /* left: 30%; */
  @media only screen and (max-width: 600px) {
    /* z-index: -1; */
    position: relative;
    top: 250px;
    right: 50px;

    /* right: 800px; */
  }
  @media only screen and (max-width: 768px) {
    /* For mobile phones: */
    [class*="col-"] {
      width: 100%;
    }
  }
`;

const Button = styled.button`
  display: flex;
  justify-content: center;
  background: linear-gradient(90deg, #0358ac 0%, #2d2d86 100%);
  box-shadow: 0px 0px 0px rgba(0, 0, 0, 0.2);
  border-radius: 27px;
  cursor: pointer;
  width: 100px;
  padding: 13px;
  position: absolute;
  bottom: 0px;
  right: 0px;
  right: 60px;
  bottom: 20px;
  @media only screen and (max-width: 600px) {
    position: relative;
    /* bottom: auto; */
    bottom: 300px;
    left: 170px;
  }
`;

export default Home;
