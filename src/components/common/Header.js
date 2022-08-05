import React from "react";
import styled from "styled-components";

const Header = () => {
  return <TopHeader>항해 대나무숲</TopHeader>;
};

const TopHeader = styled.div`
  background-color: lightgray;
  text-align: center;
  height: 80px;
`;

export default Header;
