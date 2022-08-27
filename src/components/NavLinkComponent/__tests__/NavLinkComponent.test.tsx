import React from 'react';
import {
  cleanup,
  render,
  screen,
  fireEvent,
  waitFor,
} from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { NavLinkComponent } from '..';

const LINK_URL = '/favorites';
const LINK_TITLE = 'My faves';

const renderComponent = (): ReturnType<typeof render> => {
  return render(
    <BrowserRouter>
      <NavLinkComponent to={LINK_URL}>{LINK_TITLE}</NavLinkComponent>
    </BrowserRouter>,
  );
};

afterEach(cleanup);

it('renders nav link component', () => {
  renderComponent();

  const linkElement = screen.getByText(LINK_TITLE);
  expect(linkElement).toBeInTheDocument();
});

it('checks if href is correct', () => {
  renderComponent();

  const linkElement = screen.getByText(LINK_TITLE);
  const linkElementUrl = linkElement.getAttribute('href');

  expect(linkElementUrl).toBe(LINK_URL);
});

it('checks if navigation works', async () => {
  renderComponent();

  const linkElement = screen.getByText(LINK_TITLE);

  fireEvent.click(linkElement);

  await waitFor(() => {
    expect(window.location.pathname).toBe(LINK_URL);
  });
});
