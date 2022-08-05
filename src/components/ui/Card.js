import styled from "styled-components";

const Wrapper = styled.div`
  margin: 20px 0;
  padding: 20px;
  background-color: ${({ theme }) => theme.colors.secondary};
  border-radius: 15px;
`;

const Title = styled.h2`
  margin-bottom: 20px;
  font-size: 24px;
  text-align: center;
`;

export const Card = ({ title, children }) => {
  return (
    <Wrapper>
      <Title>{title}</Title>
      {children}
    </Wrapper>
  );
};
