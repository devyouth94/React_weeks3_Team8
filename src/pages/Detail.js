import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { useParams, useLocation } from "react-router-dom";
import { _detailPost } from "../redux/postslice";

const Detail = (props) => {
  const params = useParams();
  const location = useLocation();
  const dispatch = useDispatch();

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

  return (
    <>
      <div>Detail {params.id}</div>
      <div>
        <p>{name}</p>
        <p>{title}</p>
        <p>{contents}</p>
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
