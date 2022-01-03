import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import { CenteredLayout } from 'styles/layout';
import { LoaderIcon, LoaderText } from './styles';

const Loader = () => {
  return (
    <CenteredLayout>
      <LoaderIcon icon={faSpinner} spin />
      <LoaderText>Loading data</LoaderText>
    </CenteredLayout>
  );
};

export default Loader;
