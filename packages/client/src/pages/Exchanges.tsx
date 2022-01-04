import getExchanges from 'api/getExchanges';
import { Dashboard, Loader, LoadError } from 'components';
import { ExchangesMapped } from 'Models/Exchanges';
import React from 'react';
import { useQuery } from 'react-query';
import { MainInnerLayout } from 'styles/layout';

const Exchanges = () => {
  const { data, error, isError, isLoading } = useQuery<
    ExchangesMapped[],
    Error
  >('news', getExchanges);

  return (
    <Dashboard>
      <MainInnerLayout>
        <h2>Top 100 exchanges platforms</h2>
        {isLoading && <Loader />}
        {isError && <LoadError error={error.message} />}
        {data && data.map((item) => <h5 key={item.id}>{item.name}</h5>)}
      </MainInnerLayout>
    </Dashboard>
  );
};

export default Exchanges;
