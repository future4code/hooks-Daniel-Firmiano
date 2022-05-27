import React from 'react'
import axios from 'axios';
import styled from "styled-components"
import { BsMusicNoteBeamed} from "react-icons/bs";

export default class HomePage extends React.Component {
    state = {
        nome: ""
    }
    handleNome = (e) => {
        this.setState({nome: e.target.value})
    }

    fazerCadastro = () => {
        const url = 'https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists'

        const body = {
            name : this.state.nome
        }

        const headers = {
            headers: {
                Authorization : "Daniel-Nascimento-Hooks"
            }
        }

        axios.post(url, body, headers)
        .then((response) => {
            alert("Usuário criado com sucesso")
            this.setState({nome:""})
        })
        .catch((error) => {
            alert("Erro na criação da playlist")
            this.setState({nome:""})
        })
    }

  render() {
    return (
      <div>
          <h1>Criar playlist    < BsMusicNoteBeamed/></h1>
          <input 
            placeholder='Nome da playlist'
            value={this.state.nome}
            onChange={this.handleNome}
          />
          <button onClick={this.fazerCadastro}>Criar playlist</button>
          <button onClick={this.props.irParaLista}>Todas as playlists</button>
      </div>
    )
  }
}
