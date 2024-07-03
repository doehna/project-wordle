import React from 'react';

function Letter({style, letter}) {
  return <span className={`${style} ${letter.status}`}>{letter.letter}</span>
}

export default Letter;
