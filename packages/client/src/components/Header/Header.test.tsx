import { render, screen } from '@testing-library/react';
import React from 'react';
import Header from '.';

test('renders username in header-desktop', () => {
  render(<Header handleSidebarOpened={() => {}} />);
  const username = screen.getByText(/Your name/i);
  expect(username).toBeInTheDocument();
});
