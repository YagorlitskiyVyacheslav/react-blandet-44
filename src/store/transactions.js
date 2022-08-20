import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';
import { toast } from 'react-toastify';
import { getTransactions } from 'api/transactions/getTransactions';

const init = {
  list: [],
  total: 0,
};

const transactions = createSlice({
  name: 'transactions',
  initialState: init,
  reducers: {
    setTransactions(state, action) {
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

// Actions
export const { addTransactions, setTransactions, setTotal } =
  transactions.actions;

// Reducer
export default transactions.reducer;

// Selectors
export const selectTransactions = (state) => state.transactions.list;
export const selectTotal = (state) => state.transactions.total;

// Async Actions

export const getTransactionsAsync = () => async (dispatch) => {
  try {
    const res = await getTransactions();
    dispatch(setTransactions(res));
    console.log(res);
  } catch (error) {
    toast.error(error.message);
  }
};
