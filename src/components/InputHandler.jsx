import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { playSound, generateProblemMath } from '../utils';

const InputHandler = ({ defaultText, setTitle, setParty }) => {
  const [currentProblem, setCurrentProblem] = useState('');
  const [correctAnswer, setCorrectAnswer] = useState(null);
  const [userInput, setUserInput] = useState(''); // State to track input field value
  const [correctCount, setCorrectCount] = useState(0);

  // Function to generate a random problem
  const generateProblem = () => {
    const { problem, answer } = generateProblemMath();
    setCurrentProblem(problem);
    setCorrectAnswer(answer);
  };

  // Initialize the first problem
  useEffect(() => {
    generateProblem();
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent form submission from refreshing the page
    const input = parseFloat(userInput); // Convert input to a number

    if (!isNaN(input) && input === correctAnswer) {
      setTitle('Heel goed!');
      setUserInput(''); // Clear the input field
      setCorrectCount(correctCount + 1);
      setParty(true);
      playSound();
      generateProblem();
    } else if (!isNaN(input)) {
      setTitle('Nog niet goed...');
      setCorrectCount(0);
      playSound(true, 'wrong');
    } else {
      setTitle(defaultText);
    }
  };

  return (
    <div>
      <p className="problem-text variable-font-color">
        Wat is <span>{currentProblem}</span>?
      </p>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="fixed-input"
          placeholder="Jouw antwoord"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
        />
        <button type="submit" className="submit-button">
          Controleer
        </button>
        {correctCount > 0 && (
          <p className="correct-text variable-font-color">
            Je hebt er <span>{correctCount}</span> op een rij goed!
          </p>
        )}
      </form>
    </div>
  );
};

InputHandler.propTypes = {
  defaultText: PropTypes.string,
  setTitle: PropTypes.func.isRequired,
  setParty: PropTypes.func.isRequired,
};

export default InputHandler;
