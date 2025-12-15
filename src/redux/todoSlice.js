import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todos",
  initialState: {
    pending: [],
    completed: []
  },
  reducers: {
    addTask: (state, action) => {
      state.pending.push({
        id: Date.now(),
        text: action.payload
      });
    },

    deleteTask: (state, action) => {
      state.pending = state.pending.filter(
        task => task.id !== action.payload
      );
      state.completed = state.completed.filter(
        task => task.id !== action.payload
      );
    },

    completeTask: (state, action) => {
      const task = state.pending.find(
        t => t.id === action.payload
      );
      if (task) {
        state.pending = state.pending.filter(
          t => t.id !== action.payload
        );
        state.completed.push(task);
      }
    }
  }
});

export const { addTask, deleteTask, completeTask } = todoSlice.actions;
export default todoSlice.reducer;
