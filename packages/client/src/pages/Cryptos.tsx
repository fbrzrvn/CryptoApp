import getCryptos from 'api/getCryptos';
import {
  CryptoCard,
  Dashboard,
  Loader,
  LoadError,
  Pagination,
  Select,
} from 'components';
import { CurrencyContext } from 'context/Currency';
import mapCryptos from 'mappers/cryptos';
import { CryptosResponseData, ICryptos } from 'models/Cryptos';
import React from 'react';
import { useQuery } from 'react-query';
import { FlexBetweenLayout, GridLayout, MainInnerLayout } from 'styles/Layout';
import { getCurrencySymbol } from 'utils';

const Cryptos: React.VFC = () => {
  const { currency } = React.useContext(CurrencyContext);
  const [offset, setOffset] = React.useState(0);

  const { data, error, isError, isLoading } = useQuery<
    CryptosResponseData,
    Error
  >(['cryptos', offset, currency], () => getCryptos(offset, currency));

  if (data) {
    var mappedCryptos = data?.coins.map((crypto: ICryptos) =>
      mapCryptos(crypto),
    );
  }

  return (
    <Dashboard>
      <MainInnerLayout>
        <FlexBetweenLayout>
          <h2>All cryptocurrency prices</h2>
          <Select />
        </FlexBetweenLayout>
        <GridLayout>
          {isLoading && <Loader />}
          {isError && <LoadError error={error.message} />}
          {data &&
            mappedCryptos.map((crypto) => (
              <CryptoCard
                key={crypto.uuid}
                crypto={crypto}
                currency={getCurrencySymbol(currency)}
              />
            ))}
        </GridLayout>
        <Pagination offset={offset} setOffset={setOffset} data={data} />
      </MainInnerLayout>
    </Dashboard>
  );
};

export default Cryptos;
