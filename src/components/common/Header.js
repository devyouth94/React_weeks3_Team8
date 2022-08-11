import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import logo from "../../images/logo_wt.svg"

const Header = () => {
  const navigate = useNavigate();

  return (
    <StyledHeader>
      <h1>
        <img onClick={() => navigate("/")} src={logo} alt="logo" />
      </h1>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  height: 200px;
  background-color: transparent;
  text-align: center;

  h1 {
    width: 250px;
    height: 100%;
    margin: auto;
  }

  img {
    cursor: pointer;
    margin-top: 30px;
  }
`;

export default Header;
