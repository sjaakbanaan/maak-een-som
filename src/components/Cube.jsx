import PropTypes from 'prop-types';
import { useFrame } from '@react-three/fiber';
import { useRef, useState } from 'react';
import { TextureLoader } from 'three';
import { useLoader } from '@react-three/fiber';

const Cube = ({ position = [], size = [4, 4, 4], color = '', textureUrl }) => {
  const ref = useRef();
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });

  // Load the texture
  const texture = useLoader(TextureLoader, textureUrl);

  // Rotation logic
  useFrame((state, delta) => {
    if (!isDragging) {
      ref.current.rotation.x += delta / 2;
      ref.current.rotation.y += delta / 2;
    }
  });

  const handlePointerDown = (event) => {
    setIsDragging(true);
    setDragStart({ x: event.clientX, y: event.clientY });
  };

  const handlePointerMove = (event) => {
    if (!isDragging) return;

    const deltaX = (event.clientX - dragStart.x) * 0.01;
    const deltaY = (event.clientY - dragStart.y) * 0.01;

    ref.current.rotation.y += deltaX;
    ref.current.rotation.x += deltaY;

    setDragStart({ x: event.clientX, y: event.clientY });
  };

  const handlePointerUp = () => {
    setIsDragging(false);
  };

  return (
    <mesh
      position={position}
      ref={ref}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerOut={handlePointerUp} // Handle mouse leaving the cube
    >
      <boxGeometry args={size} />
      <meshStandardMaterial map={texture} color={color} />
    </mesh>
  );
};

Cube.propTypes = {
  position: PropTypes.array.isRequired,
  size: PropTypes.array,
  color: PropTypes.string,
  textureUrl: PropTypes.string.isRequired, // The texture URL is required
};

export default Cube;
