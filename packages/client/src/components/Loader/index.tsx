import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import { CenteredLayout } from 'styles/Layout';
import { LoaderIcon, LoaderText } from './styles';

const Loader: React.VFC = () => {
  return (
    <CenteredLayout>
      <LoaderIcon icon={faSpinner} spin />
      <LoaderText>Loading data</LoaderText>
    </CenteredLayout>
  );
};

export default Loader;
