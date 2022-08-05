import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Home = () => {
  const state = useSelector((state) => state);
  const myValue = state.posts.posts;

  return (
    <>
      <HomeBox>
        <p>Home</p>
        <Link to="write">게시글 작성</Link>
      </HomeBox>
    </>
  );
};

const HomeBox = styled.div`
  background-color: lightgreen;
  max-width: 80%;
  margin: auto;
`;

export default Home;
