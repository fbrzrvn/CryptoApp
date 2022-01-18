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
