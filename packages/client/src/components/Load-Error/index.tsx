import { faCogs } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import { CenteredLayout } from 'styles/layout';
import { LoadErrorIcon, LoadErrorText } from './styles';

type LoadErrorProps = {
  error: string;
};
const LoadError = ({ error }: LoadErrorProps) => {
  return (
    <CenteredLayout>
      <LoadErrorIcon icon={faCogs} />
      <LoadErrorText>{error}</LoadErrorText>
    </CenteredLayout>
  );
};

export default LoadError;
