import styled, { css } from 'styled-components';
import { COLORS } from 'styles/Colors';

const header = css`
  grid-area: header;
  display: flex;
  align-items: center;
  padding: 0 1.5rem;
  height: 65px;
  width: 100%;
  box-shadow: 0px 0px 14px 0px rgba(0, 0, 0, 0.2);
`;

export const HeaderContainer = styled.header`
  ${header};
  justify-content: end;
`;
export const HeaderMobile = styled.header`
  position: fixed;
  z-index: 3;
  ${header};
  justify-content: space-between;
  background: ${COLORS.gris500};
`;
export const HeaderHamburguerMenu = styled.button`
  padding: 0.5rem;
  background: transparent;
  border: none;
  cursor: pointer;
  img {
    max-height: 100%;
    width: auto;
  }
`;
