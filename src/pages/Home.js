import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { _getArticle } from "../redux/postslice";

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(_getArticle());
  }, []);

  const state = useSelector((state) => state.posts.article);

  return (
    <div>
      {state.map((value) => (
        <div key={"k" + value.id}>
          <Link to={`/detail/${value.id}`}>
            <h2>{value.title}</h2>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Home;
