import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

const apiUrl = `http://localhost:8080`;

const App = function() {
  
  const [user, setUser] = useState({first_name: '', last_name: '', email: ''})

  async function createUser() {
    await axios.put(apiUrl + '/user/');
    this.loadUsers();
  }

  async function loadUsers() {
    const res = await axios.get(apiUrl + '/users');
    this.setState({
      users: res.data
    });
  }

  function componentDidMount() {
    this.loadUsers();
  }


  return (
    <div style={{"margin": "40px 20%"}}>
      <input type="text" value={} onChange={}/>
      <button onClick={() => this.createUser()}>Create User</button>
      <p>Users list:</p>
      <ul>
        {this.state.users.map(user => (
          <li key={user._id}>id: {user._id}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
