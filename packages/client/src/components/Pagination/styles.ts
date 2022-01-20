import styled from 'styled-components';
import { COLORS } from 'styles/Colors';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 1rem;
`;
export const PageNumber = styled.span`
  color: ${COLORS.gris900};
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  font-size: 1rem;
  user-select: none;
`;
export const PageBtn = styled.button`
  padding: 0.5rem 1rem;
  opacity: 1;
  background: ${COLORS.blue900};
  border: 1px solid transparent;
  border-radius: 4px;
  color: ${COLORS.white};
  font-family: inherit;
  font-weight: 700;
  font-size: 0.9rem;
  cursor: pointer;
  transition: all 0.25s ease-in-out;
  &:hover {
    opacity: 0.9;
    border: 1px solid rgba(13, 71, 161, 0.9);
  }
`;
