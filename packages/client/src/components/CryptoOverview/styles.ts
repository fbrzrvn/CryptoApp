import styled from 'styled-components';
import { COLORS } from 'styles/Colors';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin: 1rem auto;
  padding: 0.5rem 1rem;
  border: 1px solid ${COLORS.blue50};
  border-radius: 6px;
`;
export const Wrapper = styled.div`
  display: flex;
  align-items: stretch;
  gap: 2rem;
`;
export const WrapperInner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const Label = styled.p`
  color: ${COLORS.gris600};
  font-weight: 700;
  font-size: 1.1rem;
  user-select: none;
`;
export const PriceText = styled.p`
  color: ${COLORS.black};
  font-weight: 700;
  font-size: 1.4rem;
  user-select: none;
`;
export const ChangeText = styled.p<{ status: string }>`
  margin: auto;
  color: ${({ status }) =>
    status === 'up' ? `${COLORS.success700}` : `${COLORS.danger700}`};
  font-weight: 700;
  font-size: 1.2rem;
  user-select: none;
`;
