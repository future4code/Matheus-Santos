import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage } from "./home";
import { CharacterDetailPage } from "./CharacterDetailPage/CharacterDetailPage";
import { CharacterListPage } from "./CharacterListPage/CharacterListPage";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/details" element={<CharacterDetailPage />} />
        <Route path="/list" element={<CharacterListPage />} />
      </Routes>
    </BrowserRouter>
  );
};
