import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { COLORS } from 'styles/Colors';

export const NavLinksWrapper = styled.nav`
  display: flex;
  flex-direction: column;
  padding-top: calc(4rem + 65px);
  @media screen and (min-width: 768px) {
    padding-top: 4rem;
  }
`;
export const NavLinkItem = styled(NavLink)`
  display: flex;
  align-items: center;
  height: 2.5rem;
  padding: 0 2rem;
  border-left: 6px solid transparent;
  color: ${COLORS.gris500};
  font-weight: 400;
  font-size: 1.2rem;
  line-height: 2.5rem;
  text-decoration: none;
  white-space: nowrap;
  &:hover {
    color: ${COLORS.white};
    text-decoration: none;
  }
  &.active {
    background-color: rgba(255, 255, 255, 0.1);
    border-left: 6px solid ${COLORS.blue700};
    color: ${COLORS.white};
  }
`;
export const NavLinkIcon = styled(FontAwesomeIcon)`
  margin-right: 1rem;
  width: 1.5rem !important;
`;
