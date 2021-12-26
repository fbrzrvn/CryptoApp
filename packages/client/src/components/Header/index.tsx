import hamburgerMenu from 'assets/hamburgerMenu.svg';
import { DashboardLayoutProps } from 'models/props';
import React from 'react';
import IsLessThan from 'utils/IsLessThan';
import { HeaderContainer, HeaderHamburguerMenu, HeaderMobile } from './styles';

const Header = ({ handleSidebarOpened }: DashboardLayoutProps) => {
  const isLessThan768 = IsLessThan(768);

  return isLessThan768 ? (
    <HeaderMobile>
      <HeaderHamburguerMenu onClick={handleSidebarOpened}>
        <img src={hamburgerMenu} alt="hamburger" width={20} height={25} />
      </HeaderHamburguerMenu>
    </HeaderMobile>
  ) : (
    <HeaderContainer>
      <p>Your name</p>
    </HeaderContainer>
  );
};

export default Header;
