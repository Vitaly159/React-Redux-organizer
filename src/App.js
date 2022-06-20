import React, {useState} from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from './components/TodoSlice';

import TodoList from './components/TodoList';
import InputField from './components/InputField';

import './App.css';

function App() {
  const [text, setText] = useState('');
  const dispatch = useDispatch();
  const addTask = () => dispatch(addTodo());

  const handleAction = () => {
    if(text.trim().length) {
      dispatch(addTodo({text}));
      setText('');
    }
  };

  const removeTodo = (id) => {
    // setTodos(todos.filter(todo => todo.id !== id));
  }

  return (
    <div className="App">
      <InputField handleAction={handleAction} text={text} setText={setText} />
      <TodoList removeTodo={removeTodo} />
    </div>
  );
}

export default App;
