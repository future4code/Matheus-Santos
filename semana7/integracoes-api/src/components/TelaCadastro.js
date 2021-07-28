import React from "react";
import axios from "axios";

class TelaCadastro extends React.Component {
  state = {
    nome: "",
    email: "",
  };

  inputNome = (event) => {
    this.setState({ nome: event.target.value });
  };

  inputEmail = (event) => {
    this.setState({ email: event.target.value });
  };

  fazerCadastro = () => {
    const url =
      "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users";

    const body = {
      name: this.state.nome,
      email: this.state.email,
    };

    axios
      .post(url, body, {
        headers: {
          Authorization: "matheus-oliveira-lovelace",
        },
      })
      .then((resposta) => {
        alert("Usuário(a) cadastrado(a) com sucesso!");
        this.setState({ nome: "", email: "" });
      })
      .catch((erro) => {
        alert(erro.response.data.message);
      });
  };

  render() {
    return (
      <div>
        <button onClick={this.props.irParaLista}>
          Ir para lista de usuários
        </button>
        <h2>Cadastro</h2>
        <input
          placeholder={"Nome"}
          value={this.state.nome}
          onChange={this.inputNome}
        />

        <input
          placeholder={"E-mail"}
          value={this.state.email}
          onChange={this.inputEmail}
        />

        <button onClick={this.fazerCadastro}>Cadastrar</button>
      </div>
    );
  }
}

export default TelaCadastro;