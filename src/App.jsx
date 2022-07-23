import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import GlobalStyle from "./styleConfig/GlobalStyle";
import mockTransactions from "./mock/transactions";
import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { SharedLayout } from "layout/SharedLayout";
import { routes } from "constants";
import { lazy } from "react";
import { Suspense } from "react";

const TransactionPage = lazy(() => import("pages"));
const AddTransactionPage = lazy(() => import("pages/add-transaction"));
const NotFoundPage = lazy(() => import("pages/404"));
const News = lazy(() => import("pages/news"));

const App = () => {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    setTransactions(mockTransactions.transactions);
  }, []);

  const handleSubmit = (transaction) => {
    setTransactions([...transactions, transaction]);
  };

  return (
    <>
      <GlobalStyle />
      <ToastContainer autoClose={3000} />
      <Suspense fallback={<div>Loading</div>}>
        <Routes>
          <Route path={routes.TRANSACTIONS} element={<SharedLayout />}>
            <Route
              index
              element={<TransactionPage transactions={transactions} />}
            />
            <Route
              path={routes.ADD_TRANSACTION}
              element={<AddTransactionPage handleSubmit={handleSubmit} />}
            />
            <Route path={routes.NEWS} element={<News />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </Suspense>
    </>
  );
};
export default App;
