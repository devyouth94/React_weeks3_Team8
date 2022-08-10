import React from "react";
import "./header.css";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  return (
    <div className="title">
      <h1 onClick={() => navigate("/")}>항해 대나무숲</h1>
    </div>
  );
};

// const TopHeader = styled.div`
//   background-color: lightgray;
//   text-align: center;
//   height: 80px;
// `;

export default Header;
