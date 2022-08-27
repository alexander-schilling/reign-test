import React from 'react';
import { cleanup, render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { HeaderComponent } from '../components/HeaderComponent';

const HEADER_TEST_ID = 'link';
const HEADER_URL = '/';

const renderComponent = (): ReturnType<typeof render> => {
  return render(
    <BrowserRouter>
      <HeaderComponent />
    </BrowserRouter>,
  );
};

afterEach(cleanup);

it('renders home nav link component', () => {
  renderComponent();

  const linkElement = screen.getByTestId(HEADER_TEST_ID);
  expect(linkElement).toBeInTheDocument();
});

it('checks if href is correct', () => {
  renderComponent();

  const linkElement = screen.getByTestId(HEADER_TEST_ID);
  const linkElementUrl = linkElement.getAttribute('href');

  expect(linkElementUrl).toBe(HEADER_URL);
});
