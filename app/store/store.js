import { configureStore } from "@reduxjs/toolkit";
import boardReducer from "./boardSlice";
import listReducer from "./listSlice";
import taskReducer from "./taskSlice";

const store = configureStore({
  reducer: {
    board: boardReducer,
    list: listReducer,
    task: taskReducer,
  },
});

export default store;
