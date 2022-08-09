import React, { useState } from "react";
import { useDispatch } from "react-redux";
import "./write.css";
import { _postArticle } from "../redux/slices/postSlice";
import { useNavigate } from "react-router-dom";

const Write = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [write, setWrite] = useState({
    id: 0,
    name: "",
    title: "",
    content: "",
  });

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setWrite({ ...write, [name]: value });
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    dispatch(_postArticle(write));
    navigate("/");
  };

  return (
    <form onSubmit={onSubmitHandler} className="warp">
      <div className="inputArea">
        <div className="nameInput">
          <label htmlFor="">이름</label>
          <input
            type="text"
            name="name"
            value={write.name}
            placeholder="이름"
            onChange={onChangeHandler}
          />
        </div>
        <div className="titleInput">
          <label htmlFor="">제목</label>
          <input
            className="writeTitle"
            type="text"
            name="title"
            value={write.title}
            placeholder="제목"
            onChange={onChangeHandler}
          />
        </div>
      </div>

      <div className="writeBox">
        <textarea
          name="content"
          value={write.content}
          cols="30"
          rows="10"
          onChange={onChangeHandler}
        />
      </div>

      {/* <div className="submitBox"> */}
      <input value="취소" type="button" />
      <input value="작성" type="submit" />
      {/* </div> */}
    </form>
  );
};

export default Write;
