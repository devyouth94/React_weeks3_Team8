import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <TopHeader>
      <Link to="/">항해 대나무숲</Link>
    </TopHeader>
  );
};

const TopHeader = styled.div`
  background-color: lightgray;
  text-align: center;
  width: 80%;
  margin: auto;
  height: 80px;
`;

export default Header;
