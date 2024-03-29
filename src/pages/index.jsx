/* eslint-disable react-hooks/exhaustive-deps */
import { TransactionTable } from 'components/TransactionTable';
import { transactionType } from 'constants';
import useRedux from 'hooks/useRedux';
import { useEffect } from 'react';
import { selectCurrencies } from 'store/currencies';
import {
  selectTotal,
  selectTransactions,
  setTotal,
  getTransactionsAsync,
} from 'store/transactions';
import styled from 'styled-components';

const Total = styled.p`
  width: fit-content;
  font-size: 18px;
  font-weight: 700;
  margin-left: 30px;
`;

const TransactionPage = () => {
  const [selector, dispatch] = useRedux();

  const transactions = selector(selectTransactions);
  const total = selector(selectTotal);
  const currenciesData = selector(selectCurrencies);

  useEffect(() => {
    if (currenciesData && transactions.length > 0) {
      const reducedTotal = transactions.reduce((acc, { amount, type, fee }) => {
        return (
          acc +
          Math.round(
            (transactionType.WITHDRAW === type ? -amount : amount) /
              currenciesData[fee]
          )
        );
      }, 0);
      dispatch(setTotal(reducedTotal));
    }
  }, [currenciesData, transactions]);

  useEffect(() => {
    dispatch(getTransactionsAsync());
  }, []);

  return (
    <>
      <TransactionTable transactions={transactions} />
      <Total>Total: {total}$</Total>
    </>
  );
};

export default TransactionPage;
