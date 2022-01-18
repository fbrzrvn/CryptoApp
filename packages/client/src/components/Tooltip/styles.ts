import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';
import { COLORS } from 'styles/Colors';

export const Container = styled.div`
  position: relative;
`;
export const Icon = styled(FontAwesomeIcon)`
  height: auto;
  width: 1.1rem;
  background: ${COLORS.blue700};
  border-radius: 50%;
  color: ${COLORS.blue100};
  opacity: 0.8;
  transition: all 0.25s ease-in-out;
  &:hover {
    opacity: 1;
  }
`;
export const TooltipWrapper = styled.div<{ show: boolean }>`
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  display: ${({ show }) => (show ? 'block' : 'none')};
  width: 280px;
  padding: 0.75rem 1rem;
  background: ${COLORS.blue900};
  border-radius: 0.5rem;
  color: ${COLORS.blue50};
  font-weight: 500;
  font-size: 1rem;
  transition: all 0.25s ease-in-out;
  &:after {
    content: '';
    position: absolute;
    bottom: -0.5rem;
    left: 50%;
    transform: translateX(-50%);
    border-left: 0.5rem solid transparent;
    border-right: 0.5rem solid transparent;
    border-top: 0.5rem solid ${COLORS.blue900};
  }
`;
export const TooltipText = styled.p`
  font-size: 0.9rem;
`;
