import styled from 'styled-components';

export const PrimaryButton = styled.button`
  outline: none;
  border: none;
  border-radius: 5px;
  padding: 5;
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: capitalize;
  color: ${({theme}) => theme.colors.primary};
  background-color: ${({theme}) => theme.colors.accent};
  cursor: pointer;
`;