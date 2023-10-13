import React from 'react';
import { range } from '../../utils';
import { NUM_OF_GUESSES_ALLOWED, WORD_LENGTH } from '../../constants';

function GuessResults({ guesses }) {
  const rows = range(NUM_OF_GUESSES_ALLOWED);
  const columns = range(WORD_LENGTH);

  return (
    <div className="guess-results">
      {rows.map((_, index) => {
        const guess = guesses[index];

        return !!guess.value ? (
          <p key={guess.id} className="guess">
            {guess.value.map((result, i) => (
              <span key={i} className={`cell ${result.status}`}>
                {result.letter}
              </span>
            ))}
          </p>
        ) : (
          <p key={guess.id} className="guess">
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
