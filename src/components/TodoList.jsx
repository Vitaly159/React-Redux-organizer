import React from 'react';
import { useSelector } from 'react-redux';

const TodoList = ({removeTodo}) => {
  const todos = useSelector(state => state.todos.todos);

  return(
    <ul>
      {
        todos.map(todo => 
          <li key={todo.id}>
            <input type='checkbox' />
            <span>{todo.text}</span>
            <span className="red" onClick={() => removeTodo(todo.id)}>&times;</span>
          </li>
        )
      }
    </ul>
  )
}

export default TodoList;