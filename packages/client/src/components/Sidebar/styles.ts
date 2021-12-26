import styled from 'styled-components';
import { COLORS } from 'styles/Colors';

interface SidebarProps {
  isSidebarOpened: boolean;
}

export const SidebarMobile = styled.div<SidebarProps>`
  position: fixed;
  top: 65px;
  bottom: 0;
  left: ${({ isSidebarOpened }) => (isSidebarOpened ? '0' : '-200%')};
  right: ${({ isSidebarOpened }) => (isSidebarOpened ? '0' : '100%')};
  z-index: 999;
  display: flex;
  justify-content: flex-start;
  max-height: 100vh;
  background-color: rgba(0, 0, 0, 0.7);
  overflow-y: auto;
  transition: all 0.3s ease-in-out;
`;
export const SidebarContainer = styled.aside`
  grid-area: sidebar;
  display: flex;
  flex-direction: column;
  width: 255px;
  background-color: ${COLORS.gris100};
`;
export const SidebarTitle = styled.h2`
  height: 65px;
  margin: 0 auto;
  line-height: 65px;
`;
