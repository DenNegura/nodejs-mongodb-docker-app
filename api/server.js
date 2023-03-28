const express = require("express");
const app = express();
const connectDb = require("./src/connection");
const User = require("./src/User.model");
const cors = require('cors');

app.use(cors());

const PORT = 8080;

app.get("/users", async (req, res) => {
  const users = await User.find();
  res.json(users);
});


app.post("/user/:first_name/:last_name/:email", async (req, res) => {

  const first_name = req.params['first_name']
  const last_name = req.params['last_name']
  const email = req.params['email']
  
  const user = new User({first_name: first_name, last_name: last_name, email: email});

  await user.save().then(() => 
    console.log(`User create {first_name = ${first_name}, last_name = ${last_name}, email = ${email}}`));

  res.send("User created \n");
});

app.delete("/user/:id", async(req, res) => {

  const id = req.params['id']

  await User.deleteOne({_id: id}).then(() => 
    console.log(`User with id {${id}} deleted`));

  res.send("User deleted \n");
});

app.listen(PORT, function() {
  console.log(`Listening on ${PORT}`);

  connectDb().then(() => {
    console.log("MongoDb connected");
  });
});
