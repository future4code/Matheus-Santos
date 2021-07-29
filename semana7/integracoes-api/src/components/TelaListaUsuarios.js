import React from "react";
import axios from "axios";
import CardUsuario from "./estilizacao";

class TelaListaUsuario extends React.Component {
  state = {
    usuarios: [],
  };

  componentDidMount() {
    this.pegaUsuarios();
  }

  pegaUsuarios = () => {
    const url =
      "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users";

    const headers = {
        headers: {
            Authorization: "matheus-oliveira-lovelace"
        }
    }
    axios
      .get(url, headers)
      .then((resposta) => {
        this.setState({ usuarios: resposta.data });
      })
      .catch((erro) => {
        alert("Ocorreu um problema :/, tente novamente");
      });
  };

  deletaUsuarios = (id) => {
    const url = `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`;
    axios.delete(url, {
      headers: {
        Authorization: "matheus-oliveira-lovelace",
      },
    })
    .then((resposta) => {
       alert("Usuário(a) deletado(a) com sucesso!") 
       this.pegaUsuarios()
    })
    
    .catch((erro) => {
        alert("Ocorreu um erro :/, mas tente novamente")
    })
  };

  render() {
    const listaUsuarios = this.state.usuarios.map((usuario) => {
        return (
        <CardUsuario key={usuario.id}>
          {usuario.name}
          <button onClick={() => this.deletaUsuarios(usuario.id)}>X</button>
        </CardUsuario>
      );
    });

    return (
      <div>
        <button onClick={this.props.irParaCadastro}>Ir para cadastro</button>
        <h2>Lista de usuários</h2>
        {listaUsuarios}
      </div>
    );
  }
}

export default TelaListaUsuario;
