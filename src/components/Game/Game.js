import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import GuessInput from '../GuessInput';
import GuessResults from '../GuessResults/GuessResults';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);
  const [gameOver, setGameOver] = React.useState(false);
  const [message, setMessage] = React.useState('');

  function addGuess(guess) {
    if (gameOver) return;

    setGuesses((guesses) => [
      ...guesses,
      { id: crypto.randomUUID(), value: guess },
    ]);

    if (guess === answer) {
      setGameOver(true);
      setMessage('You win!');
    }

    if (guesses.length >= NUM_OF_GUESSES_ALLOWED - 1 && guess !== answer) {
      setGameOver(true);
      setMessage(`You lost! The word was: ${answer}`);
    }
  }

  const results = guesses.map(({ id, value }) => {
    const letters = value.split('');
    return { id, letters };
  });

  return (
    <>
      {gameOver && <p>{message}</p>}
      <GuessResults guesses={results} />
      <GuessInput onGuess={addGuess} />
    </>
  );
}

export default Game;
