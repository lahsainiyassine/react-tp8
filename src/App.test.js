import { render, screen } from '@testing-library/react';
import App from './App';

test('renders TP title', () => {
  render(<App />);
  const titleElement = screen.getByText(/TP – Consommer une API avec React/i);
  expect(titleElement).toBeInTheDocument();
});
