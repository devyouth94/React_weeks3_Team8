import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { useParams, useLocation, useNavigate, Link } from "react-router-dom";
import { _detailPost, _putPosted, _delete } from "../redux/postslice";

const Detail = (props) => {
  const params = useParams();
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const name = location.state.name;
  const contents = location.state.contents;
  const title = location.state.title;

  const detail_name = useRef(null);
  const detail_contents = useRef(null);

  const detailPost = () => {
    dispatch(
      _detailPost({
        postId: params.id,
        name: detail_name.current.value,
        contents: detail_contents.current.value,
      })
    );
  };

  // const putDetail = () => {
  //   dispatch(
  //     _putPosted({
  //       id: params.id,
  //     })
  //   );
  //   navigate(-1);
  // };

  const posteddelete = () => {
    dispatch(_delete({ id: params.id }));
  };

  return (
    <>
      <div>Detail {params.id}</div>
      <div>
        <div>
          <p>{name}</p>
          <p>{title}</p>
          <p>{contents}</p>
        </div>
        <Link to="/write" state={{ name, title, contents }}>
          <button>수정</button>
        </Link>
        <button onClick={posteddelete}>삭제</button>
      </div>
      <div>
        <input ref={detail_name} />
        <input ref={detail_contents} />
      </div>
      <button onClick={detailPost}>입력</button>
    </>
  );
};

export default Detail;
