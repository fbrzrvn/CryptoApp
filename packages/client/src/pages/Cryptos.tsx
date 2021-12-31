import getCryptos from 'api/getCryptos';
import { CryptoCard, Dashboard } from 'components';
import React from 'react';
import { CenteredLayout, GridLayout, MainInnerLayout } from 'styles/layout';

const Cryptos = () => {
  const [cryptos, setCryptos] = React.useState([]);
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    getCryptos().then((payload) => {
      if (payload.error) {
        setError(payload.error);
      }
      setCryptos(payload.data);
    });
  }, []);

  return (
    <Dashboard>
      <MainInnerLayout>
        <h2>Cryptos page</h2>
        {error && <p>{error}</p>}
        <GridLayout>
          {cryptos.length > 0 ? (
            cryptos.map((crypto) => <CryptoCard key={crypto.id} {...crypto} />)
          ) : (
            <CenteredLayout>
              <p>Loading...</p>
            </CenteredLayout>
          )}
        </GridLayout>
      </MainInnerLayout>
    </Dashboard>
  );
};

export default Cryptos;
