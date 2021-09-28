import { createSlice } from "@reduxjs/toolkit";


const initialState = localStorage.getItem("todos") ? JSON.parse(localStorage.getItem("todos")) : []


const todoSlice = createSlice({
  name: "todoSli",
  initialState,
  reducers: {
    //ADD_TODO-------------------------
    addTodo: (state, action) => {
      state.push(action.payload);
      localStorage.setItem("todos", JSON.stringify(state));
      return state;
    },
    //REMOVE_TODO-------------------------
    removeTodo: (state = initialState, action) => {
      return state.filter((item) => item.id !== action.payload);
    },
    //UPDATE_TODO-------------------------
    updateTodo: (state = initialState, action) => {
      return state.map((item) =>{
        if(item.id === action.payload.id){
          return {
            ...item,
            todoContent: action.payload.todoContent,
          };

        }
        return item;
      });
    },
    //COMPLETE_TODO-------------------------
    completeTodo: (state = initialState, action) => {
      return state.map((item) => {
        if (item.id === action.payload) {
          return {
            ...item,
            completed: !item.completed,
          };
        }
        return item;
      });
    },
  },
});

export const { addTodo, removeTodo, updateTodo, completeTodo } = todoSlice.actions;
export const todoReducer = todoSlice.reducer;