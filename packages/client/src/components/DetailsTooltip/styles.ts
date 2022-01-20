import styled from 'styled-components';
import { COLORS } from 'styles/Colors';

export const Container = styled.div`
  position: relative;
`;
export const Tooltip = styled.div`
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
export const Details = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  width: fit-content;
  color: ${COLORS.blue900};
  font-weight: 700;
  cursor: default;
  &:hover {
    color: ${COLORS.black};
    ${Tooltip} {
      display: flex;
    }
  }
`;
export const TooltipInner = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  border-bottom: 1px solid ${COLORS.gris300};
  &:last-of-type {
    border-bottom: none;
  }
`;
export const TooltipTitle = styled.p`
  font-weight: 400;
  color: ${COLORS.blue900};
`;
export const TooltipValue = styled.p`
  font-weight: 700;
  color: ${COLORS.blue900};
`;
