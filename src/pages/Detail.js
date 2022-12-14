import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { __deleteDetail, __getDetail, __updateDetail } from "../redux/slices/detailSlice";
import Detailcmts from "./Detailcmts";
import axios from "axios";
import { server_url } from "../redux/slices/index";
import Button from "../components/elements/Button";
import style from "./detail.module.css";

const Detail = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const { article, isLoading, error } = useSelector((state) => state.detail);
  const cmtsstate = useSelector((state) => state.comments.posts);
  const [updateArticle, setUpdateArticle] = useState(""); //수정된 value값을 관리할 state
  const [editMode, setEditMode] = useState(false); // 조회, 수정 시 불리언 값에 따라 UI를 변경시켜주는 state

  // 렌더링시 게시글 GET 요청
  useEffect(() => {
    dispatch(__getDetail(id));
  }, [dispatch, id]);

  // 수정 버튼 눌렀을 시 작동하는 함수
  const onClickUpdate = () => {
    setUpdateArticle(article.content); // store에 저장 되어있는 content값으로 상태 업데이트
    setEditMode(true); // true면 수정 시에 필요한 UI가 나타난다
  };

  // 수정 완료 후 작성 버튼 눌렀을 시 작동하는 함수
  // if...else 문을 사용하여 수정 시 내용이 비어있으면 모달창을 뜨게 한다
  const onClickSave = () => {
    if (updateArticle.trim().length === 0) {
      alert("내용이 비어있습니다.");
    } else {
      dispatch(__updateDetail({ ...article, content: updateArticle })); // 수정된 content값을 payload로 보내준다
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
  const onClickDelete = async () => {
    const confirm = window.confirm("정말 삭제하시겠습니까?"); // 정말 삭제할건지 묻는 컨펌창을 팝업시킨다
    if (confirm) {
      await deleteAllCmts();
      await dispatch(__deleteDetail(id));
      navigate("/"); //삭제 후에 홈화면이 뜨게 한다
    }
  };

  // 만약 서버가 값을 불러오지 못했다면 에러 메세지를 띄운다
  if (error) {
    return <div>{error.message}</div>;
  }

  return (
    <>
      <div className={style.detailWarp}>
        <div className={style.h2Warp}>
          <h2 className={style.h2Tilte}>제목: {isLoading ? "" : article.title}</h2>
          <h2 className={style.h2Writer}>글쓴이: {isLoading ? "" : article.name}</h2>

          {editMode ? (
            <div>
              <Button onClick={onClickSave} textcolor="rgb(55, 245, 86)" width="37px">
                ✔
              </Button>
              <Button onClick={() => setEditMode(false)} textcolor="rgb(252, 59, 59);" width="37px">
                ↺
              </Button>
            </div>
          ) : (
            <div>
              <Button onClick={onClickUpdate} textcolor="rgb(55, 245, 86)" width="37px">
                ✎
              </Button>
              <Button onClick={onClickDelete} textcolor="rgb(252, 59, 59);" width="37px">
                ✖
              </Button>
            </div>
          )}
        </div>
        <div className={style.textBox}>
          {editMode ? (
            <div>
              <textarea
                className={style.editTextArea}
                name="content"
                value={updateArticle}
                onChange={(event) => setUpdateArticle(event.target.value)}
              />
            </div>
          ) : (
            <div className={style.contents}>내용: {isLoading ? "" : article.content}</div>
          )}
        </div>

        {editMode ? null : <Detailcmts />}
      </div>
    </>
  );
};

export default Detail;
