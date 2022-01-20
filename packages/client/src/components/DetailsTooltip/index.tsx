import { faQuestionCircle } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { millify } from 'millify';
import React from 'react';
import {
  Container,
  Details,
  Tooltip,
  TooltipInner,
  TooltipTitle,
  TooltipValue,
} from './styles';

interface DetailsTooltipProps {
  totalSupply: number;
  circulatingSupply: number;
}

const DetailsTooltip: React.VFC<DetailsTooltipProps> = ({
  totalSupply,
  circulatingSupply,
}) => {
  return (
    <Container>
      <Tooltip>
        <FontAwesomeIcon icon={faQuestionCircle} /> Details
        <Details>
          <TooltipInner>
            <TooltipTitle>Total supply</TooltipTitle>
            <TooltipValue>{millify(totalSupply)}</TooltipValue>
          </TooltipInner>
          <TooltipInner>
            <TooltipTitle>
              There are no burned, team or smart contract locked balances to
              subtract.
            </TooltipTitle>
          </TooltipInner>
          <TooltipInner>
            <TooltipTitle>Circulating supply</TooltipTitle>
            <TooltipValue>{millify(circulatingSupply)}</TooltipValue>
          </TooltipInner>
        </Details>
      </Tooltip>
    </Container>
  );
};

export default DetailsTooltip;
