import React, { useState } from "react";
import { Link } from "react-router-dom";

export const Header = () => {
  const [showList, setShowList] = useState(false);

  const changeRoute = () => setShowList(!showList);

  return (
    <header>
      <h2>Astromatch</h2>
      <Link to={showList ? "/" : "MatchList"} onClick={changeRoute}>
        {showList ? "Voltar" : "Veja a lista"}
      </Link>
    </header>
  );
};
