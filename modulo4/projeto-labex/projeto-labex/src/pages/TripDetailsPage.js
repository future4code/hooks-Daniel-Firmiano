import React from 'react'
import { goToBack } from '../coordinator/Coordinator'
import { useNavigate } from 'react-router-dom'

const TripDetailsPage = () => {
    const navigate = useNavigate()
  return (
    <div>
        <p>TripDetailsPage</p>
        <button onClick={() => goToBack(navigate)}>Voltar</button>
        <button>Aprovar</button>
        <button>Reprovar</button>
    </div>
  )
}

export default TripDetailsPage