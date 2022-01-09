import styled from 'styled-components';
import { COLORS } from 'styles/Colors';

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${COLORS.white};
  border: 1px solid ${COLORS.gris300};
  border-radius: 6px;
  padding: 1rem;
  cursor: pointer;
  transition: all 0.25s ease-in-out;
  &:hover {
    box-shadow: 0px 0px 10px 0px ${COLORS.gris400};
    h3 {
      color: ${COLORS.blue700};
    }
  }
`;
export const CardHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const CardHeaderText = styled.div`
  flex: 1;
`;
export const CardHeaderTitle = styled.h3`
  font-size: 1.25rem;
`;
export const CardHeaderTextDetails = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;
export const CardDetails = styled.h5`
  color: ${COLORS.gris700};
  font-size: 0.9rem;
  letter-spacing: 0.0125rem;
`;
export const CardImg = styled.img`
  height: 50px;
  width: 50px;
  border-radius: 50%;
  object-fit: contain;
`;
