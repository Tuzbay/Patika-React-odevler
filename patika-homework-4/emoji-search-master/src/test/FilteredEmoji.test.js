import React from "react";

import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import App from "../App";

// * Bu testte bir emoji belirtiyorum (Bike). Daha sonrasında search input kısmını alıyorum.
// * Bu inputun kullanıcı tarafından değişmesini ve değerinin
// * verdiğim emoji olmasını istiyorum. Daha sonrasında bu emojinin
// * döküman içinde olup olmamasını kontrol ediyorum.

test("Emoji filtering is  working", () => {
  render(<App />);
  const emoji = "Bike";
  const input = screen.getByRole("textbox");
  fireEvent.change(input, { target: { value: emoji } });
  expect(screen.getByText(emoji)).toBeInTheDocument();
});
