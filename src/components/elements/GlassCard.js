import React from "react";
import styled from "styled-components";

const GlassCard = (props) => {
  return <StyledGlassCard onClick={props.onClick}>{props.children}</StyledGlassCard>;
};

const StyledGlassCard = styled.div`
  cursor: pointer;
  font-size: 30px;
  text-align: center;
  width: 300px;
  height: 300px;
  padding: 20px;
  word-break: break-all;

  background: rgba(41, 41, 41, 0.35);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(8.5px);
  -webkit-backdrop-filter: blur(8.5px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);

  h2 {
    font-weight: 600;
  }
`;

export default GlassCard;
