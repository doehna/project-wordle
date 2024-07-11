import React from "react";
import { checkGuess } from "../../game-helpers";
import { NUM_OF_LETTERS_ALLOWED } from "../../constants";

function GuessInput({ getState, answer }) {
  const [guessInput, setGuessInput] = React.useState("");
  const { guessList, setGuessList, result, setResult } = getState();

  const addGuess = () => {
    const nextGuessList = [...guessList];

    const nextGuess = nextGuessList.find(
      (element) => !element.letters[0].letter
    );
    checkGuess(guessInput, answer).forEach((element, index) => {
      nextGuess.letters[index].letter = element.letter;
      nextGuess.letters[index].status = element.status;
    });

    return nextGuessList;
  };

  const checkResult = () => {
    setResult({
      status:
        guessInput === answer
          ? "win"
          : result.numberOfGuesses === 5
          ? "lost"
          : "",
      numberOfGuesses: result.numberOfGuesses + 1,
    });
  };

  return (
    <form
      className="guess-input-wrapper"
      onSubmit={(event) => {
        event.preventDefault();
        setGuessList(addGuess());
        setGuessInput("");
        checkResult();
      }}
    >
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        required
        minLength={NUM_OF_LETTERS_ALLOWED}
        maxLength={NUM_OF_LETTERS_ALLOWED}
        name="guess-input"
        type="text"
        value={guessInput.toUpperCase()}
        onChange={(event) => {
          if (guessList[5].letters[0].letter) {
            return;
          }
          setGuessInput(event.target.value.toUpperCase());
        }}
        pattern={`^[A-Za-z]{${NUM_OF_LETTERS_ALLOWED}}$`}
        disabled={result.status}
      ></input>
    </form>
  );
}

export default GuessInput;
