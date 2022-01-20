import { Header, Sidebar } from 'components';
import React, { useState } from 'react';
import { ChildrenProps } from 'types/props';
import { IsLessThan } from 'utils';
import { GridLayout, Main } from './styles';

const Dashboard: React.VFC<ChildrenProps> = ({ children }) => {
  const [isSidebarOpened, setIsSidebarOpened] = useState(false);
  const isLessThan768 = IsLessThan(768);

  const handleSidebarOpened = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsSidebarOpened(!isSidebarOpened);
  };

  return (
    <GridLayout isLessThan768={isLessThan768}>
      <Header
        isSidebarOpened={isSidebarOpened}
        handleSidebarOpened={handleSidebarOpened}
      />
      <Sidebar
        isSidebarOpened={isSidebarOpened}
        handleSidebarOpened={handleSidebarOpened}
      />
      <Main>{children}</Main>
    </GridLayout>
  );
};

export default Dashboard;
