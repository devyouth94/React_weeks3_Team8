import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Header = () => {
  const navigate = useNavigate();

  return (
    <StyledHeader>
      <h1 onClick={() => navigate("/")}>항해 대나무숲</h1>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  cursor: pointer;
  height: 100px;
  line-height: 100px;
  background-color: transparent;
  text-align: center;
  font-size: 30px;
  margin-bottom: 20px;

  h1 {
    font-weight: 600;
  }
`;

export default Header;
