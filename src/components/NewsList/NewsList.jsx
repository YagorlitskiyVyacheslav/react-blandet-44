import { Card } from "components/ui/Card";
import styled from "styled-components";

const NewsListStyled = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  padding: 0;
  gap: 15px;
`;

const NewsItem = styled.li`
  flex-basis: calc(25% - 15px);
  padding: 10px;
  background-color: ${({ theme }) => theme.colors.secondaryShade2};
  padding: 10px;
  border-radius: 10px;
  box-shadow: 5px 5px 5px -3px ${({ theme }) => theme.colors.tertiaryShade};
`;

export const NewsList = ({ news }) => (
  <Card title="Latest News">
    <NewsListStyled>
      {news.map(({ name, description, datePublished }) => (
        <NewsItem key={datePublished}>
          <h2>{name}</h2>
          <p>{description}</p>
        </NewsItem>
      ))}
    </NewsListStyled>
  </Card>
);
