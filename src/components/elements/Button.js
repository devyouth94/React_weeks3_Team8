import React from "react";
import styled from "styled-components";
import "../../fonts/fonts.css";

const Button = (props) => {
  return (
    <StyledGlobalButton
      onClick={props.onClick}
      bgcolor={props.bgcolor}
      textcolor={props.textcolor}
      width={props.width}
      marginLeft={props.marginLeft}
    >
      {props.children}
    </StyledGlobalButton>
  );
};

const StyledGlobalButton = styled.button`
  font-family: AppleSDGothicNeoSB;
  height: 100%;
  line-height: 0;
  cursor: pointer;
  background-color: ${(props) => props.bgcolor};
  color: ${(props) => props.textcolor};
  width: ${(props) => props.width};
  margin-left: ${(props) => props.marginLeft};

  padding: 10px;
  background: rgba(41, 41, 41, 0.35);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(8.5px);
  -webkit-backdrop-filter: blur(8.5px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
`;

export default Button;
