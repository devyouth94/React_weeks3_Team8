import React from "react";
import "./header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="title">
      <Link to={"/"}>
        <h1>항해 대나무숲</h1>
      </Link>
    </div>
  );
};

// const TopHeader = styled.div`
//   background-color: lightgray;
//   text-align: center;
//   height: 80px;
// `;

export default Header;
