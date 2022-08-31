import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('button has the correct initial colour', () => {
  render(<App />);

  // find an element with a role of button and a text of 'Change to blue'
  const colorButton = screen.getByRole('button', { name: 'Change to blue'}); // name = display text

  // use toHaveStyle to check the styles of the elements, expect red background
  expect(colorButton).toHaveStyle({ backgroundColor: 'red' });

  // click button
  fireEvent.click(colorButton);

  // expect the background colour to be blue
  expect(colorButton).toHaveStyle({ backgroundColor: 'blue'});

  // expect the button text to be 'Change to red'
  expect(colorButton.textContent).toBe('Change to red');
});

