import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

test("button has correct initial color, and updates when clicked", () => {
  render(<App />);

  // Find an element with a role of button and text of "Change to blue"
  const colorButton = screen.getByRole("button", { name: "Change to blue" });

  // expect the background color to be red
  expect(colorButton).toHaveStyle({ backgroundColor: "red" });
});

test("button turns blue when click", () => {
  render(<App />);

  const colorButton = screen.getByRole("button", { name: "Change to blue" });

  // expect the background color to be red
  expect(colorButton).toHaveStyle({ backgroundColor: "red" });

  // click button
  fireEvent.click(colorButton);

  // expecting the background color to be blue
  expect(colorButton).toHaveStyle({ backgroundColor: "blue" });

  // expect the button text to be "Change to red"
  expect(colorButton.textContent).toBe("Change to red");
});

test("finding check box", () => {
  render(<App />);
  // selecting the button
  const btn = screen.getByRole("button");
  // selecting the checkbox
  const checkbox = screen.getByRole("checkbox", { name: "Disable button" });

  // click checkbox
  fireEvent.click(checkbox);

  // confirm that the button is disabled
  expect(btn).toBeDisabled();

  // click checkbox
  fireEvent.click(checkbox);

  // confirm that the button is enabled
  expect(btn).toBeEnabled();
});

test("button color change and disable", () => {
  render(<App />);
  // selecting the button
  const btn = screen.getByRole("button");
  // selecting the checkbox
  const checkbox = screen.getByRole("checkbox", { name: "Disable button" });

  // click checkbox
  fireEvent.click(checkbox);
  // expecting btn background to be grey
  expect(btn).toHaveStyle({ backgroundColor: "grey" });

  // click checkbox
  fireEvent.click(checkbox);
  // expecting btn to be enabled
  expect(btn).toBeEnabled();

  // click btn
  fireEvent.click(btn);
  // expecting btn background to be blue
  expect(btn).toHaveStyle({ backgroundColor: "blue" });

  // click checkbox
  fireEvent.click(checkbox);
  // expecting btn to be disabled
  expect(btn).toBeDisabled();

  // expecting btn background to be grey
  expect(btn).toHaveStyle({ backgroundColor: "grey" });

  // click ckeckbox
  fireEvent.click(checkbox);
  // expecting btn to be enabled
  expect(btn).toBeEnabled();

  // click btn
  fireEvent.click(btn);

  // expecting background to be red
  expect(btn).toHaveStyle({ backgroundColor: "red" });
});
