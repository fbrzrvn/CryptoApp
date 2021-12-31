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
`;
export const CardHeader = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin-bottom: 0.5rem;
`;
export const CardHeaderText = styled.div`
  display: flex;
  flex-direction: column;
`;
export const CardHeaderTitle = styled.h3`
  font-size: 1.25rem;
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
export const CardPrice = styled.h2`
  margin-bottom: 0.5rem;
  color: ${COLORS.gris900};
  font-weight: 400;
  font-size: 2rem;
`;
export const CardFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const CardFooterWrapper = styled.div`
  display: flex;
  align-items: center;
`;
export const CardFooterIcon = styled(FontAwesomeIcon)<{ status: string }>`
  color: ${({ status }) =>
    status === 'up' ? `${COLORS.success700}` : `${COLORS.danger700}`};
`;
export const CardFooterText = styled.p`
  margin-left: 0.5rem;
`;
