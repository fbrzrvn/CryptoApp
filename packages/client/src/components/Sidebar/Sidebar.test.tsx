import { render, screen } from '@testing-library/react';
import React from 'react';
import Sidebar from '.';

test('renders app title in sidebar', () => {
  render(<Sidebar isSidebarOpened={false} handleSidebarOpened={() => {}} />);
  const sidebarTitle = screen.getByText(/Crypto app/i);
  expect(sidebarTitle).toBeInTheDocument();
});
