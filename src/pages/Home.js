import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { _getArticle } from "../redux/postslice"

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => { dispatch(_getArticle()) }, []);

  const state = useSelector(state => state.posts.article);

  return (
    <div>
      {state.map((value) => (
        <div>
          <h2 key={ "k" + value.id }>{value.title}</h2>
        </div>
      ))
      }
    </div >
  )
};

export default Home;
