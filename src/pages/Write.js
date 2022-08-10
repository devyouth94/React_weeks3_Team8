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
          <input
            type="text"
            name="name"
            value={write.name}
            placeholder="이름"
            onChange={onChangeHandler}
          />
        </div>
        <div className="titleInput">
          <input
            className="writeTitle"
            type="text"
            name="title"
            value={write.title}
            placeholder="제목"
            onChange={onChangeHandler}
          />
        </div>
          <input className="cancle" value="✖" type="button" />
          <input className="completion" value="✔" type="submit" />
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

      {/* </div> */}
    </form>
  );
};

export default Write;
