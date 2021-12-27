import { DashboardLayoutProps } from 'models/props';
import React from 'react';
import IsLessThan from 'utils/IsLessThan';
import {
  Hamburger,
  HamburgerWrapper,
  HeaderContainer,
  HeaderMobile,
} from './styles';

const Header = ({
  isSidebarOpened,
  handleSidebarOpened,
}: DashboardLayoutProps) => {
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
