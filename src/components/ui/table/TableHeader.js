import styled from "styled-components";

export const TableHeader = styled.th`
  text-transform: uppercase;
  text-align: left;
  padding: 1rem 2rem;
  color: ${({ theme }) => theme.colors.tertiaryShade2};
`;
