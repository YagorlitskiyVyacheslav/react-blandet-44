import { TransactionTable } from "components/TransactionTable";
import styled from "styled-components";

const Total = styled.p`
  width: fit-content;
  font-size: 18px;
  font-weight: 700;
  margin-left: 30px;
`;

const TransactionPage = ({ transactions, total }) => (
  <>
    <TransactionTable transactions={transactions} />
    <Total>Total: {total}$</Total>
  </>
);

export default TransactionPage;
