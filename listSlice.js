import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  lists: [],
};

const listSlice = createSlice({
  name: "list",
  initialState,
  reducers: {
    setList: (state, action) => {
      state.lists.push(action.payload);
    },
    deleteList: (state, action) => {
      const id = action.payload;
      state.lists = state.lists.filter((list) => list.id !== id);
    },
    clearList: (state) => {
      state.lists = [];
    },
    updateList: (state, action) => {
      const editedList = action.payload;
      const index = state.lists.findIndex((list) => list.id === editedList.id);
      if (index !== -1) {
        state.lists[index] = editedList;
      }
    },
  },
});

export const { setList, deleteList, clearList, updateList } = listSlice.actions;
export default listSlice.reducer;
