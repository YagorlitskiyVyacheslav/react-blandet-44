import React, { useState } from "react";
import { PrimaryButton, SecondaryButton } from "components/ui/buttons";
import styled from "styled-components";
import { transactionType } from "constants";
import { Form } from "./Form/Form";
import { Card } from "components/ui/Card";

const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 0 0 40px;
`;

export const TransactionForm = ({ onSubmit, currenciesData }) => {
  const [type, setType] = useState(null);

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
        <Form type={type} currenciesData={currenciesData} onSubmit={onSubmit} />
      )}
    </Card>
  );
};
