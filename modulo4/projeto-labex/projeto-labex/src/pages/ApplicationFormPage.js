import React from 'react'
import axios from "axios";
import './ApplicationFormPage.css'
import { goToBack } from '../coordinator/Coordinator';
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from 'react'
import { urlBase } from '../services/ApiRequest'
import { countries } from '../services/countries'
import api from "../services/ApiRequest";


const ApplicationFormPage = (props) => {
  const navigate = useNavigate()
  const [trips, setTrips] = useState([])
  const [tripsId, setTripsId] = useState("")
  const [country, setCountry] = useState({})
  const [modal, setModal] = useState(false);
  const [inputs, setInputs] = useState({
    travel: "",
    name: "",
    age: "",
    applicationText: "",
    profession:"",
  });

  useEffect(() => {
    getTrips()
  }, [])

  const showModal = (value, id) => {
    setModal(value);
    tripsId(id);
    setInputs({});
    applyToTrip()
  };

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

  const applyToTrip = async () => {
    const brasil = "brasil"
    try {
    const body = {
      name: inputs.name,
      age: inputs.age,
      applicationText: inputs.applicationText,
      profession: inputs.profession,
      country: brasil
    }
    const ress = await api.post(`${urlBase}/trips/qSfN0EumjmBnB6ze4N19/apply`, body);
      alert("trip adicionada com sucesso.");
      console.log(ress.config.data)
    } catch (error) {
      console.log(error.response);
    }
    //  finally {
    //   setModal(false);
    // }
  };
  //   axios 
  //   .post(`${urlBase}/trips/${id}/apply`, body )
  //   .then(() => {
  //     alert("track adicionada com sucesso.");
  //   })
  // }.catch((err) => {
  //     alert("Erro no envio")
  //     console.log(err)
  //   });
  // }

  const handleInputsValue = (e) => {
    e.preventDefault();
    setInputs((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };
  

  const onChangeViagem = (e) => {
    setTripsId(e.target.value)
  }
 
  const handleNameTrip = trips && trips.map((trip) => {
    return (
      
      <option key={trip.id} value={trip.id}>
       {trip.name}
      </option>
      
      
    ) 
  })

  const handleNameCoutries = countries.map((country) => {
    return (
      <option 
        type="text" 
        value={inputs.country} 
        onChange={handleInputsValue}
        name="country"
        key={country.code} 
      >
        {country.label}
      </option>
    )
  })

  return (
    <div className='containerForm'>
      <h1>Inscrever-se para uma viagem</h1>
        
      <form className='cardForm'>
        <select defaultValue="" onChange={onChangeViagem}>
              <option value="" disable> Escolha uma viagem</option>
              {handleNameTrip}
        </select>
        <input 
          placeholder='Nome' 
          type="text"
          value={inputs.name}
          onChange={handleInputsValue}
          name="name"
        />
        <input 
          placeholder='Idade'
          type="number"
          value={inputs.age}
          onChange={handleInputsValue}
          name="age"
          
        />
        <input 
          placeholder='Texto de candidatura' 
          type="text"
          value={inputs.applicationText}
          onChange={handleInputsValue}
          name="applicationText"
        />
        <input 
          placeholder='Profissão' 
          type="text"
          value={inputs.profession}
          onChange={handleInputsValue}
          name="profession"
        />
        <select>
          <option>Selecione um país</option>
          {handleNameCoutries}
        </select>
      </form>
      <button onClick={() => goToBack(navigate)}>Voltar</button>
      <button onClick={() => showModal(!modal, trip.id)}>Enviar</button>
    </div>
  )
}

export default ApplicationFormPage