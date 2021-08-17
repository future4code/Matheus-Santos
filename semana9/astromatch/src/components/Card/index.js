import React, { useState, useEffect } from "react";
import axios from "axios";

export const Card = () => {
  const [profile, setProfile] = useState({});
  const { id, age, name, bio, photo } = profile;

  const fetchData = async () => {
    const url =
      "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/matheus-oliveira-lovelace/person";

    const {
      data: { profile: persona },
    } = await axios.get(url);
    setProfile(persona);
  };

  const choosePerson = async (bool) => {
    const { url, body, headers } = {
      url: "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/matheus-oliveira-lovelace/choose-person",
      body: {
        id,
        choice: bool,
      },
      headers: {
        ContentType: "application/json",
      },
    };
    await axios.post(url, body, { headers });

    fetchData();
  };

  const clearAll = async () => {
    const { url, headers } = {
      url: "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/matheus-oliveira-lovelace/clear",
      headers: {
        ContentType: "application/json",
      },
    };
    await axios.put(url, { headers });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <figure>
        <img src={photo} alt={name} />
      </figure>

      <div>
        <p>{`${name}, ${age}`}</p>
        <p>{bio}</p>

        <button onClick={() => choosePerson(false)}>X</button>
        <button onClick={() => choosePerson(true)}>S2</button>
        <button onClick={clearAll}>Limpar tudo</button>
      </div>
    </>
  );
};
