import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { _getArticle } from "../../redux/slices/postSlice";
import "./glassCard.css";

const GlassCard = () => {
  const dispatch = useDispatch();
  const getedstate = useSelector((state) => state.posts.article);
  const state = getedstate.slice().sort((a, b) => b.id - a.id);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(_getArticle());
  }, [state?.[0]?.id]);

  return (
    <div className="glassCardWarp">
      {state.map((value) => (
        <div
          className="glassCard"
          onClick={() => navigate(`/detail/${value.id}`)}
          key={"k" + value.id}
        >
          <h2>🎉{value.title}🎉</h2>
        </div>
      ))}
    </div>
  );
};

export default GlassCard;
