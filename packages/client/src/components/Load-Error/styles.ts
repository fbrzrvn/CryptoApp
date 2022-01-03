import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';
import { COLORS } from 'styles/Colors';

export const LoadErrorIcon = styled(FontAwesomeIcon)`
  height: 2.5rem;
  width: 3.5rem !important;
  margin: 0.5rem auto;
  color: ${COLORS.gris500};
`;
export const LoadErrorText = styled.p`
  font-size: 1.2rem;
`;
