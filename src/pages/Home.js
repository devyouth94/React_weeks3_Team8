import React, { useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { _getPosted } from "../redux/postslice";

const Home = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  // 이게 있어야 state값에 넣어줄수 있다.

  useEffect(() => {
    dispatch(_getPosted());
  }, []);
  // _getPosted가 바로 실행된다.

  const posts = state.posts.posts;

  return (
    <>
      <HomeBox>
        <p>Home</p>
        <Link to="write">게시글 작성</Link>
        <hr />
        <div>
          {posts &&
            posts.map((value) => {
              return (
                <div key={value.id}>
                  글쓴이: {value.name} {value.title}: {value.contents}
                  <Link
                    to={`/detail/${value.id}`}
                    state={{
                      name: value.name,
                      contents: value.contents,
                      title: value.title,
                    }}
                  >
                    상세페이지
                  </Link>
                  {/* Link에서 원하는 자료를 보내고 싶을때는 state={{}}를 사용해서 보내면 된다. */}
                </div>
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
`;

export default Home;
