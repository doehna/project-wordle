import React from "react";

function Banner({style, resetAllStates, children}) {
  const resetAnswer = () => {
    setAnswerState();
  }

  return (
    <div className={style}>
      <p>
        {children}
      </p>
      <button className="restart" onClick={resetAllStates}>RESTART GAME</button>
    </div>
  );
}

export default Banner;
