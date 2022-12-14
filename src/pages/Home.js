import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/elements/Button";
import styled from "styled-components";
import List from "../components/feature/List";

const Home = () => {
  const navigate = useNavigate();
  console.log(1);

  return (
    <>
      <StyledWrapButton>
        <Button onClick={() => navigate("/write")} width="300px" ftsize="20px" textcolor="white" >글쓰기</Button>
      </StyledWrapButton>
      <List />
    </>
  );
};

const StyledWrapButton = styled.div`
  width: 70%;
  margin: 0 auto;
  text-align: center;
  margin-bottom: 30px;
  height: 50px;
`;

export default Home;
