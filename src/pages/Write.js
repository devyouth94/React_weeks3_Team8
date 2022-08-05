import React, { useRef } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { _post } from "../redux/postslice";

const Write = () => {
  const dispatch = useDispatch();

  const name_ref = useRef(null);
  const title_ref = useRef(null);
  const contents_ref = useRef(null);

  const postWrited = () => {
    dispatch(
      _post({
        name: name_ref.current.value,
        title: title_ref.current.value,
        contents: contents_ref.current.value,
        // ref가 달린것.current.value >> 실시간 값
        // 실시간값을 {}형태로 만들어서 _post의 알규먼트로 넘겨줬다.
      })
    );
    name_ref.current.value = "";
    title_ref.current.value = "";
    contents_ref.current.value = "";
    // 글 작성이 끝났으면 ref값을 빈 값으로 바꿔준다.
  };

  return (
    <>
      <WriteBox>
        <p>Write</p>
        <div>
          <input type="text" ref={name_ref} /> <br />
          <input type="text" ref={title_ref} /> <br />
          <input type="text" ref={contents_ref} /> <br />
        </div>
        <div>
          <button onClick={postWrited}>등록</button>
          <Link to="/">취소</Link>
        </div>
      </WriteBox>
    </>
  );
};

const WriteBox = styled.div`
  background-color: lightgreen;
  max-width: 80%;
  margin: auto;
`;

export default Write;
