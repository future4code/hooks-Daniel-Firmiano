import React from 'react'
import { goToBack } from '../coordinator/Coordinator';
import { useNavigate } from "react-router-dom";


const ApplicationFormPage = () => {
    const navigate = useNavigate()
  return (
    <div>
        <p>ApplicationFormPage</p>
        <button onClick={() => goToBack(navigate)}>Voltar</button>
        <button>Enviar</button>
    </div>
  )
}

export default ApplicationFormPage