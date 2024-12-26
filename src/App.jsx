import { useState } from 'react';
import { Canvas } from '@react-three/fiber';
import Cube from './components/Cube';
import InputHandler from './components/InputHandler';
import ThemeChanger from './components/ThemeChanger';
import Confetti from 'react-confetti';
import cubeMaterial from './assets/cube-material.jpg';
import './App.css';

const App = () => {
  const defaultText = '';
  const [title, setTitle] = useState('Los de som op');
  const [theme, setTheme] = useState('red'); // State for the current theme
  const [party, setParty] = useState(false);

  return (
    <div className={`theme-${theme}`}>
      <Confetti
        numberOfPieces={party ? 500 : 0}
        recycle={false}
        colors={['#AEE1FF', '#CBDDF8']}
        onConfettiComplete={(confetti) => {
          setParty(false);
          confetti.reset();
        }}
      />
      <div className="fixed-input-holder">
        <div className="fixed-input-box">
          <InputHandler
            defaultText={defaultText}
            title={title}
            setTitle={setTitle}
            party={party}
            setParty={setParty}
          />
        </div>
      </div>
      <ThemeChanger handleThemeChange={setTheme} />
      <h1 className="variable-font-h1 variable-font-color">
        {title || defaultText}
      </h1>
      <div className="full-wrapper">
        <Canvas>
          <directionalLight position={[0, 0, 2]} intensity={1} />
          <ambientLight intensity={0.5} />
          <Cube position={[0, 0, 0]} color={theme} textureUrl={cubeMaterial} />
        </Canvas>
      </div>
    </div>
  );
};

export default App;
