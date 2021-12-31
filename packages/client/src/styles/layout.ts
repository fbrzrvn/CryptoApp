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

export const GridLayout = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(275px, 1fr));
  align-items: stretch;
  justify-content: center;
  gap: 1rem;
  padding: 1.5rem 0;
`;
