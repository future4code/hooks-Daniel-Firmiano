import './App.css';
import Etapa1 from './components/Etapa1';
import React from 'react';
import Etapa2 from './components/Etapa2';
import Etapa3 from './components/Etapa3';
import PaginaFinal from './components/PaginaFinal';
import styled from "styled-components";

class app extends React.Component{
  state = {
    etapa: 1
  }
  renderizacaoEtapas = ()=> {
    switch (this.state.etapa){
      case 1:
        return <Etapa1/>;
      case 2:
        return <Etapa2/>;
      case 3:
        return <Etapa3/>;
      case 4:
        return <PaginaFinal/>;
    }
  }
  irParaProxima = () => {
    this.setState({etapa : this.state.etapa + 1})
  }
 
   render(){
    const Principal = styled.div`
    display : flex;
    justify-content : center;
    align-items : center;
    flex-direction: column;
    `
     return(
       <Principal>
         {this.renderizacaoEtapas()}
         {this.state.etapa !==4 && (
          <button onClick={this.irParaProxima}>Próxima etapa</button>
         )}
       </Principal>
     )
   }
}
export default app;