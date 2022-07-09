import { rgba } from "polished";
import styled from "styled-components";

export const TableHead = styled.thead`
  border-bottom: 3px solid
    ${({ theme }) => rgba(theme.colors.tertiaryShade, 0.5)};
  padding: 10px;
  height: auto;
`;
