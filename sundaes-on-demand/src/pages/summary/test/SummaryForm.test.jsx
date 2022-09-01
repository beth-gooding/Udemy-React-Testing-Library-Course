import { render, screen, fireEvent } from "@testing-library/react";
import SummaryForm from "../SummaryForm";

test("Initial state is checkbox unchecked and button disabled", () => {
  render(<SummaryForm />);
  const orderButton = screen.getByRole("button", { name: "Confirm order" });
  const checkbox = screen.getByRole("checkbox", {
    name: "I agree to Terms and Conditions",
  });

  expect(orderButton).toBeDisabled();
  expect(checkbox).not.toBeChecked();
});

test("Checking the checkbox enables the button, and unchecking it disables the button again", () => {
  render(<SummaryForm />);
  const orderButton = screen.getByRole("button", { name: "Confirm order" });
  const checkbox = screen.getByRole("checkbox", {
    name: "I agree to Terms and Conditions",
  });

  fireEvent.click(checkbox);
  expect(checkbox).toBeChecked();
  expect(orderButton).toBeEnabled();

  fireEvent.click(checkbox);
  expect(checkbox).not.toBeChecked();
  expect(orderButton).toBeDisabled();
});
