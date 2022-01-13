import styled from 'styled-components';
import { COLORS } from './Colors';

type MainLayoutProps = {
  removePadding?: boolean;
  removeBg?: boolean;
};

export const MainInnerLayout = styled.div<MainLayoutProps>`
  min-height: 100%;
  max-width: 1100px;
  margin: auto;
  padding: ${({ removePadding }) => (removePadding ? '1rem' : '1.5rem')};
  background-color: ${({ removeBg }) => (removeBg ? '' : `${COLORS.gris100}`)};
`;
export const CenteredLayout = styled.div`
  display: grid;
  place-items: center;
  padding: 0.5rem;
`;
export const GridLayout = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  align-items: stretch;
  justify-content: center;
  gap: 1rem;
  padding: 1.5rem 0;
`;
export const FlexBetweenLayout = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
