import React from "react";
import { useNavigate } from "react-router-dom";
import GlassCard from "../components/elements/GlassCard";
import Button from "../components/elements/Button";
import styled from "styled-components";

const Home = () => {
  const navigate = useNavigate();
  console.log(1);

  return (
    <div className="mainWarp">
      <StyledWrapButton>
        <Button onClick={() => navigate("/write")}>Write</Button>
      </StyledWrapButton>
      <GlassCard></GlassCard>
    </div>
  );
};

const StyledWrapButton = styled.div`
  width: 70%;
  margin: 0 auto;
  text-align: center;
  margin-bottom: 30px;
`;

export default Home;
