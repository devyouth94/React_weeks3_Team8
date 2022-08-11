import React from "react";
import { useNavigate } from "react-router-dom";
import GlassCard from "../components/elements/GlassCard";
import Button from "../components/elements/Button";
import "./home.css";

const Home = () => {
  const navigate = useNavigate();
  console.log(1);

  return (
    <div className="mainWarp">
      <div onClick={() => navigate("/write")} className="btnWarp">
        <Button>Write</Button>
      </div>
      <GlassCard></GlassCard>
    </div>
  );
};

export default Home;
