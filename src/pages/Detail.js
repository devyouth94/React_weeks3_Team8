import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { __deleteDetail, __getDetail, __updateDetail } from "../redux/slices/detailSlice";
import Detailcmts from "./Detailcmts";
import { server_url } from "../redux/slices/index";

const Detail = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const state = useSelector((state) => state.detail.article);
  const error = useSelector((state) => state.detail.error);

  const [updateArticle, setUpdateArticle] = useState(""); //수정된 value값을 관리할 state
  const [editMode, setEditMode] = useState(false); // 조회, 수정 시 불리언 값에 따라 UI를 변경시켜주는 state

  // 렌더링시 게시글 GET 요청
  useEffect(() => {
    dispatch(__getDetail(id));
  }, [dispatch, id]);

  // 수정 버튼 눌렀을 시 작동하는 함수
  const onClickUpdate = () => {
    setUpdateArticle(state.content); // store에 저장 되어있는 content값으로 상태 업데이트
    setEditMode(true); // true면 수정 시에 필요한 UI가 나타난다
  };

  // 수정 완료 후 작성 버튼 눌렀을 시 작동하는 함수
  // if...else 문을 사용하여 수정 시 내용이 비어있으면 모달창을 뜨게 한다
  const onClickSave = () => {
    if (updateArticle.trim().length === 0) {
      alert("내용이 비어있습니다.");
    } else {
      dispatch(__updateDetail({ ...state, content: updateArticle })); // 수정된 content값을 payload로 보내준다
      setEditMode(false); // false면 수정 시에 필요한 UI가 사라진다
    }
  };
  
    // 모든 댓글을 삭제해주는 함수
  const deleteAllCmts = () => {
    cmtsstate.map((value) => {
      axios.delete(`${server_url}/comments/${value.id}`);
    });
  };

  // 삭제 버튼 눌렀을 시 작동하는 함수
  const onClickDelete = () => {
    const confirm = window.confirm("정말 삭제하시겠습니까?"); // 정말 삭제할건지 묻는 컨펌창을 팝업시킨다
    if (confirm) {
      deleteAllCmts();
      dispatch(__deleteDetail(id));
      navigate("/"); //삭제 후에 홈화면이 뜨게 한다
    }
  };

  // 만약 서버가 값을 불러오지 못했다면 에러 메세지를 띄운다
  if (error) {
    return <div>{error.message}</div>;
  }

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
      <Detailcmts />
    </>
  );
};

export default Detail;
