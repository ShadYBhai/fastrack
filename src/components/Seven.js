import React from "react";
import styled from "styled-components";

const Seven = () => {
  return (
    <Sevenpa>
      <div className="wrap">
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
      </div>
    </Sevenpa>
  );
};
const Sevenpa = styled.div`
  .wrap {
    z-index: 6;
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    margin: 0%;
    backdrop-filter: blur(5px);
  }
  @media (max-width: 840px) {
    .wrap {
      display: flex;
    }

    .wrap ul {
      display: flex;
      flex-direction: column;
      justify-content: center;
      transform: translate(-50%, -50%);
      list-style: none;
      text-align: center;
    }
    .wrap ul li {
      justify-content: center;

      display: flex;
      flex-direction: column;
      /* margin-top: 20px; */
      padding: 20px 0px;
      margin-right: 45px;
    }
    .wrap ul li:hover {
      color: #fff;
      border: 2px solid #fff;
      border-radius: 50%;
      transition: transform 0.3s ease;
    }
  }

  .wrap ul li a {
    color: #fff;
    text-decoration: none;
    margin: 0px 20px;
    font-family: "Uncut Sans";
    font-style: normal;
    font-weight: 600;
    /* font-size: 40px; */
    font-size: larger;
    line-height: 50px;
    position: relative;
    /* padding: 50px 5px; */
    transition: all 0.3s ease;
  }
  .wrap ul li a:after {
    content: "";
    position: absolute;
    height: 50px;
    width: 100%;
    border: 2px solid #fff;
    transform: scaleY(0);
    border-radius: 50%;
  }

  .wrap ul li a:after {
    transition: transform 0.3s ease;
  }

  .wrap ul li a:hover:after {
    /* transform: scaleY(1); */
  }
  .wrap ul li:hover {
    color: #fff;
    border: 2px solid #fff;
    border-radius: 50%;
    transition: transform 0.3s ease;
  }
  .wrap ul {
    display: flex;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    list-style: none;
    text-align: center;
  }
`;

export default Seven;
