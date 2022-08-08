import React, { useRef, useState } from "react";
import styled from "styled-components";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { _post } from "../redux/postslice";

const Write = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const goback = () => {
    navigate(-1);
  };

  // const [posted, setPosted] = useState({
  //   name: "",
  //   title: "",
  //   contents: "",
  // });

  // const onChangehandler = (event) => {
  //   const { name, value } = event.target;
  //   setPosted({ ...posted, [name]: value });
  // };

  const name_ref = useRef(null);
  const title_ref = useRef(null);
  const contents_ref = useRef(null);

  const postWrited = () => {
    dispatch(
      _post({
        name: name_ref.current.value,
        title: title_ref.current.value,
        contents: contents_ref.current.value,
      })
    );
    name_ref.current.value = "";
    title_ref.current.value = "";
    contents_ref.current.value = "";
    goback();
  };

  if (location.state) {
    console.log(location.state);
    name_ref.current.value = "s";
    title_ref.current.value = "s";
    contents_ref.current.value = "s";
  }

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
