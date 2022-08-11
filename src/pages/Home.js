import React from "react";
import { useNavigate } from "react-router-dom";
import GlassCard from "../components/elements/GlassCard";
import Button from "../components/elements/Button";
import "./home.css";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="mainWarp">
      <div onClick={() => navigate("/write")} className="btnWarp">
        <Button width="300px" ftsize="20px" textcolor="white" >글쓰기</Button>
      </div>
      <GlassCard></GlassCard>
    </div>
  );
};

export default Home;
