import React, { Component } from "react";
import { Container } from "../ui/Container";
import { PrimaryButton } from "../ui/buttons"

export class TransactionForm extends Component {
    constructor() {
        super();
        this.state = {
            type: null,
        }
    }

    clickOnWithdraw() {
        this.setState({
            type: "withdraw"
    })}

    clickOnDeposit() {
        this.setState({
            type: "deposit"
        })
    }

    render() {
        console.log(this.state);
        return <Container>
            <PrimaryButton onClick={() => {
                this.clickOnWithdraw()
            }}>Withdraw</PrimaryButton>
            <PrimaryButton onClick={() => {
                this.clickOnDeposit()
            }}>Deposit</PrimaryButton>
        </Container>
    }
}