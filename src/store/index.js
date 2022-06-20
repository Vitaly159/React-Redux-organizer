import {configureStore} from "@reduxjs/toolkit";
import todoReducer from '../components/TodoSlice';

export default configureStore({
  reducer: {
    todos: todoReducer, //название редъюсера может быть любое, в данном случае todos, их тут может быть любое количество, здесь стыкуются все редъюсеры
  }
})