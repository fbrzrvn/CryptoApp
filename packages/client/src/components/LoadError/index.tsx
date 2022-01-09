import { faCogs } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import { CenteredLayout } from 'styles/Layout';
import { LoadErrorIcon, LoadErrorText } from './styles';

interface LoadErrorProps {
  error: string;
}

const LoadError: React.VFC<LoadErrorProps> = ({ error }) => {
  return (
    <CenteredLayout>
      <LoadErrorIcon icon={faCogs} />
      <LoadErrorText>{error}</LoadErrorText>
    </CenteredLayout>
  );
};

export default LoadError;
