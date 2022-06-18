import React from 'react'
import { useNavigate } from "react-router-dom";
import { goToBack , goToCreateTrip , goToTripDetails } from '../coordinator/Coordinator';

const AdminHomePage = () => {
    const navigate = useNavigate()
  return (
    <div>
        <p>AdminHomePage</p>
        <button onClick={() => goToBack(navigate)}>Voltar</button>
        <button onClick={() => goToCreateTrip(navigate)}>Criar viagem</button>
        <button>Logout</button>
        <button onClick={() => goToTripDetails(navigate)}>Mostrar detalhe</button>
    </div>
  )
}

export default AdminHomePage