import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';
import { COLORS } from 'styles/Colors';

export const CryptoHeader = styled.div`
  display: flex;
  align-items: center;
  height: 4rem;
  margin-bottom: 1rem;
`;
export const CryptoImage = styled.img`
  height: 50px;
  width: 50px;
  margin-right: 10px;
  border-radius: 50%;
`;
export const CryptoTitle = styled.h2`
  font-size: 2rem;
`;
export const CryptoSubtitle = styled.p`
  font-size: 1.5rem;
  font-weight: 300;
  margin-bottom: 1rem;
`;
export const CryptoFlexLayout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 1rem;
  @media screen and (min-width: 1280px) {
    flex-direction: row;
  }
`;
export const CryptoSection = styled.section`
  display: flex;
  flex-direction: column;
  margin: 1rem 0 2rem;
`;
export const CryptoLabel = styled.h3`
  margin-bottom: 1.25rem;
  color: ${COLORS.gris800};
  font-style: italic;
  font-size: 1.2rem;
  letter-spacing: 0.02em;
  text-transform: uppercase;
  border-bottom: 1px solid ${COLORS.gris400};
`;
export const CryptoDescription = styled.div`
  margin: 1rem 0 2rem;
  & p {
    font-size: 1.1rem;
    font-weight: 300;
    line-height: 1.5;
  }
`;
export const CryptoLinksWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  padding: 1rem 0;
  border-bottom: 1px solid ${COLORS.blue50};
  cursor: pointer;
  transition: all 0.25s ease-in-out;
  &:hover {
    box-shadow: 0px 1px 3px ${COLORS.blue50};
  }
  @media screen and (min-width: 768px) {
    padding: 1rem;
  }
`;
export const CryptoIconLink = styled(FontAwesomeIcon)`
  color: ${COLORS.blue700};
  font-size: 1.2rem;
`;
export const CryptoTypeLink = styled.p`
  flex: 1;
  color: ${COLORS.black};
  font-weight: 700;
  font-size: 1rem;
  text-transform: capitalize;
`;
export const CryptoNameLink = styled.p`
  color: ${COLORS.black};
  font-size: 1rem;
`;
