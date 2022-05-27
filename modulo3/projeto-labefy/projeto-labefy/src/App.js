import React from "react";
import './App.css';
import HomePage from "./components/HomePage";
import TelaLista from "./components/TelaLista";
import axios from 'axios';

class App extends React.Component {
  state = {
    telaAtual: "homepage"
  }

  irParaHome = () => {
    this.setState({telaAtual: "homepage"})
  }
  
  irParaLista = () => {
    this.setState({telaAtual: "telalista"})
  }


  escolheTela = () => {
    switch (this.state.telaAtual) {
      case "homepage":
        return <HomePage irParaLista={this.irParaLista}/>
      case "telalista":
        return  <TelaLista irParaHome={this.irParaHome}/>
      default:
        return <p>Erro!</p>
    }
  }

  render () {
    return (
      <div>
        {this.escolheTela()}
      </div>
    );
  }
}

export default App;
