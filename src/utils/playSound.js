import soundFile from '../assets/sound.mp3';
import soundFileWrong from '../assets/sound-wrong.mp3';

export const playSound = (wrong) => {
  const soundToPlay = wrong ? soundFileWrong : soundFile;
  const audio = new Audio(soundToPlay);
  audio.play();
};
