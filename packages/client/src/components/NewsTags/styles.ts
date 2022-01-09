import styled from 'styled-components';
import { COLORS } from 'styles/Colors';

export const TagsWrapper = styled.div`
  position: sticky;
  top: 0;
  display: flex;
  margin-top: 1rem;
  padding: 1rem 0;
  background: ${COLORS.gris100};
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;
  overflow-x: scroll;
  cursor: pointer;
  @media screen and (min-width: 992px) {
    top: -1.5rem;
  }
`;
export const Tag = styled.span<{ isActive: boolean }>`
  flex-shrink: 0;
  margin-right: 0.5rem;
  padding: 0.25rem 0.5rem;
  color: ${({ isActive }) =>
    isActive ? `${COLORS.blue500}` : `${COLORS.gris900}`};
  border-bottom: ${({ isActive }) =>
    isActive ? `3px solid ${COLORS.blue500}` : '3px solid transparent'};
  font-weight: 500;
  font-size: 1.1rem;
  line-height: 1.1;
  letter-spacing: 1px;
  scroll-snap-align: center;
  &:last-of-type {
    margin-right: 0;
  }
  &:hover {
    color: ${COLORS.blue500};
  }
`;
