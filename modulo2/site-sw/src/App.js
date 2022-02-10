import React from 'react' 
import { CharacterDetailPage } from './CharacterDetailPage/CharacterDetailPage'; 
import { CharacterListPage } from './CharacterListPage/CharacterListPage'; 
import { useState } from 'react'

function App() {
  const [currentePage, setCurrentPage] = useState(['list']) 
  const selectPage = () => {
    
  }

  return ( 
    <>
    <h1>Star Wars</h1> 
    <CharacterDetailPage /> 
    <CharacterListPage /> 
    </>
  );
}

export default App;
