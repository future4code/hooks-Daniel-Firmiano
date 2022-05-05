import React from "react";
import styled from "styled-components";

class Etapa2 extends React.Component {
    render () {
        const PagTwo = styled.div`
        display : flex;
        justify-content : center;
        align-items : center;
        flex-direction: column;
        `

        return (
            <PagTwo>
                <h1>Etapa 2 - INFORMAÇÕES DO ENSINO SUPERIOR</h1>
                <p>5. Qual curso?</p>
                <input placeholder="Digite aqui"></input>
                <p>6. Qual a unidade de ensino?</p>
                <input placeholder="Digite aqui"></input>

            </PagTwo>
        )
    }
}

export default Etapa2