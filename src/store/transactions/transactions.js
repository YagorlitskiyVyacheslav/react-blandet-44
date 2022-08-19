import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";

const init = {
  list: [],
  total: 0,
};

const transactions = createSlice({
  name: "transactions",
  initialState: init,
  reducers: {
    setInitTransactions(state, action) {
      state.list = action.payload;
    },
    addTransactions(state, action) {
      state.list = [...state.list, { ...action.payload, id: nanoid() }];
    },
    setTotal(state, action) {
      state.total = state.total + action.payload;
    },
  },
});

export const { addTransactions, setInitTransactions, setTotal } =
  transactions.actions;

export default transactions.reducer;

export const getTransactions = (state) => state.transactions.list;
export const getTotal = (state) => state.transactions.total;
