import {createSlice} from "@reduxjs/toolkit"; //создается по умолчанию 
import {v4 as uuid} from 'uuid';

const todoSlice = createSlice({  //создается по умолчанию, всегда имя = название + Slice ('срез')
  name: 'todos',
  initialState: {
    todos: []
  },


  reducers:{  // здесь функции(обработчики), набор методов
    addTodo(state, action) {
      console.log(state);
      console.log(action);
      
      state.todos.push({
        'id': uuid(),
        'text': action.payload.text,
        'completed': false,
      })
    },

    removeTodo(state, action) {},
  },
  
})

export const {addTodo, removeTodo} = todoSlice.actions; // экспортируем экшины (всегда)
export default todoSlice.reducer; // всегда, объединяет в себя всё, что написано выше (срез) И ПЕРЕДАЕТ В Store