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
  // console.log(state);

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

  const putDetail = () => {
    dispatch(
      _Detailpost({
        title: title_ref.current.value,
        contents: contents_ref.current.value,
        postId: params.id,
      })
    );
    title_ref.current.value = "";
    contents_ref.current.value = "";
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
        <input ref={title_ref} onKeyPress={pressEnter} />
        <input ref={contents_ref} onKeyPress={pressEnter} />
        <button onClick={putDetail}>입력</button>
      </div>
      <div>
        {detailArr.length &&
          detailArr.map((value) => {
            return (
              <div key={"detailKey" + value.id}>
                <div>
                  {value.title}:: {value.contents}
                  <DeleteBtn
                    onClick={() => {
                      dispatch(_deleteDetailPosted(value.id));
                    }}
                  >
                    삭제
                  </DeleteBtn>
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

const DeleteBtn = styled.button`
  margin-left: 20px;
`;

export default Detail;
