import React from 'react';
import IsLessThan from 'utils/IsLessThan';
import { SidebarContainer, SidebarMobile, SidebarTitle } from './styles';

const Sidebar = ({ isSidebarOpened, setIsSidebarOpened }) => {
  const isLessThan768 = IsLessThan(768);

  return isLessThan768 ? (
    <SidebarMobile
      isSidebarOpened={isSidebarOpened}
      onClick={(e) => {
        e.stopPropagation();
        setIsSidebarOpened(false);
      }}
    >
      <SidebarContainer>
        <SidebarTitle>Crypto app</SidebarTitle>
      </SidebarContainer>
    </SidebarMobile>
  ) : (
    <SidebarContainer>
      <SidebarTitle>Crypto app</SidebarTitle>
    </SidebarContainer>
  );
};

export default Sidebar;
