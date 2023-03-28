// подключаем библиотеку
const mongoose = require("mongoose");

// описываем коллекцию (таблицу)
const userSchema = new mongoose.Schema({
  // определяем поля, имя, фамилия, почта типа String
  first_name: {
    type: String
  },
  last_name: {
    type: String
  },
  email: {
    type: String
  }
});

// создаём/сопоставляем коллекцию в бд
const User = mongoose.model("User", userSchema);

module.exports = User;
