import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AddPostPage from "../pages/AddPostPage";
import DetailPage from "../pages/DetailPage";
import HomePage from "../pages/HomePage";

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/add-post" element={<AddPostPage />} />
        <Route path="/detail" element={<DetailPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
