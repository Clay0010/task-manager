import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  boards: [],
};

const boardSlice = createSlice({
  name: "board",
  initialState,
  reducers: {
    addBoard: (state, action) => {
      state.boards.push(action.payload);
    },
  },
});

export const { addBoard } = boardSlice.actions;
export default boardSlice.reducer;

export const fetchBoards = () => async (dispatch) => {
  try {
    const response = await axios.get("http://localhost:5000/boards");
    dispatch(setBoards(response.data));
  } catch (error) {
    console.error("Error fetching boards:", error);
  }
};
