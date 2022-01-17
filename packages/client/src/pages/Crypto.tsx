import getCrypto from 'api/getCrypto';
import { CryptoDetails, Dashboard, Loader, LoadError } from 'components';
import { CurrencyContext } from 'context/Currency';
import { CryptoMapped } from 'models/Crypto';
import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import { MainInnerLayout } from 'styles/Layout';

const Crypto: React.VFC = () => {
  const { currency } = React.useContext(CurrencyContext);
  const { id } = useParams();

  const { data, error, isError, isLoading } = useQuery<CryptoMapped, Error>(
    ['crypto', id, currency],
    () => getCrypto(id, currency),
    {
      staleTime: Infinity,
    },
  );

  return (
    <Dashboard>
      <MainInnerLayout removeBg removePadding>
        {isLoading && <Loader />}
        {isError && <LoadError error={error.message} />}
        {data && <CryptoDetails crypto={data} />}
      </MainInnerLayout>
    </Dashboard>
  );
};

export default Crypto;
