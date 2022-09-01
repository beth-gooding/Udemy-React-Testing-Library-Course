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

test('initial conditions', () => {
  render(<App />);

  // Check the button starts out enabled
  const colorButton = screen.getByRole('button', { name: 'Change to blue' });
  expect(colorButton).toBeEnabled()

  // Check that the checkbox starts out unchecked
  const checkbox = screen.getByRole('checkbox', { name: 'Disable button'});
  expect(checkbox).not.toBeChecked();
});

test('button is disabled when checkbox is checked, and re-enabled when it is unchecked', () => {
  render(<App />);

  // Get the button and checkbox
  const colorButton = screen.getByRole('button', { name: 'Change to blue' });
  const checkbox = screen.getByRole('checkbox');

  //Click the checkbox and see if it is now checked
  fireEvent.click(checkbox);
  expect(checkbox).toBeChecked();

  // Check if the button is disabled
  expect(colorButton).toBeDisabled();

  // Click the checkbox again and check if it is now unchecked
  fireEvent.click(checkbox);
  expect(checkbox).not.toBeChecked();

  // Check if the button is re-enabled
  expect(colorButton).toBeEnabled();
})

