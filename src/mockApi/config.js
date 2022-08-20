import { transactionType } from "constants/transactionType";
import { currencies } from "constants/currencies";

const data = [
  {
    token: "random-roken",
    user: {
      email: "mark@mail.com",
      password: "password",
    },
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
  },
];

if (!localStorage.getItem("data")) {
  localStorage.setItem("data", JSON.stringify(data));
}
