import React, {useState} from 'react';
import Input from "./UI/input/Input";
import Button from "./UI/button/Button";

const UserForm = ({create}) => {
    const [user, setUser] = useState({first_name: '', last_name: '', email: ''})


    const addNewUser = (e) => {
        e.preventDefault()
        create(user)
        setUser({first_name: '', last_name: '', email: ''})
    }

    return (
        <form>
            <Input
                value={user.first_name}
                onChange={e => setUser({...user, first_name: e.target.value})}
                type="text"
                placeholder="Имя"
            />
            <Input
                value={user.last_name}
                onChange={e => setUser({...user, last_name: e.target.value})}
                type="text"
                placeholder="Фамилия"
            />
            <Input
                value={user.email}
                onChange={e => setUser({...user, email: e.target.value})}
                type="text"
                placeholder="Эл. Почта"
            />
            <Button onClick={addNewUser}>Новый пользователь</Button>
        </form>
    );
};

export default UserForm;