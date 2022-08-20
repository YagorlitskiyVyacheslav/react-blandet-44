import React, { useState } from "react";
import { PrimaryButton, SecondaryButton } from "components/ui/buttons";
import styled from "styled-components";
import { transactionType } from "constants";
import { Form } from "./Form/Form";
import { Card } from "components/ui/Card";
import useRedux from "hooks/useRedux";
import { addTransactionAsync, setTotal } from "store/transactions";
import { selectCurrencies } from "store/currencies";

const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 0 0 40px;
`;

export const TransactionForm = () => {
  const [type, setType] = useState(null);
  const [selector, dispatch] = useRedux();
  const currenciesData = selector(selectCurrencies);

  const handleSubmit = (transaction) => {
    const { type, amount, fee } = transaction;
    dispatch(addTransactionAsync(transaction));
    dispatch(
      setTotal(
        Math.round(
          (transactionType.WITHDRAW === type ? -amount : amount) /
            currenciesData[fee]
        )
      )
    );
  };

  return (
    <Card title="Transaction Form">
      <ButtonsWrapper>
        <SecondaryButton
          onClick={() =>
            setType(
              transactionType.WITHDRAW === type
                ? null
                : transactionType.WITHDRAW
            )
          }
        >
          Withdraw
        </SecondaryButton>
        <PrimaryButton
          onClick={() =>
            setType(
              transactionType.DEPOSIT === type ? null : transactionType.DEPOSIT
            )
          }
        >
          Deposit
        </PrimaryButton>
      </ButtonsWrapper>
      {type && (
        <Form
          type={type}
          currenciesData={currenciesData}
          onSubmit={handleSubmit}
        />
      )}
    </Card>
  );
};
