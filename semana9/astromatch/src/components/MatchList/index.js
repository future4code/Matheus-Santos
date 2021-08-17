import axios from "axios";
import React, { useEffect, useState } from "react";

export const MatchList = () => {
  const [allMatches, setAllMatches] = useState([]);

  const getAllMatches = async () => {
    const url =
      "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/matheus-oliveira-lovelace/matches";

    const {
      data: { matches: list },
    } = await axios.get(url);

    setAllMatches(list);
  };

  const renderAllMatches = allMatches.map(({ id, name, photo }) => {
    return (
      <li key={id}>
        <img src={photo} alt={name} />
        <p>{name}</p>
      </li>
    );
  });
  useEffect(() => {
    getAllMatches();
  }, []);

  return (
    <div>
      <ul>{renderAllMatches}</ul>
    </div>
  );
};
