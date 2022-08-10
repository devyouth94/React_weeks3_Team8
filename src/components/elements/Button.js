import React from "react";
import styled from "styled-components";
import "../../fonts/fonts.css"

const Button = (props) => {
  return (
    <StyledGlobalButton bgcolor={props.bgcolor} textcolor={props.textcolor}>
      {props.children}
    </StyledGlobalButton>
  );
};

const StyledGlobalButton = styled.button`
font-family: AppleSDGothicNeoSB;
cursor: pointer;
background-color: ${(props) => props.bgcolor};
color: ${(props) => props.textcolor};
height: 34px;
padding: 10px;
border-radius: 17px;
border: none;
`;

export default Button;