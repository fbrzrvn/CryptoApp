import getCryptos from 'api/getCryptos';
import { Dashboard } from 'components';
import React from 'react';

const Cryptos = () => {
  const [cryptos, setCryptos] = React.useState([]);
  const [error, setError] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  const [limit, setLimit] = React.useState(50);

  React.useEffect(() => {
    setLoading(true);
    getCryptos(limit).then((payload) => {
      setLoading(false);
      if (payload.error) {
        setError(payload.error);
      }
      if (payload) {
        setCryptos(payload.data);
      }
      console.log(payload);
    });
  }, [limit]);

  return (
    <Dashboard>
      <h2>Cryptos page</h2>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {cryptos.length > 0 &&
        cryptos.map((crypto) => <li key={crypto.id}>{crypto.name}</li>)}
      {limit <= 200 && (
        <button onClick={() => setLimit(limit + 50)}>Load more</button>
      )}
    </Dashboard>
  );
};

export default Cryptos;
