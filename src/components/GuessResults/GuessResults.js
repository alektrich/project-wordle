import React from 'react';
import { range } from '../../utils';
import { NUM_OF_GUESSES_ALLOWED, WORD_LENGTH } from '../../constants';

function GuessResults({ guesses }) {
  const rows = range(NUM_OF_GUESSES_ALLOWED);
  const columns = range(WORD_LENGTH);

  return (
    <div className="guess-results">
      {rows.map((_, index) => {
        return !!guesses[index] ? (
          <p key={guesses[index].id} className="guess">
            {guesses[index].letters.map((letter, i) => (
              <span key={i} className="cell">
                {letter}
              </span>
            ))}
          </p>
        ) : (
          <p key={index} className="guess">
            {columns.map((_, i) => (
              <span key={i} className="cell"></span>
            ))}
          </p>
        );
      })}
    </div>
  );
}

export default GuessResults;
