import { transactionType, currencies } from "constants";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  transactions: [
    {
      id: 1,
      type: transactionType.DEPOSIT,
      amount: 5000,
      created: 1656225673188,
      fee: currencies.USD,
    },
    {
      id: 2,
      type: transactionType.WITHDRAW,
      amount: 3000,
      created: 1656225673188,
      fee: currencies.USD,
    },
    {
      id: 3,
      type: transactionType.DEPOSIT,
      amount: 7000,
      created: 1656225673188,
      fee: currencies.UAN,
    },
    {
      id: 4,
      type: transactionType.DEPOSIT,
      amount: 2000,
      created: 1656225673188,
      fee: currencies.USD,
    },
    {
      id: 5,
      type: transactionType.WITHDRAW,
      amount: 1000,
      created: 1656225673188,
      fee: currencies.UAN,
    },
  ],
  total: 10000,
};
