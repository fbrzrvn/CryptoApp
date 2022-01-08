import styled from 'styled-components';
import { COLORS } from 'styles/Colors';

export const TagsWrapper = styled.div`
  display: flex;
  margin-top: 1rem;
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;
  overflow-x: scroll;
  cursor: pointer;
`;
export const Tag = styled.span<{ isActive: boolean }>`
  flex-shrink: 0;
  margin-right: 0.5rem;
  padding: 0.25rem 0.5rem;
  background: ${({ isActive }) => (isActive ? `${COLORS.blue50}` : '')};
  border-radius: 4px;
  color: ${({ isActive }) =>
    isActive ? `${COLORS.blue500}` : `${COLORS.gris900}`};
  font-family: 'Montserrat', sans-serif;
  font-weight: 500;
  font-size: 1rem;
  line-height: 1.1;
  letter-spacing: 1px;
  scroll-snap-align: start;
  &:hover {
    color: ${COLORS.blue500};
  }
`;
