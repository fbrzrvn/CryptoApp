import { Header, Main, Sidebar } from 'components';
import React, { useState } from 'react';
import IsLessThan from 'utils/IsLessThan';
import { GridLayout } from './styles';

const Dashboard = ({ children }) => {
  const [isSidebarOpened, setIsSidebarOpened] = useState(false);
  const isLessThan768 = IsLessThan(768);

  return (
    <GridLayout isLessThan768={isLessThan768}>
      <Header
        isSidebarOpened={isSidebarOpened}
        setIsSidebarOpened={setIsSidebarOpened}
      />
      <Sidebar
        isSidebarOpened={isSidebarOpened}
        setIsSidebarOpened={setIsSidebarOpened}
      />
      <Main>{children}</Main>
    </GridLayout>
  );
};

export default Dashboard;
