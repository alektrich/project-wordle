import React from 'react';

function HappyBanner({ guessesNum }) {
  return (
    <div className="happy banner">
      <p>
        <strong>Congratulations!</strong> Got it in{' '}
        <strong>
          {guessesNum} {guessesNum > 1 ? 'guesses' : 'guess'}
        </strong>
        .
      </p>
    </div>
  );
}

export default HappyBanner;
