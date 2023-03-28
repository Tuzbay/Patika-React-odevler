import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import emojiList from "../emojiList.json";
import App from "../App";

describe("Emoji List", () => {
  beforeEach(() => {
    render(<App />);
  });

  // * Bir emojiListTest değişkeni oluşturuyorum. JSON dosyasından
  // * ilk 20 itemi alıyorum. Çünkü başlangıçta ekranda 20 emoji gösterilmektedir.
  // * Bunu slice komutu ile yaptım. Daha sonrasında map ile tek tek
  // * içinde döndüm. Ekranda bunların başlıklarının olması gerektiğini
  // * belirttim. Testi bu şekilde tamamladım.

  test("Emoji List Render", () => {
    const emojiListTest = emojiList.slice(0, 20);
    emojiListTest.map((item) => {
      expect(screen.getByText(item.title)).toBeInTheDocument();
    });
  });
});
