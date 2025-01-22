import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  lists: [],
};

const listSlice = createSlice({
  name: "list",
  initialState,
  reducers: {
    addList: (state, action) => {
      state.lists.push(action.payload);
    },
  },
});

export const { addList } = listSlice.actions;
export default listSlice.reducer;
