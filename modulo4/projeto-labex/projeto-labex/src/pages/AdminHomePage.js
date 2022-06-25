import React from 'react'
import './AdminHomePage.css'
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from 'react'
import { goToBack , goToCreateTrip , goToTripDetails } from '../coordinator/Coordinator';
import { urlBase } from '../services/ApiRequest'
import axios from "axios";

const AdminHomePage = () => {
    const navigate = useNavigate()
    const [trips, setTrips] = useState([])

    useEffect(() => {
      getTrips()
    }, [])

    const getTrips = () => {
      axios
      .get(`${urlBase}/trips`)
      .then((response) => {
        setTrips(response.data.trips)
          
      })
      .catch((error) => {
          console.log(error)
      })
     
    }
    const mostrarNome = trips.map((trip) => {
      return (
        <div  className='cardTrips' key={trip.id}>
          <p  onClick={() => goToTripDetails(navigate)}><strong>Nome:</strong> {trip.name}</p>
          <button>X</button>
          <br />
          {/* <ApplicationFormPage nome={trip.name}/> */}
        </div>
        )
      })
  return (
    <div>
        <h1>Painel administrativo</h1>
        <button onClick={() => goToBack(navigate)}>Voltar</button>
        <button onClick={() => goToCreateTrip(navigate)}>Criar viagem</button>
        {mostrarNome}
        <button>Logout</button>
    </div>
  )
}

export default AdminHomePage