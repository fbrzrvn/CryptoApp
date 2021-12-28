import React from 'react';

const NotFound = () => {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    fetch('http://localhost:4000/*')
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);

  return (
    <div>
      <h1>{!data ? 'Loading...' : data}</h1>
    </div>
  );
};

export default NotFound;
