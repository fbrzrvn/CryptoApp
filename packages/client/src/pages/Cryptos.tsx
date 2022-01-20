import getCryptos from 'api/getCryptos';
import { CryptoCard, Dashboard, Loader, LoadError, Select } from 'components';
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
  const [page, setPage] = React.useState(1);

  const { data, error, isError, isLoading } = useQuery<
    CryptosResponseData,
    Error
  >(['cryptos', offset, currency], () => getCryptos(offset, currency));

  if (data) {
    var mappedCryptos = data?.coins.map((crypto: ICryptos) =>
      mapCryptos(crypto),
    );
  }

  const totalPages = Math.ceil(data?.stats?.totalCoins / 100);

  const handleNextPage = () => {
    setOffset(offset + 100);
    setPage(page + 1);
  };

  const handlePrevPage = () => {
    setOffset(offset - 100);
    setPage(page - 1);
  };

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
            mappedCryptos.map((crypto) => (
              <CryptoCard
                key={crypto.uuid}
                crypto={crypto}
                currency={getCurrencySymbol(currency)}
              />
            ))}
        </GridLayout>
        <h3>Total coins: {data?.stats.totalCoins}</h3>
        <h3>Total markets: {data?.stats.totalMarkets}</h3>
        {page > 1 && (
          <button type="button" onClick={handlePrevPage}>
            Prev Page
          </button>
        )}
        <h3>{page}</h3>
        {page < totalPages && (
          <button type="button" onClick={handleNextPage}>
            Next Page
          </button>
        )}
      </MainInnerLayout>
    </Dashboard>
  );
};

export default Cryptos;
