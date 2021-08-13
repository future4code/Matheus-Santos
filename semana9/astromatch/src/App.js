import React, { useState, useEffect } from "react";
import { Header } from "./components/Header";  
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Card } from "./components/Card";
import { MatchList } from "./components/MatchList"; 

function App() {
  return (
    <div> 
      <BrowserRouter> 
      <Header />  
        <Routes>
          <Route path='/' element={<Card />} /> 
          <Route path='matchList' element={<MatchList />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
