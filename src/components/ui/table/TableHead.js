import styled from 'styled-components';

export const TableHead = styled.thead`
  border: 1px solid red;
  /* ${({ theme }) => {
    console.log(theme.colors.primary);

    return theme.colors.primary;
  }}; */
  padding: 10px;
  height: auto;
  color: ${({ theme }) => theme.colors.red};
`;
