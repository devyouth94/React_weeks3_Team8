import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { _getArticle } from "../../redux/slices/postSlice";
import GlassCard from "../elements/GlassCard";

const List = () => {
  const dispatch = useDispatch();
  const getedstate = useSelector((state) => state.posts.article);
  const state = getedstate.slice().sort((a, b) => b.id - a.id);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(_getArticle());
  }, [state?.[0]?.id]);

  return (
    <StyledList>
      {state.map((value) => (
        <GlassCard key={"k" + value.id} onClick={() => navigate(`/detail/${value.id}`)}>
          <h2>🎉 {value.title} 🎉</h2>
        </GlassCard>
      ))}
    </StyledList>
  );
};

const StyledList = styled.div`
  margin: 0 auto;
  width: 70%;
  display: flex;
  gap: 20px;
  justify-content: center;
  flex-wrap: wrap;
`;

export default List;
