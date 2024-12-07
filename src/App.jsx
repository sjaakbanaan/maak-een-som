import { useState } from 'react';
import { Canvas } from '@react-three/fiber';
import Cube from './components/Cube';
import cubeMaterial from './assets/cube-material.jpg';
import './App.css';

const App = () => {
  const [title, setTitle] = useState('Wie dit leest is gek');

  const handleInputChange = (event) => {
    setTitle(event.target.value);
  };

  return (
    <>
      <h1 className="variable-font-h1">{title}</h1>
      <input
        type="text"
        className="fixed-input"
        placeholder="Zeg 't maar..."
        onChange={handleInputChange}
        value={title}
      />
      <div style={{ width: '100vw', height: '100vh' }}>
        <Canvas>
          <directionalLight position={[0, 0, 2]} intensity={1} />
          <ambientLight intensity={0.5} />
          <Cube position={[0, 0, 0]} color="red" textureUrl={cubeMaterial} />
        </Canvas>
      </div>
    </>
  );
};

export default App;
