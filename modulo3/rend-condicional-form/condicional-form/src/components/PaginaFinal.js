import React from "react";
import styled from "styled-components";

class PaginaFinal extends React.Component {
    render () {
        const PagFinal = styled.div`
        display : flex;
        justify-content : center;
        align-items : center;
        flex-direction: column;
        `

        return (
            <PagFinal>
                <h1>O FORMULÁRIO ACABOU</h1>
                <p>Muito obrigado por participar! Entraremos em contato!</p>
                
            </PagFinal>
        )
    }

}
export default PaginaFinal