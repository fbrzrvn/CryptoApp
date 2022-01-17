import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';
import { COLORS } from 'styles/Colors';

export const StatsContainer = styled.div`
  width: 100%;
  margin: 1rem auto;
`;
export const StatsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  padding: 1rem 0.5rem;
  border-bottom: 1px solid ${COLORS.blue50};
  &:last-of-type {
    border-bottom: none;
  }
  @media screen and (min-width: 768px) {
    padding: 1rem;
  }
`;
export const StatsWrapperInner = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;
export const StatsIcon = styled(FontAwesomeIcon)`
  color: ${COLORS.blue700};
  font-size: 1.5rem;
  cursor: pointer;
`;
export const StatsTitle = styled.p`
  color: ${COLORS.black};
  font-size: 1rem;
  user-select: none;
`;
export const InfoTooltipWrapper = styled.div`
  position: relative;
  flex: 1;
`;
export const StatsInfoIcon = styled(FontAwesomeIcon)`
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
export const InfoTooltip = styled.div<{ show: boolean }>`
  position: absolute;
  bottom: 2rem;
  left: 60%;
  transform: translateX(-40%);
  display: ${({ show }) => (show ? 'block' : 'none')};
  width: 280px;
  padding: 0.75rem 1rem;
  background: ${COLORS.blue50};
  border-radius: 0.5rem;
  color: ${COLORS.blue900};
  font-weight: 500;
  font-size: 1rem;
  transition: all 0.25s ease-in-out;
  &:after {
    content: '';
    position: absolute;
    bottom: -0.5rem;
    left: 40%;
    transform: translateX(-60%);
    border-left: 0.5rem solid transparent;
    border-right: 0.5rem solid transparent;
    border-top: 0.5rem solid ${COLORS.blue50};
  }
`;
export const InfoTooltipText = styled.p`
  font-size: 0.9rem;
`;
export const StatsValue = styled.p`
  color: ${COLORS.black};
  font-weight: 700;
  font-size: 1rem;
  text-align: right;
  user-select: none;
`;
export const StatsComment = styled.p`
  color: ${COLORS.black};
  font-size: 0.9rem;
  font-weight: 400;
  text-align: right;
  user-select: none;
`;
