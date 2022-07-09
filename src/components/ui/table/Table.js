import styled from "styled-components";
import { rgba } from "polished";

export const Table = styled.table`
  margin-top: 20px;
  margin-bottom: 20px;
  border: 2px solid ${({ theme }) => theme.colors.tertiaryShade};
  border-collapse: collapse;
  width: 100%;
  box-shadow: ${({ theme }) => rgba(theme.colors.tertiaryShade2, 0.16)} 0px 3px
      6px,
    ${({ theme }) => rgba(theme.colors.tertiaryShade2, 0.23)} 0px 3px 6px;
`;
