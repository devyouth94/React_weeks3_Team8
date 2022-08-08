import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import {
  _Detailpost,
  _getDetailPosted,
  _deleteDetailPosted,
} from "../redux/commentsSlice";

const Detail = (props) => {
  const state = useSelector((state) => state.comments);
  const params = useParams();
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const detailArr = state.posts;
  const getedId = 1;

  useEffect(() => {
    dispatch(_getDetailPosted(getedId));
  }, []);

  const name = "이름이름이름이름";
  const title = "제목제목제목제목";
  const contents = "내용내용내용내용";

  const title_ref = useRef(null);
  const contents_ref = useRef(null);
  const pawd_ref = useRef(null);
  const pswd_ref = useRef(null);

  const putDetail = () => {
    if (title_ref.current.value === "") {
      alert("제목을 넣어주세요");
    } else {
      dispatch(
        _Detailpost({
          title: title_ref.current.value,
          contents: contents_ref.current.value,
          pswd: pawd_ref.current.value,
          postId: params.id,
        })
      );
      title_ref.current.value = "";
      contents_ref.current.value = "";
      pawd_ref.current.value = "";
    }
  };

  const deleteComments = (value) => {
    if (value.input === "") {
      alert("비밀번호를 입력해주세요");
    } else if (value.input == value.pswd) {
      dispatch(_deleteDetailPosted(value.id));
    } else if (value.input !== value.pswd) {
      alert("비밀번호가 틀렸습니다.");
    }
  };

  const goback = () => {
    navigate(-1);
  };

  const pressEnter = (e) => {
    if (e.key === "Enter") {
      putDetail();
    }
  };

  return (
    <Bicbox>
      <div>Detail {params.id}</div>
      <div>
        <p>안녕</p>
        <div>
          <p>{name}</p>
          <p>{title}</p>
          <p>{contents}</p>
        </div>
        <button>삭제</button>
        <button onClick={goback}>뒤로가기</button>
        <Line />
      </div>
      <div>
        <input
          ref={title_ref}
          type="text"
          placeholder="이름"
          onKeyPress={pressEnter}
        />
        <input
          ref={contents_ref}
          type="text"
          placeholder="내용"
          onKeyPress={pressEnter}
        />
        <input
          ref={pawd_ref}
          type="password"
          placeholder="비밀번호"
          onKeyPress={pressEnter}
        />
        <button onClick={putDetail}>입력</button>
      </div>
      <div>
        {detailArr.length &&
          detailArr.map((value) => {
            return (
              <div key={"detailKey" + value.id}>
                <div id={"pswd" + value.id}>
                  {value.title}:: {value.contents}
                  <input placeholder="비밀번호" />
                  <button
                    onClick={(e) => {
                      deleteComments({
                        id: value.id,
                        pswd: value.pswd,
                        input: e.target.previousSibling.value,
                      });
                    }}
                  >
                    삭제
                  </button>
                </div>
              </div>
            );
          })}
      </div>
    </Bicbox>
  );
};

const Bicbox = styled.div`
  text-align: center;
  width: 80%;
  margin: auto;
`;

const Line = styled.hr`
  margin: 20px 0px 20px 0px;
`;

export default Detail;
