import { render, screen } from "@testing-library/react";
import SummaryForm from "../SummaryForm";
import userEvent from "@testing-library/user-event";

test("primera comprobacion", () => {
  render(<SummaryForm />);
  const checkbox = screen.getByRole("checkbox", {
    name: /terms and conditions/i,
  });
  expect(checkbox).not.toBeChecked();

  const confirmButton = screen.getByRole("button", {
    name: /confirm order/i,
  });
  expect(confirmButton).toBeDisabled();
});

test("segunda comprobacion", async () => {
  const user = userEvent.setup();
  render(<SummaryForm />);

  const checkbox = screen.getByRole("checkbox", {
    name: /terms and conditions/i,
  });
  const confimButton = screen.getByRole("button", {
    name: /confirm order/i,
  });

  await user.click(checkbox);
  expect(confimButton).toBeEnabled();

  await user.click(checkbox);
  expect(confimButton).toBeDisabled();
});

test("tercera comprobacion", async () => {
  const user = userEvent.setup();
  render(<SummaryForm />);

  // popover starts out hiden
  const nullPopover = screen.queryByText(
    /no ice cream will actually be delivered/i
  );
  expect(nullPopover).not.toBeInTheDocument();

  // popover appears on mouseover of checkbox label
  const termsAndConditions = screen.getByText(/terms and conditions/i);
  await user.hover(termsAndConditions);
  const popover = screen.getByText(/no ice cream will actually be delivered/i);
  expect(popover).toBeInTheDocument();

  // popover disappears when we mouse out
  userEvent.unhover(termsAndConditions);
  const nullPopoverAgain = screen.queryByText(popover)
  expect(nullPopoverAgain).not.toBeInTheDocument(/no ice cream will actually be delivered/i);


  // Querry Methods
  // command
  // get: expect element to be in the DOM
  // query: expect element not to be in the DOM
  // find: expect element no appear async

  /*
    (exclude) expect only one match
    (include) expect more than one match
  */

  /*
    QueryType
    Role(most prefer)
    AltText(images)
    Text(display elements)
    Form elements
        - PlaceholderText
        - LabelText
        - DisplayValue
    */
});
