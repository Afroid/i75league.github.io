import { render, screen } from '@testing-library/react';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

test('renders This is where the recap goes paragraph', () => {
  render(<BrowserRouter><App /></BrowserRouter>);
  const linkElement = screen.getByText(/Coming soon.../i);
  expect(linkElement).toBeInTheDocument();
});
