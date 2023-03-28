import React from 'react';
import Button from "./UI/button/Button";

// Форма вывода
const PostItem = ({remove, user}) => {
    return (
        <div className="user">
            <div className="user__content">
                <div>
                    {/* Выводим данные о пользователе */}
                    <p>{user.first_name} {user.last_name} {user.email}</p>
                </div>
            </div>
            <div className="user__btns">
                {/* Кнопка для удаления пользователя */}
                <Button onClick={() => remove(user._id.toString())}>
                    Удалить
                </Button>
            </div>
        </div>
    );
};

export default PostItem;