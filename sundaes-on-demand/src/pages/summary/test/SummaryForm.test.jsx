import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
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

  userEvent.click(checkbox);
  expect(checkbox).toBeChecked();
  expect(orderButton).toBeEnabled();

  userEvent.click(checkbox);
  expect(checkbox).not.toBeChecked();
  expect(orderButton).toBeDisabled();
});

test("popover responds to hover", () => {
  // popover starts as hidden
  // popover appears upon mouseover of checkbox label
  // popover disappears when we mouse out
});
