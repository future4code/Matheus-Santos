import logo from './logo.svg';
import './App.css';
import React from 'react'; 
import Etapa1 from './components/Etapa1'; 
import Etapa2 from './components/Etapa2'; 
import Etapa3 from './components/Etapa3'; 
import Final from './components/Final'; 
import { ButtonContainer } from './components/Estilizacao';

class App extends React.Component { 
  state = {
    etapa: 1
  }
  
  renderizaEtapa = () => {
    switch (this.state.etapa) {
      case 1: 
        return <Etapa1 /> 
      case 2: 
        return <Etapa2 /> 
      case 3: 
        return <Etapa3 />
      default: 
        return <Final />
    }
  }
  

  irParaProximaEtapa = () => {
    this.setState({
      etapa: this.state.etapa + 1
    })
  }
  
  
  render() {
    return (
      <ButtonContainer> 
        {this.renderizaEtapa()}
        {this.state.etapa === 4 ? "" : <button onClick={this.irParaProximaEtapa}>Próxima etapa</button>} 
      </ButtonContainer>
    );
  }
}

export default App;
