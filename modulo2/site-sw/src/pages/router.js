import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage } from "./HomePage/home";
import { CharacterDetailPage } from "./CharacterDetailPage/CharacterDetailPage";
import { CharacterListPage } from "./CharacterListPage/CharacterListPage"; 
import { NavBar } from "../components/navbar";

export const Router = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/details/:id" element={<CharacterDetailPage />} />
        <Route path="/list" element={<CharacterListPage />} />
      </Routes>
    </BrowserRouter>
  );
};
