import { TransactionForm } from 'components/TransactionForm';

const AddTransactionPage = ({ handleSubmit }) => (
  <TransactionForm onSubmit={handleSubmit} />
);

export default AddTransactionPage;
