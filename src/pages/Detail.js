import React from "react";
import { useParams, useLocation } from "react-router-dom";

const Detail = (props) => {
  const params = useParams();
  const location = useLocation();

  const name = location.state.name;
  const contents = location.state.contents;
  const title = location.state.title;

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
