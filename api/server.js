const express = require("express");
const app = express();
const connectDb = require("./src/connection");
const User = require("./src/User.model");
const cors = require('cors');

// CROS для общения между серверами
app.use(cors());

// порт, который будем прослушивать
const PORT = 8080;

// запрос по методу GET возвращает всех пользователей из бд
app.get("/users", async (req, res) => {
  const users = await User.find();
  console.log(users)
  res.json(users);
});

// запрос по методу POST создаёт нового пользователя 
app.post("/user/:first_name/:last_name/:email", async (req, res) => {

  // из запроса достаём имя, фамилию, почту
  const first_name = req.params['first_name']
  const last_name = req.params['last_name']
  const email = req.params['email']
  
  // создаём нового пользователя
  const user = new User({first_name: first_name, last_name: last_name, email: email});

  // Сохраняем
  await user.save().then(() => 
    console.log(`User create {first_name = ${first_name}, last_name = ${last_name}, email = ${email}}`));

  res.send("User created \n");
});

// запрос по методу DELETE удаляет пользователя по id
app.delete("/user/:id", async(req, res) => {

  // из запроса достаём id
  const id = req.params['id']

  // удаляем по id
  await User.deleteOne({_id: id}).then(() => 
    console.log(`User with id {${id}} deleted`));

  res.send("User deleted \n");
});

// прослушиваем порт 8080
app.listen(PORT, function() {
  console.log(`Listening on ${PORT}`);

  connectDb().then(() => {
    console.log("MongoDb connected");
  });
});
