import { createSlice } from "@reduxjs/toolkit";
import mockTransactions from "mock/transactions";
import { nanoid } from "nanoid";

const transactions = createSlice({
  name: "transactions",
  initialState: { list: mockTransactions.transactions },
  reducers: {
    addTransactions(state, action) {
      state.list = [...state.list, { ...action.payload, id: nanoid() }];
    },
  },
});

export const { addTransactions } = transactions.actions;

export default transactions.reducer;

export const getTransactions = (state) => state.transactionsReducer.list;
