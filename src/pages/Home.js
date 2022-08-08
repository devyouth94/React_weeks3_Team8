import React, { useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { _getPosted } from "../redux/postslice";

const Home = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  const posts = state.posts.posts;

  useEffect(() => {
    dispatch(_getPosted());
  }, []);

  return (
    <>
      <HomeBox>
        <p>Home</p>
        <Link to="write">게시글 작성</Link>
        <hr />
        <div>
          {posts.length &&
            posts.map((value) => {
              return (
                <Link
                  key={`linkKey` + value.id}
                  to={`/detail/${value.id}`}
                  state={{
                    name: value.name,
                    contents: value.contents,
                    title: value.title,
                  }}
                >
                  <div key={`key` + value.id}>
                    글쓴이: {value.name} {value.title}: {value.contents}
                  </div>
                </Link>
              );
            })}
        </div>
      </HomeBox>
    </>
  );
};

const HomeBox = styled.div`
  background-color: lightgreen;
  max-width: 80%;
  margin: auto;
  button {
    text-decoration: none;
  }
`;

// const Todetail = styled.Link`
//   button {
//     text-decoration: none;
//   }
// `;

export default Home;
