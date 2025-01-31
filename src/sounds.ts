const clickSound = new Audio('/sounds/click.mp3');
const revealSound = new Audio('/sounds/reveal.mp3');

export const playClickSound = () => {
  clickSound.currentTime = 0;
  clickSound.play().catch(() => {});
};

export const playRevealSound = () => {
  revealSound.currentTime = 0;
  revealSound.play().catch(() => {});
};