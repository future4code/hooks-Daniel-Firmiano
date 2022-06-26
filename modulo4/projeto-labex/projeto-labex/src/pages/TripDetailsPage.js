import React from 'react'
import { goToBack } from '../coordinator/Coordinator'
import { useNavigate } from 'react-router-dom'
import { urlBase } from '../services/ApiRequest'
import { useState, useEffect } from 'react'
import axios from 'axios'

const TripDetailsPage = () => {
    const navigate = useNavigate()
    const [tripDetail, setTripDetail] = useState([])
    useEffect(() => {
      getTripDetail()
    }, [])

    const getTripDetail = () => {
      const token = localStorage.getItem("token");
      const headers = {
        headers: {
          "auth": token
        }
      }
      axios
      .get(`${urlBase}/trip/I4jtfYrBYtqKIXNGtqLU`, headers)
      .then((res) => {
        // alert("certo")
        console.log(res.data.trip.candidates)
        setTripDetail(res.data.trip)
      })
      .catch(() => {
        alert("erro")
      })
    }
    
    const handleTripDetails =tripDetail((detail) => {
      return (
        <div key={detail.id}>
            {detail.profession}
            {detail.name}
            {detail.age}
            {detail.applicationText}
            {detail.country}
        </div>
      )
    })
  return (
    <div>
        <p>TripDetailsPage</p>
        <button onClick={() => goToBack(navigate)}>Voltar</button>
        {handleTripDetails}
        <button>Aprovar</button>
        <button>Reprovar</button>
    </div>
  )
}

export default TripDetailsPage