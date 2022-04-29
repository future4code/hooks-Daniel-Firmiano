import React from "react";

class Formulario extends React.Component {
    state = {
        inputNome: '',
        inputMensagem: '',
        listaDeMensagem:[{
            nome: "Robô",
            mensagem: "Olá, seja bem vindo"
        }]
    }

    mandaNome = (event) => {
        this.setState({ inputNome: event.tagert.value})
    }
    mandaMensagem = (event) => {
        this.setState({ inputMensagem: event.target.value})
    }  

    mandaNovaMensagem = () => {
        const mensagemNova = {
            nome: this.state.inputNome,
            mensagem: this.state.inputMensagem
        }
        const novaListaDeMsg = [...this.state.listaDeMensagem]
        novaListaDeMsg.push(mensagemNova)

        this.setState({listaDeMensagem : novaListaDeMsg})

    }

    render() {
        const listaDeMensagensRederizadas = this.state.listaDeMensagem.map((pessoa, index) => {

            return(
                <div key={index}>
                    <p><strong>Nome</strong>{pessoa.nome}</p>
                    <p><strong>Mensagem</strong>{pessoa.mensagem}</p>
                </div>
            )
        })

        return(
            <div>
                <input placeholder="Nome" value={this.state.inputNome} onChange = {this.mandaNome}/>
                <input placeholder="Mensagem" value={this.state.inputMensagem} onChange = {this.mandaMensagem}/>
                <button onClick={this.mandaNovaMensagem}>Enviar</button>
                {listaDeMensagensRederizadas}
            </div>
        
        )
    }
}

export default Formulario