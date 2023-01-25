import React from "react";
import styled from "styled-components";
import logo from "../images/Logo.png";

const Navbar = () => {
  return (
    <StyledNav>
      <img src={logo} className="logo" />
      <ul>
        <li>Vigor Space</li>
        <li>Vigor Smart Studio </li>
        <li>V-Store</li>
      </ul>

      {/* <SmallScreenDiv>
        <div class="content">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
      </SmallScreenDiv> */}
    </StyledNav>
  );
};

const StyledNav = styled.div`
  display: flex;
  justify-content: space-between;
  img {
    position: relative;
    left: 72px;
    top: 40px;
    height: 53px;
    width: 98px;
  }
  ul {
    display: flex;
    list-style: none;
    color: white;
    position: relative;
    top: 54px;
  }
  li {
    margin-right: 2rem;
  }
`;

export default Navbar;
