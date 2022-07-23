import { TransactionTable } from "./components/TransactionTable";
import { TransactionForm } from "./components/TransactionForm";
import GlobalStyle from "./styleConfig/GlobalStyle";
import mockTransactions from "./mock/transactions";
import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { SharedLayout } from "layout/SharedLayout";
import { routes } from "constants";

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
      <Routes>
        <Route path={routes.TRANSACTIONS} element={<SharedLayout />}>
          <Route
            index
            element={<TransactionTable transactions={transactions} />}
          />
          <Route
            path={routes.ADD_TRANSACTION}
            element={<TransactionForm onSubmit={handleSubmit} />}
          />
        </Route>
      </Routes>
    </>
  );
};
export default App;
