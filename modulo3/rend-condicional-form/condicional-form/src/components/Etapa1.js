import React from "react";
import styled from "styled-components";


    

class Etapa1 extends React.Component {
 
    render() {
        const PagOne = styled.div`
        display : flex;
        justify-content : center;
        align-items : center;
        flex-direction: column;
        `
         return(
            <PagOne>
                <h1><strong>ETAPA 1 - DADOS GERAIS</strong></h1>
                <p> 1. Qual o seu nome? </p>
                <input placeholder="Digite aqui"></input>
                <p> 2. Qual sua idade?</p>
                <input placeholder="Digite aqui"></input>
                <p> 3. Qual seu email?</p>
                <input placeholder="Digite aqui"></input>
                <p>4. Qual sua escolaridade?</p>
                <select>
                    <option>Ensino médio incompleto</option>
                    <option>Ensino médio completo</option>
                    <option>Ensino superior incompleto</option>
                    <option>Ensino superior completo</option>
                </select>
            </PagOne>
        )
      
    }
}

export default Etapa1