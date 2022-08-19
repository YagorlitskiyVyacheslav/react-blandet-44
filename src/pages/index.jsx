import { TransactionTable } from "components/TransactionTable";
import useRedux from "hooks/useRedux";
import { getTotal, getTransactions } from "store/transactions/transactions";
import styled from "styled-components";

const Total = styled.p`
  width: fit-content;
  font-size: 18px;
  font-weight: 700;
  margin-left: 30px;
`;

const TransactionPage = () => {
  const [selector] = useRedux();
  const transactions = selector(getTransactions);
  const total = selector(getTotal);

  return (
    <>
      <TransactionTable transactions={transactions} />
      <Total>Total: {total}$</Total>
    </>
  );
};

export default TransactionPage;
