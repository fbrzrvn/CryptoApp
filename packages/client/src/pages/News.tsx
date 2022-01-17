import getNews from 'api/getNews';
import { Dashboard, Loader, LoadError, NewsCard, NewsTags } from 'components';
import { NewsMapped } from 'models/News';
import React from 'react';
import { useQuery } from 'react-query';
import { GridLayout, MainInnerLayout } from 'styles/Layout';

const News: React.VFC = () => {
  const [category, setCategory] = React.useState('cryptocurrency');
  const { data, error, isError, isLoading } = useQuery<NewsMapped[], Error>(
    ['news', category],
    () => getNews(category),
  );

  return (
    <Dashboard>
      <MainInnerLayout>
        <h2>News page</h2>
        <NewsTags category={category} setCategory={setCategory} />
        <GridLayout>
          {isLoading && <Loader />}
          {isError && <LoadError error={error.message} />}
          {data && data.map((news, i) => <NewsCard key={i} {...news} />)}
        </GridLayout>
      </MainInnerLayout>
    </Dashboard>
  );
};

export default News;
