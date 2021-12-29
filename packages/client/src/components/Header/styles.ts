import styled, { css } from 'styled-components';
import { COLORS } from 'styles/Colors';
import { AppTitle } from 'styles/Mixins';

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
  background: ${COLORS.gris900};
  & h4 {
    ${AppTitle};
  }
`;
export const HamburgerWrapper = styled.button`
  display: flex;
  align-items: center;
  height: 22px;
  width: 22px;
  border: none;
  background: transparent;
  opacity: 0.7;
  cursor: pointer;
  &:hover {
    opacity: 1;
  }
`;
const hamburgerLine = css`
  content: '';
  position: absolute;
  left: 0;
  height: 3px;
  width: 22px;
  background: ${COLORS.gris100};
  border-radius: 2px;
  transition: all 0.5s ease-in-out;
`;
export const Hamburger = styled.div<{ isSidebarOpened: boolean }>`
  position: relative;
  height: 3px;
  width: 12px;
  border-radius: 2px;
  background: ${({ isSidebarOpened }) =>
    isSidebarOpened ? 'transparent' : `${COLORS.gris500}`};
  transition: all 0.25s ease-in-out;
  &:before {
    ${hamburgerLine}
    width: 22px;
    transform: translateY(-8px);
    transform: ${({ isSidebarOpened }) => isSidebarOpened && 'rotate(45deg)'};
  }
  &:after {
    ${hamburgerLine}
    width: ${({ isSidebarOpened }) => (isSidebarOpened ? '22px' : '18px')};
    transform: translateY(8px);
    transform: ${({ isSidebarOpened }) => isSidebarOpened && 'rotate(-45deg)'};
  }
`;
