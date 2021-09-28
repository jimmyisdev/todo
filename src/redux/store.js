import { configureStore } from "@reduxjs/toolkit"; 
import { todoReducer } from "./todoReducer";
import { globalReducer } from "./globalReducer";

function saveToLocalStorage(state){
  try {
    const serialisedState = JSON.stringify(state);
    localStorage.setItem("persistantState", serialisedState);
  } catch (error) {
    console.log(error)
  }
}

function loadFromLocalStorage(){
  try {
    const serialisedState = localStorage.getItem("persistantState");
    if (serialisedState === null) return undefined;
    return JSON.parse(serialisedState);
  } catch (error) {
    console.log(error)
    return undefined;
  }
}

const preloadedState = loadFromLocalStorage();


 const store = configureStore({
   reducer: {
     todo: todoReducer,
     global: globalReducer,
   },
   preloadedState,
 });

store.subscribe(()=> saveToLocalStorage(store.getState()))

export default store;
