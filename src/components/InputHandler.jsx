import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const InputHandler = ({ defaultText, setTitle, setTheme }) => {
  const [currentProblem, setCurrentProblem] = useState('');
  const [correctAnswer, setCorrectAnswer] = useState(null);

  // Function to generate a random problem
  const generateProblem = () => {
    const num1 = Math.floor(Math.random() * 10) + 1; // Numbers between 1 and 10
    const num2 = Math.floor(Math.random() * 10) + 1;
    const operator = Math.random() > 0.5 ? '+' : '-'; // Randomly choose + or -

    const problem = `${num1} ${operator} ${num2}`;
    const answer = operator === '+' ? num1 + num2 : num1 - num2;

    setCurrentProblem(problem);
    setCorrectAnswer(answer);
  };

  // Initialize the first problem
  useEffect(() => {
    generateProblem();
  }, []);

  const handleInputChange = (event) => {
    const input = parseFloat(event.target.value); // Convert input to a number

    if (!isNaN(input) && input === correctAnswer) {
      setTitle('Heel goed!');
      setTheme('green');
      generateProblem();
      event.target.value = ''; // Clear the input field
    } else if (!isNaN(input)) {
      setTitle('Bijna...');
      setTheme('red');
    } else {
      setTitle(defaultText);
    }
  };

  return (
    <div>
      <p className="problem-text variable-font-color">
        Wat is: {currentProblem}?
      </p>
      <input
        type="text"
        className="fixed-input"
        placeholder="Jouw antwoord"
        onChange={handleInputChange}
      />
    </div>
  );
};

InputHandler.propTypes = {
  defaultText: PropTypes.string,
  setTitle: PropTypes.func.isRequired,
  setTheme: PropTypes.func.isRequired,
};

export default InputHandler;
