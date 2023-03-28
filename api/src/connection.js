// подключаем библиотеку
const mongoose = require("mongoose");

// Получаем коллекцию описывающую пользователя из нашего файла
const User = require("./User.model");

// Определяем url поключения к базе данных
const connection = "mongodb://mongo:27017/users-db";

// Устанавливаем соединения
const connectDb = () => {
  return mongoose.connect(connection);
};

module.exports = connectDb; 
