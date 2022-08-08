import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { __getDetail, __updateDetail } from "../redux/slices/detailSlice";

const Detail = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const state = useSelector((state) => state.detail.article);

  const [updateArticle, setUpdateArticle] = useState("");
  const [editMode, setEditMode] = useState(false);

  useEffect(() => {
    dispatch(__getDetail(id));
  }, [dispatch, id]);

  const onClickUpdate = () => {
    setUpdateArticle(state.content);
    setEditMode(true);
  };

  const onClickSave = () => {
    dispatch(__updateDetail({ ...state, content: updateArticle }));
    setEditMode(false);
  };

  return (
    <>
      <div>제목: {state.title}</div>
      <div>글쓴이: {state.name}</div>
      <div>
        {editMode ? (
          <div>
            <textarea
              name="content"
              value={updateArticle}
              onChange={(event) => setUpdateArticle(event.target.value)}
            />
          </div>
        ) : (
          <div>내용: {state.content}</div>
        )}
      </div>

      {editMode ? (
        <div>
          <button onClick={onClickSave}>작성</button>
          <button onClick={() => setEditMode(false)}>취소</button>
        </div>
      ) : (
        <div>
          <button onClick={onClickUpdate}>수정</button>
          <button>삭제</button>
        </div>
      )}
    </>
  );
};

export default Detail;
