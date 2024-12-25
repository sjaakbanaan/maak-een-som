import { useState } from 'react';
import { Canvas } from '@react-three/fiber';
import Cube from './components/Cube';
import InputHandler from './components/InputHandler';
import ThemeChanger from './components/ThemeChanger';
import cubeMaterial from './assets/cube-material.jpg';
import './App.css';

const App = () => {
  const defaultText = '';
  const [title, setTitle] = useState('Los de som op');
  const [theme, setTheme] = useState('red'); // State for the current theme

  return (
    <div className={`theme-${theme}`}>
      <h1 className="variable-font-h1 variable-font-color">
        {title || defaultText}
      </h1>
      <div className="fixed-input-holder">
        <InputHandler
          defaultText={defaultText}
          title={title}
          setTitle={setTitle}
          setTheme={setTheme}
        />
        <ThemeChanger handleThemeChange={setTheme} />
      </div>
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
