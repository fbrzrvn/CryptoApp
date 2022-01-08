import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';
import { COLORS } from 'styles/Colors';

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${COLORS.white};
  border: 1px solid ${COLORS.gris400};
  border-radius: 6px;
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
  gap: 0.5rem;
  padding: 1rem;
  background: ${COLORS.gris200};
`;
export const CardHeaderAvatar = styled.img`
  height: 35px;
  width: 35px;
  border-radius: 50%;
`;
export const CardHeaderDate = styled.div`
  display: flex;
  align-items: center;
  white-space: nowrap;
`;
export const CardHeaderDateIcon = styled(FontAwesomeIcon)`
  color: ${COLORS.gris800};
  font-size: 0.75rem;
`;
export const CardHeaderDateText = styled.h6`
  color: ${COLORS.gris800};
  margin-left: 0.25rem;
`;
export const CardBody = styled.div`
  flex: 1;
  padding: 1rem;
`;
export const CardTitle = styled.h3`
  margin-bottom: 0.5rem;
  color: ${COLORS.gris900};
  font-size: 1.5rem;
  line-height: 1.1;
`;
export const CardDescription = styled.p`
  margin-bottom: 0.5rem;
`;
