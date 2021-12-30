import styled from 'styled-components';
import { COLORS } from './Colors';

export const MainInnerLayout = styled.div`
  min-height: 100vh;
  max-width: 1100px;
  margin: auto;
  padding: 1.5rem;
  background-color: ${COLORS.gris100};
`;
export const CenteredLayout = styled.div`
  display: grid;
  place-items: center;
`;
