import { Header, Sidebar } from 'components';
import { ChildrenProps } from 'models/props';
import React, { useState } from 'react';
import IsLessThan from 'utils/IsLessThan';
import { GridLayout, Main } from './styles';

const Dashboard = ({ children }: ChildrenProps) => {
  const [isSidebarOpened, setIsSidebarOpened] = useState(false);
  const isLessThan768 = IsLessThan(768);

  const handleSidebarOpened = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsSidebarOpened(!isSidebarOpened);
  };

  return (
    <GridLayout isLessThan768={isLessThan768}>
      <Header handleSidebarOpened={handleSidebarOpened} />
      <Sidebar
        isSidebarOpened={isSidebarOpened}
        handleSidebarOpened={handleSidebarOpened}
      />
      <Main>{children}</Main>
    </GridLayout>
  );
};

export default Dashboard;
