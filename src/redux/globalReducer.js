import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    theme: true,
    user: ""
}

const globalSlice = createSlice({
  name: "globalSli",
  initialState,
  reducers: {
    themeChange: (state = initialState, action) => {
        return {
            ...state,
            theme: action.payload,
        };
    },
    addUser: (state = initialState, action) => {
        console.log(action.payload)
        return {
          ...state,
          user: action.payload.replace(/\s+/g, ""),
        };
    },
  },
});

export const { themeChange, addUser } = globalSlice.actions;
export const globalReducer = globalSlice.reducer;