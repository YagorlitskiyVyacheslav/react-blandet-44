import { TransactionForm } from "components/TransactionForm";

const AddTransactionPage = ({ handleSubmit, currenciesData }) => (
  <TransactionForm onSubmit={handleSubmit} currenciesData={currenciesData} />
);

export default AddTransactionPage;
