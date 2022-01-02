import getCryptos from 'api/getCryptos';
import { CryptoCard, Dashboard } from 'components';
import { CryptoMapped } from 'Models/Cryptos';
import React from 'react';
import { useQuery } from 'react-query';
import { CenteredLayout, GridLayout, MainInnerLayout } from 'styles/layout';

const Cryptos = () => {
  const { data, error, isError, isLoading } = useQuery<CryptoMapped[], Error>(
    'cryptos',
    getCryptos,
  );

  return (
    <Dashboard>
      <MainInnerLayout>
        <h2>Best 100 cryptos in the world</h2>
        <GridLayout>
          {isLoading && (
            <CenteredLayout>
              <p>Loading...</p>
            </CenteredLayout>
          )}
          {isError && (
            <CenteredLayout>
              <p>{error.message}</p>
            </CenteredLayout>
          )}
          {data &&
            data.map((crypto) => <CryptoCard key={crypto.id} {...crypto} />)}
        </GridLayout>
      </MainInnerLayout>
    </Dashboard>
  );
};

export default Cryptos;
