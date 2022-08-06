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
import { getCurrency } from "api/currency/getCurrency";
import { nanoid } from "nanoid";
import { transactionType } from "constants";

const TransactionPage = lazy(() => import("pages"));
const AddTransactionPage = lazy(() => import("pages/add-transaction"));
const NotFoundPage = lazy(() => import("pages/404"));
const News = lazy(() => import("pages/news"));

const App = () => {
  const [transactions, setTransactions] = useState([]);
  const [total, setTotal] = useState(0);
  const [currenciesData, setCurrencies] = useState(null);


  useEffect(() => {
    const getCurrencyData = async () => {
      const response = await getCurrency();
      setCurrencies(response.data.rates);
    };
    getCurrencyData();
  }, []);

  useEffect(() => {
    setTransactions(mockTransactions.transactions);
    const reducedTotal = transactions.reduce((acc, { amount, type, fee }) => {
      return (
        acc +
        Math.round(
          (transactionType.WITHDRAW === type ? -amount : amount) /
            currenciesData[fee]
        )
      );
    }, 0);
    setTotal(reducedTotal);
  }, [currenciesData]);

  const handleSubmit = (transaction) => {
    const { type, amount, fee } = transaction;
    setTransactions([...transactions, { ...transaction, id: nanoid() }]);
    setTotal(
      total +
        Math.round(
          (transactionType.WITHDRAW === type ? -amount : amount) /
            currenciesData[fee]
        )
    );
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
              element={
                <TransactionPage total={total} transactions={transactions} />
              }
            />
            <Route
              path={routes.ADD_TRANSACTION}
              element={
                <AddTransactionPage
                  currenciesData={currenciesData}
                  handleSubmit={handleSubmit}
                />
              }
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
