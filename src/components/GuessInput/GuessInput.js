import React from 'react';

function GuessInput({ onGuess }) {
  const [guess, setGuess] = React.useState('');

  function handleSubmit(event) {
    event.preventDefault();
    onGuess(guess);
    setGuess('');
  }

  return (
    <div>
      <form className="guess-input-wrapper" onSubmit={handleSubmit}>
        <label htmlFor="guess-input">Enter guess:</label>
        <input
          id="guess-input"
          type="text"
          value={guess}
          onChange={(event) => setGuess(event.target.value.toUpperCase())}
          pattern="[A-Za-z]{5}"
        />
      </form>
    </div>
  );
}

export default GuessInput;
