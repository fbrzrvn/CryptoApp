import React from 'react';
import { DashboardLayoutProps } from 'types/props';
import { IsLessThan } from 'utils';
import {
  Hamburger,
  HamburgerWrapper,
  HeaderContainer,
  HeaderMobile,
} from './styles';

const Header: React.VFC<DashboardLayoutProps> = ({
  isSidebarOpened,
  handleSidebarOpened,
}) => {
  const isLessThan768 = IsLessThan(768);

  return isLessThan768 ? (
    <HeaderMobile>
      <HamburgerWrapper onClick={handleSidebarOpened}>
        <Hamburger isSidebarOpened={isSidebarOpened} />
      </HamburgerWrapper>
      <h4>Crypto app</h4>
    </HeaderMobile>
  ) : (
    <HeaderContainer>
      <p>Your name</p>
    </HeaderContainer>
  );
};

export default Header;
