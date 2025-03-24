const clickSound = new Audio('/Kaue-Calixto/sounds/click.mp3');
const revealSound = new Audio('/Kaue-Calixto/sounds/reveal.mp3');

export const playClickSound = () => {
  clickSound.currentTime = 0;
  clickSound.play().catch(() => {});
};

export const playRevealSound = () => {
  revealSound.currentTime = 0;
  revealSound.play().catch(() => {});
};