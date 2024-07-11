import React from "react";

function Banner({style, resetAllStates, children}) {
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
