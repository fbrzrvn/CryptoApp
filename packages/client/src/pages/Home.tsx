import { Dashboard } from 'components';
import logo from 'logo.svg';
import React from 'react';

const Home = () => {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    fetch('http://localhost:4000/')
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);

  return (
    <Dashboard>
      <img src={logo} className="App-logo" alt="logo" />
      <p>{!data ? 'Loading...' : data}</p>
    </Dashboard>
  );
};

export default Home;
