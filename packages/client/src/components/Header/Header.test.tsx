import { render, screen } from '@testing-library/react';
import React from 'react';
import Header from '.';

test('renders username in header-desktop', () => {
  render(<Header isSidebarOpened={false} handleSidebarOpened={() => {}} />);
  const username = screen.getByText(/Your name/i);
  expect(username).toBeInTheDocument();
});
