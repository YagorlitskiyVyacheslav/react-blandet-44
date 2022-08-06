import { createSlice } from "@reduxjs/toolkit/dist/createSlice";
import mockTransactions from 'mock/transactions';
import { nanoid } from "nanoid";

const transactions = createSlice({
    name: 'transactions',
    initialState: { list: mockTransactions.transactions },
    reducers: {
        addTransactions(state, action) {
            state.list = [...state.list, { ...action.payload, id: nanoid() }]
        }
    }
});

export const { addTransactions } = transactions.actions;

export default transactions.reducer;