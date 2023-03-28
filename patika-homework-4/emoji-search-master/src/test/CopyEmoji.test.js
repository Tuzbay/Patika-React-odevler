import React from "react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import { render, screen } from "@testing-library/react";
import App from "../App";

// * Burada kopyalanacak emojiyi bir değişken olarak belirliyorum.
// * Daha sonrasında belirlediğim emojinin ismini copyEmoji değişkenine
// * atıyorum. Kullanıcının buna tıklamasını sağlıyorum.
// * Kullanıcı o emojiye tıkladıktan sonra emojinin görüntüsü ile
// * eşleşip eşleşmediğini test ediyorum.

test("copy to clickboard test", () => {
  render(<App />);
  let copyEmoji;
  copyEmoji = screen.getByText("Blush");
  userEvent.click(copyEmoji);
  expect(copyEmoji.parentElement.getAttribute("data-clipboard-text")).toMatch(
    "😊"
  );
});
