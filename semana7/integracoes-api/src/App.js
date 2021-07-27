import React from "react";
import "./App.css";
import axios from "axios";

const url =
  "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users";
const headers = {
  headers: {
    Authorization: "matheus-oliveira-lovelace",
  },
};

class App extends React.Component {
  
  state = {
    inputNome: "",
    inputEmail: "",
  };

  componentDidMount() {
    this.pegaUsuarios()
  } 

  mudaInputEmail = (event) => {
    this.setState({inputEmail: event.target.value})
  }

  pegaUsuarios = () => {
    axios.get(url, headers).then((resposta) =>{
      this.setState({inputNome: resposta.data.result.list})
    })
    .catch((erro) =>{
      alert(erro.response.data)
    })
  }


  render() {
    return (
      <div>
        <h1> Login </h1>
      </div>
    );
  }
}

export default App;