import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import UserForm from './components/UserForm';
import UserItem from './components/UserItem'

const apiUrl = `http://localhost:8080`;

const App = function() {

  const [userList, setUserList] = useState([])

  useEffect(() => {loadUsers()})

  const createUser = (user) => {
    console.log(user.first_name + " " + user.last_name + " " + user.email)
    axios.post(apiUrl + '/user/' + user.first_name + "/" + user.last_name + "/" + user.email);
    //loadUsers();
  }

  async function loadUsers() {
    const res = await axios.get(apiUrl + '/users');
    setUserList(res.data);
  }


  const removeUser = (id) => {
    axios.delete(apiUrl + '/user/' + id);
    //loadUsers();
  }

  return (
    <div className='App'>
      <div style={{marginTop: "100px"}}></div>
      <UserForm create={createUser}/>
      <br/>
      <br/>
      <h3>Список пользователей:</h3>
      {userList.map(user => (
        <UserItem key={user.id} remove={removeUser} user={user}/>
      ))}
    
    </div>
  );
}

export default App;
