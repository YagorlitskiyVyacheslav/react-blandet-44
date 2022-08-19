import { useState, useEffect } from "react";
import { newsSearch } from "api/rapid-api/newsSearch";
import { NewsList } from "components/NewsList";

const News = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const getNews = async () => {
      const response = await newsSearch();
      setNews(response.data.value);
    };
    getNews();
  }, []);

  return <NewsList news={news} />;
};

export default News;
