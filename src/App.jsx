import { useState } from 'react';
import { Canvas } from '@react-three/fiber';
import Cube from './components/Cube';
import cubeMaterial from './assets/cube-material.jpg';
import './App.css';

const App = () => {
  const defaultText = "Zeg 't maar of maak een som...";
  const [title, setTitle] = useState('Wie dit leest is gek');
  const [theme, setTheme] = useState('red'); // State for the current theme

  const handleInputChange = (event) => {
    const input = event.target.value;

    // Check if input is an arithmetic expression (a sum with +, -, * or /)
    const arithmeticRegex = /^-?\d+(\.\d+)?\s*([+\-*/])\s*-?\d+(\.\d+)?$/;

    if (arithmeticRegex.test(input)) {
      try {
        // Evaluate the result of the arithmetic expression
        // eslint-disable-next-line no-eval
        const result = eval(input);
        const formattedResult = new Intl.NumberFormat('nl-NL').format(result);

        setTitle(`${input} = ${formattedResult}`);
        // eslint-disable-next-line no-unused-vars
      } catch (error) {
        setTitle('Error in calculation');
      }
    } else {
      setTitle(input);
    }
  };

  const handleThemeChange = (newTheme) => {
    setTheme(newTheme);
  };

  return (
    <div className={`theme-${theme}`}>
      <h1 className="variable-font-h1">{title || defaultText}</h1>
      <div className="fixed-input-holder">
        <input
          type="text"
          className="fixed-input"
          placeholder={defaultText}
          onChange={handleInputChange}
        />
        <div className="color-toggles">
          {/* Buttons for changing themes */}
          <button
            className="green"
            onClick={() => handleThemeChange('green')}
          />
          <button className="blue" onClick={() => handleThemeChange('blue')} />
          <button
            className="purple"
            onClick={() => handleThemeChange('purple')}
          />
          <button className="pink" onClick={() => handleThemeChange('pink')} />
          <button className="red" onClick={() => handleThemeChange('red')} />
        </div>
      </div>
      <div className="full-wrapper">
        <Canvas>
          <directionalLight position={[0, 0, 2]} intensity={1} />
          <ambientLight intensity={0.5} />
          {/* Pass the selected theme color to the Cube */}
          <Cube position={[0, 0, 0]} color={theme} textureUrl={cubeMaterial} />
        </Canvas>
      </div>
    </div>
  );
};

export default App;
