import getNotFound from 'api/getNotFound';
import { Loader, LoadError } from 'components';
import React from 'react';
import { useQuery } from 'react-query';
import { CenteredLayout, MainInnerLayout } from 'styles/Layout';

const NotFound: React.VFC = () => {
  const { error, isError, isLoading } = useQuery<string, Error>(
    'not-found',
    getNotFound,
  );

  return (
    <MainInnerLayout>
      <CenteredLayout>
        {isLoading && <Loader />}
        {isError && <LoadError error={error.message} />}
      </CenteredLayout>
    </MainInnerLayout>
  );
};

export default NotFound;
