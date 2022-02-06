import styled from 'styled-components';
import { COLORS } from 'styles/Colors';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  background-color: ${COLORS.blue50};
  background-color: ${COLORS.lightBlue50};
  border-radius: 8px;
`;
export const Overview = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  width: 100%;
  padding: 1.5rem 3rem 2rem;
  @media (min-width: 680px) {
    flex-direction: row-reverse;
  }
  @media screen and (min-width: 1280px) {
    flex-direction: column;
    justify-content: center;
  }
`;
export const OverviewPercentage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  width: 120px;
  height: 120px;
  border-radius: 50%;
  background-color: transparent;
  border: 7px solid ${COLORS.blue700};
`;
export const Percentage = styled.p`
  font-weight: 700;
  font-size: 1.2rem;
`;
export const OverviewInfo = styled.div`
  display: flex;
  flex-direction: column;
`;
export const OverviewInfoInner = styled.div`
  display: flex;
  flex-direction: column;
  @media (min-width: 680px) {
    flex-direction: row;
  }
  @media screen and (min-width: 1280px) {
    flex-direction: column;
  }
`;
export const OverviewSupplyVerified = styled.a`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: ${COLORS.success500};
  cursor: pointer;
  transition: all 0.25s ease-in-out;
  &:hover {
    color: ${COLORS.success700};
    text-decoration: none;
  }
`;
export const OverViewLastUpdate = styled.small`
  margin-top: 1.5rem;
  color: ${COLORS.blue900};
  font-size: 0.8rem;
`;
export const Wrapper = styled.div`
  display: flex;
  aling-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 1rem 2rem;
  border-top: 1px solid ${COLORS.gris400};
  border-top: 1px solid ${COLORS.lightBlue100};
  user-select: none;
  @media screen and (min-width: 1280px) {
    flex-direction: column;
    justify-content: center;
  }
`;
export const WrapperInner = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;
