import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Detailcmts from "../pages/Detailcmts";
import Home from "../pages/Home";
import Write from "../pages/Write";
import Header from "../components/common/Header";

const Router = () => {
  return (
    <BrowserRouter>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/write" element={<Write />} />
        <Route path="/detail/:id" element={<Detailcmts />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
