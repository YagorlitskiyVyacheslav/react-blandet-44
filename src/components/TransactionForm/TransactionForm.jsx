import React, { useState } from "react";
import { Container } from "components/ui/Container";
import { PrimaryButton, SecondaryButton } from "components/ui/buttons";
import styled from "styled-components";
import { transactionType } from "constants";
import { Form } from "./Form";

const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 40px 0;
`;

export const TransactionForm = ({ onSubmit }) => {
  const [type, setType] = useState(null);

  return (
    <Container>
      <ButtonsWrapper>
        <SecondaryButton onClick={() => setType(transactionType.WITHDRAW)}>
          Withdraw
        </SecondaryButton>
        <PrimaryButton onClick={() => setType(transactionType.DEPOSIT)}>
          Deposit
        </PrimaryButton>
      </ButtonsWrapper>
      {type && <Form type={type} onSubmit={onSubmit} />}
    </Container>
  );
};
