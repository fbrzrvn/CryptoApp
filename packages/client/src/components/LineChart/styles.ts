import styled from 'styled-components';
import { COLORS } from 'styles/Colors';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 1rem auto;
  padding: 1rem;
  border: 1px solid ${COLORS.gris300};
  border-radius: 6px;
`;

export const ChartWrapper = styled.div`
  width: 100%;
  min-height: 350px;
  height: 100%;
`;
