import { TransactionTable } from 'components/TransactionTable';

const TransactionPage = ({ transactions }) => (
  <TransactionTable transactions={transactions} />
);

export default TransactionPage;
