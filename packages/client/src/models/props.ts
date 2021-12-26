import React from 'react';

export interface ChildrenProps {
  children: React.ReactNode | React.ReactNode[];
}

export interface DashboardLayoutProps {
  isSidebarOpened?: boolean;
  handleSidebarOpened: (e: React.MouseEvent) => void;
}
