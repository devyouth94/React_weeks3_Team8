import React from "react";
import "./header.css";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  return (
    <div className="title">
      <h1 onClick={() => navigate("/")}>항해 대나무숲</h1>
    </div>
  );
};

export default Header;
