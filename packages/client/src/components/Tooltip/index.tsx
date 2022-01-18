import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import { Container, Icon, TooltipText, TooltipWrapper } from './styles';

interface InfoIconTooltipProps {
  item: any;
}

const Tooltip: React.VFC<InfoIconTooltipProps> = ({ item }) => {
  const [showTooltip, setShowTooltip] = React.useState({ [item.id]: false });

  return (
    <Container>
      <Icon
        icon={faInfoCircle}
        onMouseEnter={() =>
          setShowTooltip({
            ...showTooltip,
            [item.id]: true,
          })
        }
        onMouseLeave={() =>
          setShowTooltip({
            ...showTooltip,
            [item.id]: false,
          })
        }
      />
      <TooltipWrapper show={showTooltip[item.id]}>
        <TooltipText>{item.tooltipText}</TooltipText>
      </TooltipWrapper>
    </Container>
  );
};

export default Tooltip;
