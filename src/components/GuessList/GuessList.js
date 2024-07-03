import React from "react";

function GuessList({ guessList }) {
  return (
    <div className="guess-results">
      {guessList.map(({id, guess}) => {return <p className="guess" key={id}>{guess}</p>})}
    </div>
  );
}

export default GuessList;
