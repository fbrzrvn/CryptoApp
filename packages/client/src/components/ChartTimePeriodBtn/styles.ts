import styled from 'styled-components';
import { COLORS } from 'styles/Colors';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: calc(100vw - 2rem);
  margin: 1rem auto;
  padding: 0.25rem;
  border-radius: 6px;
  @media screen and (min-width: 400px) {
    width: max-content;
    border: 1px solid ${COLORS.gris300};
  }
  @media screen and (min-width: 883px) {
    padding: 0.25rem 0.5rem;
  }
`;
export const Btn = styled.button<{ isActive: boolean }>`
  background: ${({ isActive }) =>
    isActive ? `${COLORS.blue700}` : `${COLORS.white}`};
  border: none;
  border-radius: 4px;
  padding: 0.5rem;
  margin: 0 0.25rem;
  color: ${({ isActive }) =>
    isActive ? `${COLORS.white}` : `${COLORS.blue700}`};
  font-weight: 700;
  font-family: 'Montserrat', sans-serif;
  text-transform: uppercase;
  cursor: pointer;
  transition: all 0.25s ease-in-out;
  &:hover {
    background: ${({ isActive }) => !isActive && `${COLORS.blue50}`};
  }
  @media screen and (min-width: 768px) {
    padding: 0.5rem 1rem;
  }
`;
