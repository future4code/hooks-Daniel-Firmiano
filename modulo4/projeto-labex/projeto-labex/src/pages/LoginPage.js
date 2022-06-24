import React from 'react'
import { useNavigate } from "react-router-dom";
import { goToBack , goToAdminHome } from '../coordinator/Coordinator';

const AdminHomePage = () => {
    const navigate = useNavigate()
  return (
    <div>
        <p>Login</p>
        <button onClick={() => goToBack(navigate)}>Voltar</button>
        <button onClick={() => goToAdminHome(navigate)}>Entrar</button>
    </div>
  )
}

export default AdminHomePage