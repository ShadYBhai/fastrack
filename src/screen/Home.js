import React from "react";
import styled from "styled-components";
import rocket from "../images/rocket.png";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <>
      <Navbar />
      <Heading>
        Launching infinite possibilities, <br /> ONE brief at a time.
      </Heading>
      <Rocket src={rocket} alt="" className="rocket" />
      <Button>Contact Us</Button>
    </>
  );
};

const Heading = styled.nav`
  position: relative;
  /* width: 891px; */
  height: 146px;
  margin: auto;
  /* left: 195px; */
  top: 100px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 40px;
  line-height: 70px;
  @media only screen and (max-width: 600px) {
    box-sizing: border-box;

    position: absolute;
    /* width: 155px; */
    height: 29px;
    /* left: 41px; */
    top: 184px;
    margin: auto;
    font-family: "Inter";
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 29px;
    text-align: center;
    letter-spacing: 0.05em;
    text-transform: uppercase;
    color: #fafafa;
  }
  text-align: center;
  letter-spacing: 0.05em;
  text-transform: uppercase;

  color: #ffffff;
`;

const Rocket = styled.img`
  height: 500px;

  position: relative;
  top: 80px;
  left: 34.5%;
  @media only screen and (max-width: 600px) {
    z-index: 1;
    position: relative;
    top: 250px;
    right: 50px;

    /* right: 800px; */
  }
  @media only screen and (max-width: 800px) {
    /* For mobile phones: */
    position: relative;
    display: flex;
    margin: auto;

    height: 350px;
    left: 30px;
  }
  @media only screen and (max-width: 896px) {
    /* For mobile phones: */
    position: relative;
    display: flex;
    top: 280px;
    margin: auto;
    left: 0px;
    height: 300px;
  }
`;

const Button = styled.button`
  display: flex;
  justify-content: center;
  background: linear-gradient(90deg, #0358ac 0%, #2d2d86 100%);
  box-shadow: 0px 0px 0px rgba(0, 0, 0, 1);
  border-radius: 27px;
  border: none;
  cursor: pointer;
  width: 150px;
  padding: 13px;
  position: absolute;
  bottom: 0px;
  right: 0px;
  right: 80px;
  bottom: 40px;
  width: max-content;
  @media only screen and (max-width: 600px) {
    position: relative;
    /* bottom: auto; */
    /* bottom: 300px; */
    left: 0px;
    bottom: 70px;
    margin: auto;
  }
  @media only screen and (max-width: 896px) {
  }
`;

export default Home;
