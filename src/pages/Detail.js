import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { __getDetail } from "../redux/slices/detailSlice";

const Detail = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const state = useSelector((state) => state.detail.article);

  useEffect(() => {
    dispatch(__getDetail(id));
  }, [dispatch, id]);

  return (
    <>
      <div>제목: {state.title}</div>
      <div>글쓴이: {state.name}</div>
      <div>내용: {state.content}</div>
      <div>
        <button>수정</button>
        <button>삭제</button>
      </div>
    </>
  );
};

export default Detail;
