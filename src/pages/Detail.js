import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  __deleteDetail,
  __getDetail,
  __updateDetail,
} from "../redux/slices/detailSlice";

const Detail = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
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
    if (updateArticle.trim().length === 0) {
      alert("내용이 비어있습니다.");
    } else {
      dispatch(__updateDetail({ ...state, content: updateArticle }));
      setEditMode(false);
    }
  };

  const onClickDelete = () => {
    const confirm = window.confirm("정말 삭제하시겠습니까?");
    if (confirm) {
      dispatch(__deleteDetail(id));
      navigate("/");
    }
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
          <button onClick={onClickDelete}>삭제</button>
        </div>
      )}
    </>
  );
};

export default Detail;
