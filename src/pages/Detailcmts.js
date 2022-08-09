import React, { useEffect, useMemo, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import {
  _Detailpost,
  _getDetailPosted,
  _deleteDetailPosted,
  _editDetailPosted,
} from "../redux/commentsSlice";
import $ from "jquery";

const Detailcmts = () => {
  const state = useSelector((state) => state.comments);
  const params = useParams();
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const detailArr = state.posts.slice().sort((a, b) => b.id - a.id);

  useEffect(() => {
    dispatch(_getDetailPosted(params.id));
  }, []);

  // 게시글의 제목이랑 타이틀 컨텐츠를 받아오는 부분
  const name = "이름이름이름이름";
  const title = "제목제목제목제목";
  const contents = "내용내용내용내용";

  const title_ref = useRef(null);
  const contents_ref = useRef(null);
  const pawd_ref = useRef(null);

  // 댓글을 작성하는 함수
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

  // 댓글 작성하기 엔터누르면 바로 등록
  const pressEnter = (e) => {
    if (e.key === "Enter") {
      putDetail();
    }
  };

  // 삭제해주는 함수. 비밀번호를 확인하고 맞으면 삭제.
  const deleteComments = (value) => {
    if (value.input === "") {
      alert("비밀번호를 입력해주세요");
    } else if (value.input == value.pswd) {
      dispatch(_deleteDetailPosted(value.id));
    } else if (value.input !== value.pswd) {
      alert("비밀번호가 틀렸습니다.");
    }
  };

  // 수정버튼을 누르면 비밀번호 확인하고 맞으면 display를 보여준다.
  const editComments = (value) => {
    if (value.input === "") {
      alert("비밀번호를 입력해주세요");
    } else if (value.input !== value.pswd) {
      alert("비밀번호가 틀렸습니다.");
    } else if (value.input == value.pswd) {
      document.getElementById(`inputbox${value.id}`).style.display = "flex";
    }
  };

  // 수정해주는 함수
  const editHandler = (value) => {
    if (value.title == "") {
      alert("제목을 넣어주세요");
    } else {
      dispatch(_editDetailPosted(value));
      document.getElementById(`inputbox${value.id}`).style.display = "none";
      $(`#pswd${value.id}`).val("");
      $(`#title${value.id}`).val("");
      $(`#contents${value.id}`).val("");
    }
  };

  return (
    <Bicbox>
      <InputBox>
        <div>
          <input ref={title_ref} type="text" placeholder="이름" onKeyPress={pressEnter} />
          <input ref={contents_ref} type="text" placeholder="내용" onKeyPress={pressEnter} />
        </div>
        <div>
          <PwBox ref={pawd_ref} type="password" placeholder="비밀번호" onKeyPress={pressEnter} />
          <button onClick={putDetail}>입력</button>
        </div>
      </InputBox>
      <div>
        {detailArr.length &&
          detailArr.map((value) => {
            return (
              <div key={"detailKey" + value.id}>
                <CommentsBox>
                  {value.title}:: {value.contents}
                  <div>
                    <PwBox placeholder="비밀번호" id={`pswd` + value.id} />
                    <button
                      onClick={() => {
                        editComments({
                          input: $(`#pswd${value.id}`).val(),
                          id: value.id,
                          pswd: value.pswd,
                        });
                      }}
                    >
                      수정
                    </button>
                    <button
                      onClick={() => {
                        deleteComments({
                          id: value.id,
                          pswd: value.pswd,
                          input: $(`#pswd${value.id}`).val(),
                        });
                      }}
                    >
                      삭제
                    </button>
                  </div>
                </CommentsBox>

                <EditInputBox id={`inputbox` + value.id}>
                  <div>
                    <input placeholder="이름" id={`title` + value.id} />
                    <input placeholder="내용" id={`contents` + value.id} />
                  </div>
                  <button
                    onClick={() => {
                      editHandler({
                        id: value.id,
                        pswd: value.pswd,
                        title: $(`#title${value.id}`).val(),
                        contents: $(`#contents${value.id}`).val(),
                        postId: params.id,
                      });
                    }}
                  >
                    완료
                  </button>
                </EditInputBox>

                <CommentsLine />
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

const InputBox = styled.div`
  display: flex;
  justify-content: space-between;
  width: 70%;
  margin: auto;
  margin-bottom: 40px;
`;

const CommentsBox = styled.div`
  width: 70%;
  margin: auto;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  margin-top: 5px;
`;

const PwBox = styled.input`
  width: 100px;
`;

const CommentsLine = styled.hr`
  margin: auto;
  width: 70%;
`;

const EditInputBox = styled.div`
  display: flex;
  width: 70%;
  margin-left: 100px;
  justify-content: space-between;
  margin: auto;
  margin-bottom: 13px;
  margin-top: 13px;
  display: none;
`;

export default Detailcmts;
