import React, { Component } from "react";
import { Container } from "../ui/Container";
import { PrimaryButton, SecondaryButton } from "../ui/buttons";
import styled from "styled-components";

const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 40px 0;
`;

export class TransactionForm extends Component {
  constructor() {
    super();
    this.state = {
      type: null,
    };
  }

  clickOnWithdraw() {
    this.setState({
      type: "withdraw",
    });
  }

  clickOnDeposit() {
    this.setState({
      type: "deposit",
    });
  }

  render() {
    return (
      <Container>
        <ButtonsWrapper>
          <SecondaryButton
            onClick={() => {
              this.clickOnWithdraw();
            }}
          >
            Withdraw
          </SecondaryButton>
          <PrimaryButton
            onClick={() => {
              this.clickOnDeposit();
            }}
          >
            Deposit
          </PrimaryButton>
        </ButtonsWrapper>
      </Container>
    );
  }
}
