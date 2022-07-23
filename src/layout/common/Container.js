import styled from "styled-components";

export const Container = styled.div`
  max-width: 1280px;
  width: 100%;
  padding: 0 20px;
  margin: 0 auto;
  background-color: ${({ theme }) => theme.colors.secondary};
`;
