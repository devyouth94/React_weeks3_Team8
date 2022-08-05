import React from "react";
import { useParams, useLocation } from "react-router-dom";

const Detail = (props) => {
  const params = useParams();
  const location = useLocation();
  // Link에서 원하는 데이터를 state로 보내면 location이라는 훅을 사용해서 볼수 있다.
  console.log(location); // 데이터가 들어온것을 볼수 있다.

  const name = location.state.name;
  const contents = location.state.contents;
  const title = location.state.title;
  // 이름정해서 나눠주기

  return (
    <>
      <div>Detail {params.id}</div>
      <div>
        <p>{name}</p>
        <p>{title}</p>
        <p>{contents}</p>
      </div>
    </>
  );
};

export default Detail;
