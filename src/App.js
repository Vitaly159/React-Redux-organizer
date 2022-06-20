import React, {useState} from 'react';
import { useDispatch } from 'react-redux'; //*1
import { addTodo } from './components/TodoSlice';

import TodoList from './components/TodoList';
import InputField from './components/InputField';

import './App.css';

function App() {
  const [text, setText] = useState('');
  const dispatch = useDispatch(); //*1

  const handleAction = () => {
    if(text.trim().length) {
      dispatch(addTodo({text})); //*1
      setText('');
    }
  };

  return (
    <div className="App">
      <InputField handleAction={handleAction} text={text} setText={setText} />
      <TodoList />
    </div>
  );
}

export default App;
