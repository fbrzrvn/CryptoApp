import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
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
    & h3 {
      color: ${COLORS.blue700};
    }
  }
`;
export const CardHeader = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin-bottom: 1rem;
`;
export const CardHeaderText = styled.div`
  display: flex;
  flex-direction: column;
`;
export const CardHeaderTitle = styled.h3`
  font-size: 1.5rem;
`;
export const CardHeaderSymbol = styled.small`
  color: ${COLORS.gris700};
  font-weight: 500;
  font-size: 1rem;
`;
export const CardImg = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;
export const CardFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const CardPrice = styled.h2`
  color: ${COLORS.gris900};
  font-weight: 500;
  font-size: 2rem;
`;
export const CardFooterWrapper = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.5rem;
`;
export const CardFooterIcon = styled(FontAwesomeIcon)<{ status: string }>`
  color: ${({ status }) =>
    status === 'up' ? `${COLORS.success700}` : `${COLORS.danger700}`};
`;
export const CardFooterText = styled.p`
  margin-left: 0.5rem;
  font-weight: 300;
`;
