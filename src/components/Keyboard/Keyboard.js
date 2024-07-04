import React from "react";
import Letter from "../Letter/Letter";

function Keyboard({ guessList }) {
  let keyboard = [];
  "QWERTYUIOPASDFGHJKLZXCVBNM".split("").forEach((letter) => {
    keyboard.push({
      letter: letter,
      letterId: Math.random(),
      status: "",
    });
  });

  guessList.forEach((guess) => {
    guess.letters.forEach((guessLetter) => {
      let element = keyboard.find((item) => item.letter === guessLetter.letter);
      if (element) {
        if (
          !(
            ((guessLetter.status === "misplaced" ||
              guessLetter.status === "incorrect") &&
              element.status === "correct") ||
            (guessLetter.status === "incorrect" &&
              (element.status === "correct" || 
              element.status === "misplaced"))
          )
        ) {
          element.status = guessLetter.status;
        }
      }
    });
  });

  const displayRow = (start, end) => {
    return (
      <p className="keyboard-line">
        {keyboard.slice(start, end).map((letter) => (
          <Letter key={letter.letterId} style={"key"} letter={letter}></Letter>
        ))}
      </p>
    );
  };

  return (
    <div className="keyboard">
      {displayRow(0, 10)}
      {displayRow(10, 19)}
      {displayRow(19, keyboard.length)}
    </div>
  );
}

export default Keyboard;
