import { Header, Main, Sidebar } from 'components';
import React from 'react';
import { GridLayout } from './styles';

const Dashboard = ({ children }) => {
  return (
    <GridLayout isLessThan833={false}>
      <Header />
      <Sidebar />
      <Main>{children}</Main>
    </GridLayout>
  );
};

export default Dashboard;
