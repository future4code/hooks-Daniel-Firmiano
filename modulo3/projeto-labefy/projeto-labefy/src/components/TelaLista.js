import React from 'react'
import axios from 'axios';
import styled from "styled-components"
import  {useState} from 'react';
import "./TelaLista.css"
import ReactPlayer from 'react-player'
import { BsMusicNote } from "react-icons/bs";



const CardMusic = styled.div ` 
    display: inline-block;
	text-align: center;
	width: 60%;
	vertical-align: top;
	margin: 0 1.5%;
	padding: 30px 20px;
	box-sizing: border-box;
	border: 2px solid #000000;
	border-radius: 10px;
`

export default class HomePage extends React.Component {
    state = {
        playlistFull: [],
        listMusicas: [],
        nomeMusica: "",
        nomeCantor: "",
        link: "",
        id: "",
        detalhe: false,
        playListId: "",
    }

    componentDidMount ()  {
        this.mostrarListas()
    }
    // componentDidUpdate () {
    //     this.listarMusicas(this.state.playListId)
    //}
 
    adicionarMusica = () => {

        const url =`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${this.state.id}/tracks`
    
        const headers = {
            headers: {
                Authorization : "Daniel-Nascimento-Hooks"
            }
        }

        const body = {
            name: this.state.nomeMusica,
            artist: this.state.nomeCantor,
            url: this.state.link
        }

        axios.post(url, body, headers)
        .then((response) => {
            alert("Música adicionada com sucesso")
            this.setState({ nomeMusica: "", nomeCantor: "", link: "" })
        })
        .catch((error) => {
            console.log(error)
            alert("Algo deu errado!")
            
        })
    }

    listarMusicas = (id) => {
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}/tracks`
    
        const headers = {
            headers: {
                Authorization : "Daniel-Nascimento-Hooks"
            }
        }

        axios.get(url, headers)
         .then((response) => {
            this.setState({ listMusicas: response.data.result.tracks , playListId: id })
            // console.log(response)
        .catch((error) => {
            alert("Algo deu errado!")
         })
    })

    }

    mostrarListas = () => {
        const url = 'https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists'

        const headers = {
            headers: {
                Authorization : "Daniel-Nascimento-Hooks"
            }
        }

        axios.get(url, headers)
        .then((response) => {
            this.setState({ playlistFull : response.data.result.list })
            console.log(this.playlistFull)
        })
        .catch((error) => {
            alert("Algo deu errado!")
        })
    }

    deletarPlayList = (id) => {
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}`

        const headers = {
            headers: {
                Authorization: "Daniel-Nascimento-Hooks"
            }
        }

        axios.delete(url, headers)
            .then((response) => {
                alert("Usuário deletado com sucesso")
                this.mostrarListas()
            })
            .catch((error) => {
                alert(error.response.data.message)
            })
    }
    // https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/:playlistId/tracks/:trackId
    deletarMusica = (musicId) => {
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${this.state.playListId}/tracks/${musicId}`

        const headers = {
            headers: {
                Authorization: "Daniel-Nascimento-Hooks"
            }
        }

        axios.delete(url, headers)
            .then((response) => {
                alert("Usuário deletado com sucesso")
                this.listarMusicas(this.state.playListId)
                
            })
            .catch((error) => {
                alert(error.response.data.message)
            })
        
    }

    detalhes = () =>{
        return (
            <div>
                
                <div>
                    <h3>Adicionar novas musicas</h3>
                    <input 
                        placeholder='Nome da musica'
                        value={this.state.nomeMusica}
                        onChange={ (e) => this.setState({nomeMusica: e.target.value})}
                        />
                    <input 
                        placeholder='Nome do cantor(a)'
                        value={this.state.nomeCantor}
                        onChange={(e) => this.setState({nomeCantor: e.target.value})}/>
                    <input 
                        placeholder='Link do vídeo'
                        value={this.state.link}
                        onChange={(e) => this.setState({link: e.target.value})}/>
                    <button onClick={this.adicionarMusica}>Adicionar musica a playlist</button>
                </div>
            </div>
    
        )
    }


    render () {

        const listaMusicaRender = this.state.listMusicas.map((music) => {
            return (
                <CardMusic key={music.id} >
                    <h1 className="tituloMusica"></h1>
                    <div>
                        <p><strong>Nome da música :</strong> {music.name}</p>
                        <p><strong>Nome do artista:</strong> {music.artist}</p>
                        <figure className='caixaVideo'>
                            <div className="video">
                                <div className='iframe'>
                                    <ReactPlayer  url={music.url} />
                                </div>
                            </div>
                        </figure>
                    </div>
                    <button key={music.id} onClick={() => this.deletarMusica(music.id)}>X</button>
                    <br/>
                </CardMusic>
            )
        })
        const listas = this.state.playlistFull.map((list) => {
            
            return (
                
                <div className="CardLista" key={list.id} >
                    <h2><strong>
                     {list.name}</strong>
                    </h2>
                    <div className='cardButton'>
                        <button onClick={() => {this.state.detalhe ?  this.setState({detalhe: false, id: list.id}) : this.setState({detalhe: true, id: list.id})}}>Adicionar música</button>
                        <button onClick={() => {this.deletarPlayList(list.id)}}>Deletar Playlist</button>
                        <button onClick={() => {this.listarMusicas(list.id)}}>Músicas</button>
                    </div>
                </div>
            )
        }) 
        return (
            <div>
                <div>
                    <h1>Playlists!<BsMusicNote/></h1>
                    <button onClick={this.props.irParaHome}>Ir para home</button>
                </div>
                {listas}
                <br/>
                {listaMusicaRender}
                {this.state.detalhe ? this.detalhes() : null}
            </div>
        );
    }
}
