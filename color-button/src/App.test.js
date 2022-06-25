import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />); // Creates a virtual DOM for whatever jsx you give it
  // Access the virtual DOM using the screen method
  const linkElement = screen.getByText('Learn React'); // get an element by text
  expect(linkElement).toBeInTheDocument(); // this is an assertion 
});
