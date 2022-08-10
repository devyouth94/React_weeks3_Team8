import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { _getArticle } from "../redux/slices/postSlice";

const Home = () => {
  const dispatch = useDispatch();
  const getedstate = useSelector((state) => state.posts.article);
  const state = getedstate.slice().sort((a, b) => b.id - a.id);

  useEffect(() => {
    dispatch(_getArticle());
  }, [state?.[0]?.id]);

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
