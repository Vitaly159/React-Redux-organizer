import React from 'react';

const InputField = ({handleAction, text, setText}) => {
  
  return(
    <label>
      <input value={text} onChange={(e) => setText(e.target.value)} />
      <button onClick={handleAction}>Добавить</button>
    </label>
  )
}

export default InputField;