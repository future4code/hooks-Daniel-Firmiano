import React from 'react'
import { useEffect, useState } from "react";
import { FcSynchronize } from "react-icons/fc";
import './Perfil.css'
import axios from "axios";


const Perfil = () => {
  const [newCard, setNewCard] = useState({});
  const [isMatch, setIsMatch] = useState();

  useEffect(() => {getProfileToChoose();}, []);

  const buttons = (btnChoice) => {
    if (btnChoice !== "reset") {
      choosePerson(btnChoice);
    } else {
      clearMatches();
    }
    getProfileToChoose();
  };

  const getProfileToChoose = () => {

    
    axios
      .get('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:daniel-nascimento-hooks/person' )
      .then((result) => {
        setNewCard (result.data.profile)
       // alert("Novo perfil encontrado")
        //console.log(result.data.profile)
    })
      .catch((err) => {
        console.log(err)
    })
  }
 
  const choosePerson = () => {

    const body = {
      id: newCard.id,
      choice: true
    }
    axios
    .post('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:aluno/choose-person', body)
    .then ((res) => {
      getProfileToChoose();
    })
    .catch((err) => {
      console.log("erro na API")
    })
  }

  const dislikeButton = () => {
    getProfileToChoose();
  }

  const getMatches = () => {

    axios
    .get('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:daniel-nasciment-hooks/matches')
    .then((result) => {
      console.log(result)
    })
    .catch((error) => {
      console.log(error)
    })
  }

  const clearMatches = () => {
    axios
    .put("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:daniel-nascimento-hooks/clear")
    .then((result) => {
      console.log(result)
    })
    .catch((error) => {
      console.log(error)
    })
  }
  return (                                                                          
    <div className='card'>
      <div className='header'>
        <p> Astro Match</p>
        <button>Matchs</button>
      </div>
      <div className='perfis'>
        <img className='photo' alt="{newCard.photo_alt}" src={newCard.photo}/>
        <div className='descriçao'>
          <h1>{newCard.name} {newCard.age}</h1>
          <p>{newCard.bio}</p>
        </div>
      </div>
      <div className='botoes'>
         <button onClick={() => buttons(false)} className='botaoNegative'> </button>
         <button onClick={choosePerson} className='botaoPositive'>  </button> 
      </div >
      <button onClick={() => buttons("reset")} className='botaoRetorno'>< FcSynchronize className='retorno'/></button>
    </div>
  )
}

export default Perfil
