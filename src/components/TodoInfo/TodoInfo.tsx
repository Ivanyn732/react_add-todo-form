import React from 'react';
import { UserInfo } from '../UserInfo';
import { Todo } from '../../App';
import users from '../../api/users';

interface TodoInfoProps {
  todo: Todo;
}

export const TodoInfo: React.FC<TodoInfoProps> = ({ todo }) => {
  const foundUser = users.find(user => user.id === todo.userId);

  return (
    <article
      data-id={todo.id}
      className={`TodoInfo ${todo.completed ? 'TodoInfo--completed' : ''}`}
    >
      <h2 className="TodoInfo__title">{todo.title}</h2>
      {foundUser && <UserInfo user={foundUser} />}
    </article>
  );
};
