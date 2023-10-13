import React from 'react';

import { range, sample } from '../../utils';
import { WORDS } from '../../data';
import GuessInput from '../GuessInput';
import GuessResults from '../GuessResults/GuessResults';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import { checkGuess } from '../../game-helpers';
import HappyBanner from '../HappyBanner';
import SadBanner from '../SadBanner';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

const defaultGuesses = range(NUM_OF_GUESSES_ALLOWED).map((_, index) => ({
  id: Math.random(),
  value: null,
}));

function Game() {
  const [guesses, setGuesses] = React.useState(defaultGuesses);
  const [gameOver, setGameOver] = React.useState(false);
  const [playerWon, setPlayerWon] = React.useState(false);

  function addGuess(guess) {
    if (gameOver) return;

    setGuesses((guesses) => {
      const firstEmpty = guesses.findIndex((guess) => guess.value === null);

      return guesses.map((g, index) => {
        if (index === firstEmpty) {
          return {
            ...g,
            value: guess,
          };
        }
        return g;
      });
    });

    if (guess === answer) {
      setGameOver(true);
      setPlayerWon(true);
    }

    if (
      guesses.filter((guess) => guess.value).length >=
        NUM_OF_GUESSES_ALLOWED - 1 &&
      guess !== answer
    ) {
      setGameOver(true);
    }
  }

  const results = guesses.map((guess) => ({
    id: guess.id,
    value: guess.value ? checkGuess(guess.value, answer) : null,
  }));

  return (
    <>
      <GuessResults guesses={results} />
      <GuessInput onGuess={addGuess} />
      {gameOver &&
        (playerWon ? (
          <HappyBanner
            guessesNum={guesses.filter((guess) => guess.value).length}
          />
        ) : (
          <SadBanner answer={answer} />
        ))}
    </>
  );
}

export default Game;
