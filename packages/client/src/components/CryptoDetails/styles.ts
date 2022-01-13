import styled from 'styled-components';
import { COLORS } from 'styles/Colors';

export const CryptoSection = styled.section`
  display: flex;
  flex-direction: column;
  margin: 1rem 0;
`;
export const CryptoHeader = styled.div`
  display: flex;
  align-items: center;
  height: 4rem;
`;
export const CryptoImage = styled.img`
  height: 50px;
  width: 50px;
  margin-right: 10px;
  border-radius: 50%;
`;
export const CryptoTitle = styled.h2`
  font-size: 1.5rem;
`;
export const CryptoSubtitle = styled.p`
  font-size: 1.15rem;
  font-weight: 300;
`;
export const CryptoLabel = styled.h3`
  margin-bottom: 1rem;
  color: ${COLORS.gris800};
  font-style: italic;
  font-size: 1rem;
  letter-spacing: 0.02em;
  text-transform: uppercase;
  border-bottom: 1px solid ${COLORS.gris400};
`;
export const CryptoDescription = styled.div`
  margin: 1rem 0;
  & p {
    font-size: 1.1rem;
    font-weight: 300;
    line-height: 1.5;
  }
`;
export const CryptoLinksWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(80px, 1fr));
  gap: 1rem;
  margin-top: 1rem;
`;
export const CryptoLink = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-transform: capitalize;
  .svg-inline--fa {
    width: 2rem;
    height: 1.5rem;
  }
`;
