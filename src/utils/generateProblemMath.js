export const generateProblemMath = () => {
  const num1 = Math.floor(Math.random() * 20) + 1; // Numbers between 1 and 20
  const num2 = Math.floor(Math.random() * 20) + 1;
  const operator = Math.random() > 0.5 ? '+' : '-'; // Randomly choose + or -

  const problem = `${num1} ${operator} ${num2}`;
  const answer = operator === '+' ? num1 + num2 : num1 - num2;
  return { problem, answer };
};
