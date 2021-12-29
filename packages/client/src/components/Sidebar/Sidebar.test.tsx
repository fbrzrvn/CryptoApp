import { render } from '@testing-library/react';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import Sidebar from '.';

test('renders sidebar links', () => {
  render(
    <MemoryRouter initialEntries={[{ pathname: '/' }]}>
      <Sidebar isSidebarOpened={false} handleSidebarOpened={() => {}} />
    </MemoryRouter>,
  );
});
