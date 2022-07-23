import React from "react";
import styled from "styled-components";
import { Container } from "./Container";
import { Navigation } from "./Navigation";

const StyledHeader = styled.div`
    padding: 20px 0;
    background-color: ${({ theme }) => theme.colors.primaryShade};

`

export const Header = () => {
    return(
        <StyledHeader>
            <Container>
                <Navigation/>
            </Container>
        </StyledHeader>
    )
}
