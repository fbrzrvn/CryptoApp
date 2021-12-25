import styled from 'styled-components';
import { COLORS } from 'styles/Colors';

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
