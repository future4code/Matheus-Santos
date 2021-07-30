import React from "react";
import axios from "axios";
import CardPokedex from "./components/cardpokedex";

class App extends React.Component {
  state = {
    pokemon: [],
    picture: "",
  };

  componentDidMount() {
    this.getPokemon();
  }

  getPokemon = async () => {
    const response = await axios.get(
      "https://pokeapi.co/api/v2/pokemon?limit=151&offset=0"
    );
    this.setState({ pokemon: response.data.results });
  };

  getPokePicture = async (event) => {
    const url = event.target.value;
    const response = await axios.get(`${url}`);
    this.setState({ picture: response.data.sprites.front_default });
  };

  render() {
    const pokedex = this.state.pokemon.map((pokemon) => {
      return (
        <option key={pokemon.name} value={pokemon.url}>
          {pokemon.name}
        </option>
      );
    });
    return ( 
      <div>
        <header style={{textAlign: "center", backgroundColor: "#ff1f1f", height: "20vh"}}> <h2>Pokédex</h2> </header>
      <CardPokedex>
        <div style={{display: "flex", flexDirection: "column"}}>
        {this.state.picture && (
          <img src={this.state.picture} alt="Imagem do Pokémon"></img>
        )} 
        <select onChange={this.getPokePicture}>
          <option>Selecione um Pokémon</option>
          {pokedex}
        </select>
        </div>
      </CardPokedex> 
      </div>
    );
  }
}

export default App;
