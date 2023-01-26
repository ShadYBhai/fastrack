import React, { useEffect, useState } from "react";
import styled from "styled-components";
import logo from "../images/Logo.png";
import { HiMenuAlt2 } from "react-icons/hi";
const Navbar = () => {
  const [active, setActive] = useState(false);
  const handleClick = () => {
    setActive(!active);
  };
  // useEffect(() => {
  //   handleClick();
  // }, []);

  console.log(active);

  return (
    <StyledNav>
      <img src={logo} className="logo" />
      <ul className="ul">
        <li className="li">Vigor Space</li>
        <li className="li">Vigor Smart Studio </li>
        <li className="li">V-Store</li>
        <li className="menu-btn" onClick={handleClick}>
          <i className="fas fa-bars icon" />
        </li>
      </ul>
      {active == true ? (
        <>
          <div className="wrapper">
            <i
              class="fa-solid fa-xmark cross"
              onClick={() => {
                setActive(false);
              }}
            ></i>
            <ul className="menu">
              <li>
                <a>About </a>
              </li>
              <li>
                <a>Services</a>
              </li>
              <li>
                <a> Work</a>
              </li>
              <li>
                <a> Contact</a>
              </li>
            </ul>
            <Button>Get in Touch</Button>
            <i class="fa-brands fa-facebook social sicon"></i>
            <i class="fa-brands fa-instagram social sicon "></i>
            <i class="fa-brands fa-linkedin social sicon "></i>
            <i class="fa-brands fa-twitter social sicon "></i>
          </div>
        </>
      ) : (
        <></>
      )}
    </StyledNav>
  );
};

const StyledNav = styled.div`
  .cross {
    font-size: 40px;
    color: #fff;
    position: absolute;
    top: 0;
    right: 0;
    right: 40px;
    top: 40px;
    cursor: pointer;
  }

  display: flex;
  justify-content: space-between;

  img {
    position: relative;
    left: 72px;
    top: 20px;
    height: 53px;
    width: 98px;
  }
  .ul {
    display: flex;
    list-style: none;
    color: white;
    position: relative;
    top: 20px;
    li {
      cursor: pointer;
      margin-right: 2.5rem;
    }
  }
  .wrapper {
    z-index: 3;
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    margin: 0%;
  }
  @media (max-width: 840px) {
    .wrapper {
      display: flex;
    }

    .wrapper ul {
      display: flex;
      flex-direction: column;
      justify-content: center;
      transform: translate(-50%, -50%);
      list-style: none;
      text-align: center;
    }
    .wrapper ul li {
      justify-content: center;

      display: flex;
      flex-direction: column;
      /* margin-top: 20px; */
      padding: 20px 0px;
      margin-right: 45px;
    }
    .wrapper ul li:hover {
      color: #fff;
      border: 2px solid #fff;
      border-radius: 50%;
      transition: transform 0.3s ease;
    }
  }

  .wrapper ul li a {
    color: #fff;
    text-decoration: none;
    margin: 0px 20px;
    font-family: "Uncut Sans";
    font-style: normal;
    font-weight: 600;
    font-size: 40px;
    line-height: 50px;
    position: relative;
    /* padding: 50px 5px; */
    transition: all 0.3s ease;
  }
  .wrapper ul li a:after {
    content: "";
    position: absolute;
    height: 50px;
    width: 100%;
    border: 2px solid #fff;
    transform: scaleY(0);
    border-radius: 50%;
  }

  .wrapper ul li a:after {
    transition: transform 0.3s ease;
  }

  .wrapper ul li a:hover:after {
    /* transform: scaleY(1); */
  }
  .wrapper ul li:hover {
    color: #fff;
    border: 2px solid #fff;
    border-radius: 50%;
    transition: transform 0.3s ease;
  }
  .wrapper ul {
    display: flex;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    list-style: none;
    text-align: center;
  }
  @media (max-width: 767px) {
    .li {
      display: none;
    }
    .logo {
      position: relative;
      left: 0px;
      margin-left: 20px;
    }
  }
  .social {
    padding: 20px;
    position: relative;
    color: white;
    bottom: 0%;
    top: 80%;
    left: 78%;
    font-size: 35px;
  }
  @media only screen and (max-width: 800px) {
    .social {
      display: none;
    }
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
  left: 0;
  left: 70px;
  right: 80px;
  bottom: 75px;
  width: max-content;
  @media only screen and (max-width: 600px) {
    position: relative;
    /* bottom: auto; */
    /* bottom: 300px; */
    left: 0px;
    bottom: 70px;
    margin: auto;
  }
  @media only screen and (max-width: 800px) {
    display: none;
  }
`;

export default Navbar;
