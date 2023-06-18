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
      const listId = action.payload;
      state.lists = state.lists.filter((list) => list.listId !== listId);
    },
    clearList: (state) => {
      state.lists = [];
    },
    updateList: (state, action) => {
      const editedList = action.payload;
      const index = state.lists.findIndex(
        (list) => list.listId === editedList.listId
      );
      if (index !== -1) {
        state.lists[index] = editedList;
      }
    },
  },
});

export const { setList, deleteList, clearList, updateList } = listSlice.actions;
export default listSlice.reducer;
