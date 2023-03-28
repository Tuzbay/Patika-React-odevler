import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Header from "../Header";

// * Testin çalışmasından önce Header componentini render ediyorum.
// * Daha sonrasında getByText ile Header.js'deki "Emoji Search"
// * başlığını alıyorum. Bunun döküman içinde olup olmadığını kontrol ediyorum.

describe("Header Component Test", () => {
  beforeEach(() => {
    render(<Header />);
  });

  test("Header text should be on the document", () => {
    const headerText = screen.getByText("Emoji Search");
    expect(headerText).toBeInTheDocument();
  });
});
