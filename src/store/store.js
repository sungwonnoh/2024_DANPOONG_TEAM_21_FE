import { configureStore } from "@reduxjs/toolkit";
import menuReducer from "./menu";
import optionReducer from "./option";

const store = configureStore({
  reducer: {
    menu: menuReducer,
    option: optionReducer,
  },
});

export default store;
