import { Dashboard } from 'components';
import logo from 'logo.svg';
import React from 'react';

const News = () => {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    fetch('http://localhost:4000/')
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);

  return (
    <Dashboard>
      <img src={logo} className="App-logo" alt="logo" />
      <h2>{!data ? 'Loading...' : data}</h2>
    </Dashboard>
  );
};

export default News;
