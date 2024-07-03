import React from "react";
import Letter from "../Letter/Letter";

function Guess({guessListItem}) {
  return (
    <p className="guess">
      {guessListItem.map(letter => {
        return <Letter key={letter.letterId} style={"cell"} letter={letter}></Letter>
      })}
    </p>
  );
}

export default Guess;
