import React from "react";
import GuessInput from "../GuessInput/GuessInput";
import Guess from "../Guess/Guess";
import Banner from "../Banner/Banner";
import Keyboard from "../Keyboard/Keyboard";
import {
  NUM_OF_GUESSES_ALLOWED,
  NUM_OF_LETTERS_ALLOWED,
} from "../../constants";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import Keyboard from "../Keyboard/Keyboard";

// Pick a random word on every pageload.
// To make debugging easier, we'll log the solution in the console.


function Game() {
  const initializeLettersArray = () => {
    let newLetterArr = [];
    for (let index = 0; index < NUM_OF_LETTERS_ALLOWED; index++) {
      newLetterArr.push({
        letter: "",
        letterId: Math.random(),
        status: "",
      });
    }

    return newLetterArr;
  };

  const initializeGuessList = () => {
    let newArr = [];
    for (let index = 0; index < NUM_OF_GUESSES_ALLOWED; index++) {
      const element = {
        wordId: Math.random(),
        letters: initializeLettersArray(),
      };
      newArr.push(element);
    }

    return newArr;
  };

  const [answer, setAnswer] = React.useState(sample(WORDS));
  const [guessList, setGuessList] = React.useState(initializeGuessList);
  const [result, setResult] = React.useState({
    status: "",
    numberOfGuesses: 0,
  });

  const getState = () => {
    return {
      guessList,
      setGuessList,
      result,
      setResult,
    };
  }

  const resetAllStates = () => {
    setAnswer(sample(WORDS));
    setGuessList(initializeGuessList);
    setResult({
      status: "",
      numberOfGuesses: 0,
    });
  }

  const getBannerMessage = () => {
    if (result.status === "win") {
      return <><strong>Congratulations!</strong> Got it in <strong>{result.numberOfGuesses} guesses</strong>.</>
    }
    if (result.status === "lost") {
      return <>Sorry, the correct answer is <strong>{answer}</strong>.</>
    }
    return "";
  };

  console.info({ answer });

  return (
    <>
      <div className="guess-results">
        {guessList.map((item, index) => {
          return (
            <Guess
              key={item.wordId}
              guessListItem={guessList[index].letters}
            ></Guess>
          );
        })}
      </div>
      <GuessInput getState={getState} answer={answer}></GuessInput>
      <Keyboard guessList={guessList}></Keyboard>
      {result.status ? <Banner
        style={
          result.status === "win"
            ? "happy banner"
            : result.status === "lost"
            ? "sad banner"
            : ""
        }
        resetAllStates={resetAllStates}
      >
        {getBannerMessage()}
      </Banner> : ""}
    </>
  );
}

export default Game;
