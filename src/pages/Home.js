import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { _getArticle } from "../redux/slices/postSlice";

const Home = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.posts.article);

  useEffect(() => {
    dispatch(_getArticle());
  }, [dispatch]);

  return (
    <>
      <div>
        <Link to={"/write"}>
          <button>글작성하기</button>
        </Link>
      </div>
      <div>
        {state.map((value) => (
          <div key={"k" + value.id}>
            <Link to={`/detail/${value.id}`}>
              <h2>{value.title}</h2>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
};

export default Home;
