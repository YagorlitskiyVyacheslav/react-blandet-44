/* eslint-disable react-hooks/exhaustive-deps */
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import GlobalStyle from "./styleConfig/GlobalStyle";
import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { SharedLayout } from "layout/SharedLayout";
import { routes } from "constants";
import { lazy } from "react";
import { Suspense } from "react";
import useRedux from "hooks/useRedux";
import { setTransactions } from "store/transactions";
import mockTransactions from "mock/transactions";
import { getCurrenciesAsync } from "store/currencies";

const Login = lazy(() => import("pages/login/Login"));
const TransactionPage = lazy(() => import("pages"));
const AddTransactionPage = lazy(() => import("pages/add-transaction"));
const NotFoundPage = lazy(() => import("pages/404"));
const News = lazy(() => import("pages/news"));

const App = () => {
  // eslint-disable-next-line no-unused-vars
  const [_, dispatch] = useRedux();

  useEffect(() => {
    dispatch(getCurrenciesAsync());
    dispatch(setTransactions(mockTransactions.transactions));
  }, []);

  return (
    <>
      <GlobalStyle />
      <ToastContainer autoClose={3000} />
      <Suspense fallback={<div>Loading</div>}>
        <Routes>
          <Route path={routes.TRANSACTIONS} element={<SharedLayout />}>
            <Route index element={<TransactionPage />} />
            <Route
              path={routes.ADD_TRANSACTION}
              element={<AddTransactionPage />}
            />
            <Route path={routes.NEWS} element={<News />} />
            <Route path={routes.LOGIN} element={<Login />} />
            {/* <Route path={routes.NEWS} element={<News />} /> */}
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </Suspense>
    </>
  );
};
export default App;
