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

app.get("/user-create/:userName", async (req, res) => {
  const user = new User({ username: req.params['userName'] });

  await user.save().then(() => console.log("User create {name = " + req.params['userName'] + "}"));

  res.send("User created \n");
});

app.listen(PORT, function() {
  console.log(`Listening on ${PORT}`);

  connectDb().then(() => {
    console.log("MongoDb connected");
  });
});
