import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import UserForm from './components/UserForm';
import UserItem from './components/UserItem'

const apiUrl = `http://localhost:8080`;

// страница приложения
const App = function() {

  // отслеживаем состояние списка пользователей
  const [userList, setUserList] = useState([]);

  const [toUpdate, setUpdate] = useState(false);

  // Будем получать список пользователей после создания компонента
  useEffect(() => setUpdate(true), [])
  useEffect(() => {
    if(toUpdate) {
      setUpdate(false);
      loadUsers();
    }
  }, [toUpdate])

  // функция создания пользователя, принимаем сушность с данныими и посылает на сервер через url
  // путь выглядит так: http://localhost:8080/user/{first_name}/{last_name}/{email}
  const createUser = (user) => {
    axios.post(apiUrl + '/user/' + user.first_name + "/" + user.last_name + "/" + user.email);
    setUpdate(true);
  }

  // функция запроса пользователей
  async function loadUsers() {
    const res = await axios.get(apiUrl + '/users');
    setUserList(res.data);
  }

  // функция удаления по id
  const removeUser = (id) => {
    axios.delete(apiUrl + '/user/' + id);
    setUpdate(true)
  }

  return (
    <div className='App'>
      <div style={{marginTop: "100px"}}></div>
      {/* Форма ввода */}
      <UserForm create={createUser}/>
      <br/>
      <br/>
      <h3>Список пользователей:</h3>
      {/* Формы вывода */}
      {userList.map(user => (
        <UserItem key={user.id} remove={removeUser} user={user}/>
      ))}
    
    </div>
  );
}

export default App;
