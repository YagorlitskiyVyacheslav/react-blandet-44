import styled from "styled-components";

const NewsListStyled = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  padding: 0;
`;

const NewsItem = styled.li`
  flex-basis: 25%;
  padding: 10px;
`;

export const NewsList = ({ news }) => (
  <NewsListStyled>
    {news.map(({ name, description, datePublished }) => (
      <NewsItem key={datePublished}>
        <h2>{name}</h2>
        <p>{description}</p>
      </NewsItem>
    ))}
  </NewsListStyled>
);
