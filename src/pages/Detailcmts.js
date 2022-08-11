import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import Button from "../components/elements/Button";
import {
  _Detailpost,
  _getDetailPosted,
  _deleteDetailPosted,
  _editDetailPosted,
} from "../redux/slices/commentsSlice";
import $ from "jquery";

const Detailcmts = () => {
  const state = useSelector((state) => state.comments);
  const params = useParams();
  const dispatch = useDispatch();

  const detailArr = state.posts.slice().sort((a, b) => b.id - a.id);

  useEffect(() => {
    dispatch(_getDetailPosted(params.id));
  }, []);

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
        <InputWarp>
          <NameInput ref={title_ref} type="text" placeholder="이름" onKeyPress={pressEnter} />
          <CommentsInput ref={contents_ref} type="text" placeholder="내용" onKeyPress={pressEnter} />
        </InputWarp>
        <PwWarp>
          <PwInput ref={pawd_ref} type="password" placeholder="비밀번호" onKeyPress={pressEnter} />
          <Button marginLeft="10px" textcolor="rgb(55, 245, 86)" width="80px" onClick={putDetail}>✔</Button>
        </PwWarp>
      </InputBox>
      <div>
        {
          detailArr?.map((value) => {
            return (
              <CommentArea key={"detailKey" + value.id}>
                <CommentsBox>
                  <CommentsWarp>{value.title}: {value.contents}</CommentsWarp>
                  <EditWarp>
                    <PwInput placeholder="비밀번호" id={`pswd` + value.id} />
                    <Button marginLeft="10px" textcolor="rgb(55, 245, 86)" width="37px"
                      onClick={() => {
                        editComments({
                          input: $(`#pswd${value.id}`).val(),
                          id: value.id,
                          pswd: value.pswd,
                        });
                      }}
                    >
                      ✎
                    </Button>
                    <Button marginLeft="5px" textcolor="rgb(252, 59, 59);" width="37px"
                      onClick={() => {
                        deleteComments({
                          id: value.id,
                          pswd: value.pswd,
                          input: $(`#pswd${value.id}`).val(),
                        });
                      }}
                    >
                      ✖
                    </Button>
                  </EditWarp>
                </CommentsBox>

                <EditInputBox id={`inputbox` + value.id}>
                  <EditInputWarp>
                    <NameInput placeholder="이름" id={`title` + value.id} />
                    <CommentsInput placeholder="내용" id={`contents` + value.id} />
                  </EditInputWarp>
                  <ButtonWarp>
                    <Button textcolor="rgb(55, 245, 86)" width="37px"
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
                      ✔
                    </Button>
                  </ButtonWarp>
                </EditInputBox>
              </CommentArea>
            );
          })}
      </div>
    </Bicbox>
  );
};

const Bicbox = styled.div`
  text-align: center;
  width: 100%;
  margin: 0 auto;
`;

const InputBox = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 50px;
`;

const InputWarp = styled.div`
  width: 65%;
`

const NameInput = styled.input`
  width: 30%;
  padding: 10px;
  color: white;
  font-family: AppleSDGothicNeoB;

  background: rgba(41, 41, 41, 0.35);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(8.5px);
  -webkit-backdrop-filter: blur(8.5px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  &:focus {
    outline: none;
  }
  &::placeholder {
    color: white;
  }
`

const CommentsInput = styled.input`
  width: calc(70% - 10px) ;
  margin-left: 10px;
  padding: 10px;
  color: white;
  font-family: AppleSDGothicNeoB;

  background: rgba(41, 41, 41, 0.35);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(8.5px);
  -webkit-backdrop-filter: blur(8.5px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  &:focus {
    outline: none;
  }
  &::placeholder {
    color: white;
  }
`

const PwWarp = styled.div`
  width: calc(30% - 10px);
  text-align: right;
`

const CommentArea = styled.div`
  margin-bottom: 40px;
  color: white;
  font-family: AppleSDGothicNeoB;
`

const CommentsBox = styled.div`
  width: 100%;
  margin-bottom: 20px;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
`;

const CommentsWarp = styled.p`
  width: 65%;
  overflow: hidden;
  padding: 10px;
  text-align: left;
  word-wrap: break-word;  

  background: rgba(41, 41, 41, 0.35);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(8.5px);
  -webkit-backdrop-filter: blur(8.5px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
`

const EditWarp = styled.div`
  height: 46px;
`

const PwInput = styled.input`
  padding: 10px;
  height: 100%;
  color: white;
  font-family: AppleSDGothicNeoB;

  background: rgba(41, 41, 41, 0.35);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(8.5px);
  -webkit-backdrop-filter: blur(8.5px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  &:focus {
    outline: none;
  }
  &::placeholder {
    color: white;
  }
`;


const EditInputBox = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  display: none;
  margin-bottom: 30px;
  
`;

const EditInputWarp = styled.div`
  width: 65%;
`

const ButtonWarp = styled.div`

`

export default Detailcmts;