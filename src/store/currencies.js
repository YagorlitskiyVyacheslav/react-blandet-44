import { createSlice } from "@reduxjs/toolkit";
import { getCurrency } from "api/currency/getCurrency";
import { toast } from "react-toastify";

const init = {
  data: null,
};

const transactions = createSlice({
  name: "currencies",
  initialState: init,
  reducers: {
    setCurrencies(state, action) {
      state.data = action.payload;
    },
  },
});

//Actions
export const { setCurrencies } = transactions.actions;

//Reducer
export default transactions.reducer;

//Selectors
export const selectCurrencies = (state) => state.currencies.data;

//Async Actions

export const getCurrenciesAsync = () => async (dispatch) => {
  try {
    const res = await getCurrency();
    dispatch(setCurrencies(res.data.rates));
  } catch (e) {
    toast.error(e.message);
  }
};
