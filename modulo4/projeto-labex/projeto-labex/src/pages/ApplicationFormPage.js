import React from 'react'
import { goToBack } from '../coordinator/Coordinator';
import { useNavigate } from "react-router-dom";
import ListTripsPage from './ListTripsPage';


const ApplicationFormPage = (props) => {
    const navigate = useNavigate()
  return (
    <div>
        <p>Inscrever-se para uma viagem</p>
        <form>
          <select name='Escolha uma viagem'>
            <optgroup label='Escolha uma viagem'>
              <option>laranja</option>
              <option>laranja</option>
            </optgroup>
          </select>
          <br/>
          <input placeholder='Nome'/>
          <input placeholder='Idade'/>
          <input placeholder='Texto de candidatura' />
          <input placeholder='Profissão' />
          <select>
            <option>{props.nome}</option>
            <option>laranja</option>
            <option>laranja</option>
            <option>laranja</option>
          </select>
        </form>
        <button onClick={() => goToBack(navigate)}>Voltar</button>
        <button>Enviar</button>
    </div>
  )
}

export default ApplicationFormPage