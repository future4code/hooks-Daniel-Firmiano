import React from 'react'
import './HomePage.css'
import { goToListTrips , goToLogin } from '../coordinator/Coordinator';
import { useNavigate } from "react-router-dom";


const HomePage = () => {
    const navigate = useNavigate()

  return (
    <div className='containerHome'>
      <h1></h1>
      <p>Labex</p>
      <button onClick={()=> goToListTrips(navigate)}>Ver viagens</button>
      <button onClick={()=> goToLogin(navigate)}>Área de admin</button>
    </div>
  )
}

export default HomePage