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
  gap: 1rem;
  @media (min-width: 680px) {
    flex-direction: row;
  }
  @media screen and (min-width: 1280px) {
    flex-direction: column;
    margin-bottom: 1rem;
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
export const OverviewSupplyDetailsWrapper = styled.div`
  position: relative;
`;
export const DetailsTooltip = styled.div`
  position: absolute;
  bottom: -220px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1;
  display: none;
  flex-direction: column;
  width: 330px;
  padding: 0.5rem 1rem;
  background-color: ${COLORS.white};
  border-radius: 8px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  transition: all 0.25s ease-in-out;
  &:before {
    content: '';
    position: absolute;
    top: -0.5rem;
    left: 50%;
    transform: translateX(-50%);
    border-left: 0.5rem solid transparent;
    border-right: 0.5rem solid transparent;
    border-bottom: 0.5rem solid ${COLORS.white};
  }
`;
export const OverviewSupplyDetails = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  width: fit-content;
  color: ${COLORS.blue900};
  font-weight: 700;
  cursor: default;
  &:hover {
    color: ${COLORS.black};
    ${DetailsTooltip} {
      display: flex;
    }
  }
`;
export const DetailsTooltipInner = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  border-bottom: 1px solid ${COLORS.gris300};
  &:last-of-type {
    border-bottom: none;
  }
`;
export const DetailsTooltipTitle = styled.p`
  font-weight: 400;
  color: ${COLORS.blue900};
`;
export const DetailsTooltipValue = styled.p`
  font-weight: 700;
  color: ${COLORS.blue900};
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
