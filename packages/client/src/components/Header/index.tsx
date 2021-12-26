import hamburgerMenu from 'assets/hamburgerMenu.svg';
import React from 'react';
import IsLessThan from 'utils/IsLessThan';
import { HeaderContainer, HeaderHamburguerMenu, HeaderMobile } from './styles';

const Header = ({ isSidebarOpened, setIsSidebarOpened }) => {
  const isLessThan768 = IsLessThan(768);

  return isLessThan768 ? (
    <HeaderMobile>
      <HeaderHamburguerMenu
        onClick={(e) => {
          e.stopPropagation();
          setIsSidebarOpened(!isSidebarOpened);
        }}
      >
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
