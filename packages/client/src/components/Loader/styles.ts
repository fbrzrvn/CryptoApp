import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';
import { COLORS } from 'styles/Colors';

export const LoaderIcon = styled(FontAwesomeIcon)`
  height: 2.5rem;
  width: 2.5rem !important;
  margin: 0.5rem auto;
  color: ${COLORS.gris500};
`;
export const LoaderText = styled.p`
  font-size: 0.9rem;
`;
