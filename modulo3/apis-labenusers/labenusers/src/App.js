import React from 'react'
import './App.css';
import axios from 'axios'

const urlUsers = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"

const headers = {
    headers: {
        Authorization: "Daniel-Nascimento-Hooks"
    }
}



// getAllUsers()

class LabeUsers extends React.Component {
  state = {
    novoUsuario: [],
    inputNome: "",
    inputEmail: "",
  }
  // componentDidMount() {
  //   this.getAllUsers();
  // }

  getAllUsers = () => {
    axios
    .get(urlUsers, headers)
    .then((response)=> {
        this.setState({novoUsuario : response.data})
        console.log(response.data);
    })
    .catch((error) => {
        alert("Algo deu errado, tente novamente")
        // console.log(error);
    })
  }


 creatListUsers = () => {

  const body = {
    name: this.state.inputNome,
    email: this.state.inputEmail
    }

   axios
    .post(urlUsers, body, headers)
    .then((res) => {
      alert(`Usuário ${this.state.inputNome} criado com sucesso!!`)
      this.setState({inputNome : ""})
      this.setState({inputEmail : ""})
      // this.getAllUsers();
    })
    .catch((err) => {
      alert("Erro na criação")
      this.setState({inputNome : ""})
      this.setState({inputEmail : ""})
    })
  }
  
  criandoEventoNome = (e) => {
    this.setState({inputNome : e.target.value})
  }
  criandoEventoEmail = (e) => {
    this.setState({inputEmail : e.target.value})
  }

  deletUser = (id) => {
    axios
    .delete(`${urlUsers}/${id}`, headers)
    .then((res) => {
      this.getAllUsers()  
      alert("usuário deletado")
    })
    .catch((err) => {
      alert("algo deu errado")
    })
  }
  render(){
    
    const usersRender = this.state.novoUsuario.map((user) => {
      return (
        <div>
          <li key={user.id}>{user.name}</li>
          <button onClick={() => this.deletUser(user.id)}>Delete aqui</button>
        </div>
      )
    })

    const listComponent = this.state.novoUsuario.map((list) => {
      return <li key={list.id}>{list.name}{list.email}</li>;
    })
    
    return (
      <div className="App">
        <button onClick={this.getAllUsers}>Usuários já cadastrados</button>
        <div>Se não é cadastrado, crie um cadastro abaixo:</div>
        <input placeholder='Nome' onChange={this.criandoEventoNome}  value={this.state.inputNome}/>
        <input placeholder='E-mail'onChange={this.criandoEventoEmail}  value={this.state.inputEmail}/>
        <button onClick={this.creatListUsers}>Criar usuário</button>
        {/*  {listComponent} */}
        {usersRender}
      </div>
  );
}}

export default LabeUsers;