import { TransactionTable } from "./components/TransactionTable/TransactionTable";
import { TransactionForm } from "./components/TransactionForm/TransactionForm";
import GlobalStyle from "./styleConfig/GlobalStyle";
import mockTransactions from "./mock/transactions";
import { useEffect, useState } from "react";

function App() {
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
      <TransactionForm onSubmit={handleSubmit} />
      <TransactionTable transactions={transactions} />
    </>
  );
}

export default App;
