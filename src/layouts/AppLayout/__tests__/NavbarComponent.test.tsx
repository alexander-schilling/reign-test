import React from 'react';
import { cleanup, render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { NavbarComponent } from '../components/NavbarComponent';

const NAVBAR_LINK_TEST_ID = 'nav-link';
const NAVBAR_LINKS = ['/', '/favorites'];

const renderComponent = (): ReturnType<typeof render> => {
  return render(
    <BrowserRouter>
      <NavbarComponent />
    </BrowserRouter>,
  );
};

afterEach(cleanup);

it('checks that required nav links are rendered', () => {
  renderComponent();

  const navLinkElements = screen.getAllByTestId(NAVBAR_LINK_TEST_ID);

  navLinkElements.forEach((navLinkElement) => {
    const navLinkElementUrl = navLinkElement.getAttribute('href');
    expect(NAVBAR_LINKS).toContain(navLinkElementUrl);
  });
});
