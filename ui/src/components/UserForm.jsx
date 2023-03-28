import React, {useState} from 'react';
import Input from "./UI/input/Input";
import Button from "./UI/button/Button";

// Форма ввода
const UserForm = ({create}) => {
    
    // Отслеживаем объект (состояние объекта), в начале он пустой
    const [user, setUser] = useState({first_name: '', last_name: '', email: ''})


    // сохраняем пользователя, отменяем отправку формы, 
    // передаём сущность callBack функции create,
    // устанавливаем пустые значения в поля
    const addNewUser = (e) => {
        e.preventDefault()
        create(user)
        setUser({first_name: '', last_name: '', email: ''})
    }

    // Возвращаем html элемент
    return (
        <form>
            {/* Форма ввода имени */}
            <Input
                value={user.first_name}
                onChange={e => setUser({...user, first_name: e.target.value})}
                type="text"
                placeholder="Имя"
            />
            {/* Форма ввода фамилии */}
            <Input
                value={user.last_name}
                onChange={e => setUser({...user, last_name: e.target.value})}
                type="text"
                placeholder="Фамилия"
            />
            {/* Форма ввода почты */}
            <Input
                value={user.email}
                onChange={e => setUser({...user, email: e.target.value})}
                type="text"
                placeholder="Эл. Почта"
            />
            {/* Кнопка отправки данных */}
            <Button onClick={addNewUser}>Новый пользователь</Button>
        </form>
    );
};

export default UserForm;