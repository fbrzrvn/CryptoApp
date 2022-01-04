import getNews from 'api/getNews';
import { Dashboard, Loader, LoadError } from 'components';
import { NewsMapped } from 'Models/News';
import React from 'react';
import { useQuery } from 'react-query';
import { MainInnerLayout } from 'styles/layout';

const News = () => {
  const { data, error, isError, isLoading } = useQuery<NewsMapped[], Error>(
    'news',
    getNews,
  );

  return (
    <Dashboard>
      <MainInnerLayout>
        <h2>News page</h2>
        {isLoading && <Loader />}
        {isError && <LoadError error={error.message} />}
        {data && data.map((item) => <p key={item.id}>{item.title}</p>)}
      </MainInnerLayout>
    </Dashboard>
  );
};

export default News;
