import { TransactionTable } from "./components/TransactionTable/TransactionTable";
import { TransactionForm } from "./components/TransactionForm/TransactionForm";
import GlobalStyle from "./styleConfig/GlobalStyle";

function App() {
  return (
    <>
      <GlobalStyle />
      <TransactionForm />
      <TransactionTable />
    </>
  );
}

export default App;
