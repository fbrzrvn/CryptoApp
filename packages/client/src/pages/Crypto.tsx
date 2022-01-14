import getCrypto from 'api/getCrypto';
import getCryptoHistory from 'api/getCryptoHistory';
import { Dashboard, Loader, LoadError } from 'components';
import CryptoDetails from 'components/CryptoDetails';
import { CurrencyContext } from 'context/Currency';
import { CryptoHistory, CryptoMapped } from 'models/Crypto';
import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import { MainInnerLayout } from 'styles/Layout';

const Crypto: React.VFC = () => {
  const { currency } = React.useContext(CurrencyContext);
  const [timePeriod, setTimePeriod] = React.useState('1d');

  const { id } = useParams();

  const { data, error, isError, isLoading } = useQuery<CryptoMapped, Error>(
    ['crypto', id, currency],
    () => getCrypto(id, currency),
    {
      staleTime: Infinity,
    },
  );

  const {
    data: history,
    error: historyError,
    isError: historyIsError,
    isLoading: historyIsLoading,
  } = useQuery<CryptoHistory[], Error>(
    ['cryptoHistory', id, timePeriod, currency],
    () => getCryptoHistory(id, timePeriod, currency),
    {
      staleTime: Infinity,
    },
  );

  return (
    <Dashboard>
      <MainInnerLayout removeBg removePadding>
        {(isLoading || historyIsLoading) && <Loader />}
        {(isError || historyIsError) && (
          <LoadError error={error.message || historyError.message} />
        )}
        {data && history && (
          <CryptoDetails
            crypto={data}
            history={history}
            timePeriod={timePeriod}
            setTimePeriod={setTimePeriod}
          />
        )}
      </MainInnerLayout>
    </Dashboard>
  );
};

export default Crypto;
