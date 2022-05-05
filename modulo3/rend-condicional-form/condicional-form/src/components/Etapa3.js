import React from "react";
import styled from "styled-components";

class Etapa3 extends React.Component {
    render () {
        const PagThree = styled.div`
        display : flex;
        justify-content : center;
        align-items : center;
        flex-direction: column;
        `

        return (
            <PagThree>
                <h1>ETAPA 3 - INFORMAÇÕES GERAIS DE ENSINO</h1>
                <p>7. Por que você não terminou um curso de graduação?</p>
                <input placeholder="Digite aqui"></input>
                <p>8. Você fez algum curso complementar?</p>
                <select>
                    <option>Nenhum</option>
                    <option>Curso Técnico</option>
                    <option>Curso de Ingles</option>
                </select>
                
            </PagThree>
        )
    }
}
export default Etapa3