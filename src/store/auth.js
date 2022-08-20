import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { login } from "api/transactions/login";
import { signUp } from "api/transactions/signUp";
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
export const loginUserAsync = (body, formik) => async (dispatch) => {
  try {
    const res = await login(body);
    dispatch(setUser(res.user));
    localStorage.setItem(TOKEN, res.token);
    toast.success("USER IS LOGGED IN");
    formik.setSubmitting(false);
    formik.resetForm();
  } catch (e) {
    toast.error(e.message);
    formik.setSubmitting(false);
  }
};

export const signUpUserAsync = (body, formik) => async (dispatch) => {
  try {
    const res = await signUp(body);
    console.log("res: ", res);
    dispatch(setUser(res.user));
    localStorage.setItem(TOKEN, res.token);
    toast.success("USER IS SIGNED UP");
    formik.setSubmitting(false);
    formik.resetForm();
  } catch (e) {
    toast.error(e.message);
    formik.setSubmitting(false);
  }
};
