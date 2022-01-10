import getCrypto from 'api/getCrypto';
import { Dashboard, Loader, LoadError } from 'components';
import CryptoDetails from 'components/CryptoDetails';
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
  );

  return (
    <Dashboard>
      <MainInnerLayout>
        {isLoading && <Loader />}
        {isError && <LoadError error={error.message} />}
        {data && <CryptoDetails {...data} />}
      </MainInnerLayout>
    </Dashboard>
  );
};

export default Crypto;
