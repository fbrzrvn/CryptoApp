import NavLinks from 'components/NavLinks';
import { DashboardLayoutProps } from 'models/props';
import React from 'react';
import IsLessThan from 'utils/IsLessThan';
import { SidebarContainer, SidebarMobile, SidebarTitle } from './styles';

const Sidebar = ({
  isSidebarOpened,
  handleSidebarOpened,
}: DashboardLayoutProps) => {
  const isLessThan768 = IsLessThan(768);

  return isLessThan768 ? (
    <SidebarMobile
      isSidebarOpened={isSidebarOpened}
      onClick={handleSidebarOpened}
    >
      <SidebarContainer>
        <NavLinks />
      </SidebarContainer>
    </SidebarMobile>
  ) : (
    <SidebarContainer>
      <SidebarTitle>Crypto app</SidebarTitle>
      <NavLinks />
    </SidebarContainer>
  );
};

export default Sidebar;
