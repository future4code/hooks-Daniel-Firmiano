import React from 'react'
import { useNavigate } from "react-router-dom";
import { goToApplicationForm , goToBack } from '../coordinator/Coordinator';

const ListTripsPage = () => {
    const navigate = useNavigate()


  return (
    <div>
        <p>ListTripsPage</p>
        <button onClick={() => goToBack(navigate) }>Voltar</button>
        <button onClick={() => goToApplicationForm(navigate)}>Inscrever-se</button>
    </div>
  )
}

export default ListTripsPage