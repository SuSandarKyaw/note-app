import { render, screen } from '@testing-library/react';
import App2 from './App1';
import { PhotoApp } from './App2';

test('renders learn react link', () => {
  render(<PhotoApp />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
