import React from 'react'
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from 'react'
import { goToApplicationForm , goToBack } from '../coordinator/Coordinator';
import { urlBase } from '../services/ApiRequest'
import axios from "axios";

const ListTripsPage = () => {
    const navigate = useNavigate()
    const [trips, setTrips] = useState([])

    useEffect(() => {
      getTrips()
    }, [])

    const handleGetTrips = trips.map((trip) => {
      return (
        <div key={trip.id}>
          <p><strong>Nome:</strong> {trip.name}</p>
          <p><strong>Descrição:</strong> {trip.description}</p>
          <p><strong>Planeta:</strong>{trip.planet}</p>
          <p><strong>Duração:</strong>{trip.durationInDays}</p>
          <p><strong>Data:</strong>{trip.date}</p>
          <br />
          {/* <ApplicationFormPage nome={trip.name}/> */}
        </div>
      )
    })
      
    
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

  return (
    <div>
        <h1>Lista de viagens</h1>
        <br />
        {handleGetTrips}
        
        <br />
        <button onClick={() => goToBack(navigate) }>Voltar</button>
        <button onClick={() => goToApplicationForm(navigate)}>Inscrever-se</button>
    </div>
  )
}

export default ListTripsPage