import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the home page with the developer name', () => {
  render(<App />);
  const nameElement = screen.getByText(/David PRIAM/i);
  expect(nameElement).toBeInTheDocument();
});
