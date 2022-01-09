import getCryptos from 'api/getCryptos';
import { CryptoCard, Dashboard, Loader, LoadError, Select } from 'components';
import { CurrencyContext } from 'context/Currency';
import { CryptosMapped } from 'models/Cryptos';
import React from 'react';
import { useQuery } from 'react-query';
import { FlexBetweenLayout, GridLayout, MainInnerLayout } from 'styles/layout';

const Cryptos = () => {
  const { currency } = React.useContext(CurrencyContext);

  const { data, error, isError, isLoading } = useQuery<CryptosMapped[], Error>(
    ['cryptos', currency],
    () => getCryptos(currency),
  );

  return (
    <Dashboard>
      <MainInnerLayout>
        <FlexBetweenLayout>
          <h2>Best 100 cryptos in the world</h2>
          <Select />
        </FlexBetweenLayout>
        <GridLayout>
          {isLoading && <Loader />}
          {isError && <LoadError error={error.message} />}
          {data &&
            data.map((crypto) => (
              <CryptoCard key={crypto.id} crypto={crypto} currency={currency} />
            ))}
        </GridLayout>
      </MainInnerLayout>
    </Dashboard>
  );
};

export default Cryptos;
