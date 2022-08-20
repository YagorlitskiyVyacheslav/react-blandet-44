import { createSlice } from "@reduxjs/toolkit";
import { getCurrency } from "api/currency/getCurrency";
import { toast } from "react-toastify";
import { login } from "api/transactions/login";
import { TOKEN } from "constants/auth";

const init = {
    user: null,
};

const auth = createSlice({
  name: "auth",
  initialState: init,
  reducers: {
    setUser(state, action) {
      state.user = action.payload;
    },
  },
});

//Actions
export const { setUser } = auth.actions;

//Reducer
export default auth.reducer;

//Selectors
export const selectUser = (state) => state.auth.user;

//Async Actions
export const loginUserAsync = (body) => async (dispatch) => {
  try {
      const res = await login(body);
      dispatch(setUser(res.user));
      localStorage.setItem(TOKEN, res.token);
      toast.success('USER IS LOGIN');
  } catch (e) {
    toast.error(e.message);
  }
};
