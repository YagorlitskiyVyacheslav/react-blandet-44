import { rgba } from "polished";
import styled from "styled-components";
import { transactionType } from "constants";

export const TableRow = styled.tr`
  border-bottom: 1px solid ${({ theme }) => theme.colors.tertiaryShade};
  padding: 10px;
  background-color: ${({ theme, type }) =>
    type === transactionType.DEPOSIT
      ? rgba(theme.colors.success, 0.05)
      : rgba(theme.colors.danger, 0.05)};
  color: ${({ theme, type }) =>
    type === transactionType.DEPOSIT
      ? rgba(theme.colors.success, 0.9)
      : rgba(theme.colors.danger, 0.9)};
`;
