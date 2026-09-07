import confetti from 'canvas-confetti';

export const triggerPlacementConfetti = () => {
  // Center blast
  confetti({
    particleCount: 100,
    spread: 70,
    origin: { y: 0.6 },
    colors: ['#22c55e', '#f59e0b', '#00f0ff', '#a855f7', '#ec4899', '#ffffff'],
    disableForReducedMotion: true
  });

  // Left & Right Cannons
  setTimeout(() => {
    confetti({
      particleCount: 50,
      angle: 60,
      spread: 55,
      origin: { x: 0, y: 0.7 },
      colors: ['#22c55e', '#fbbf24', '#38bdf8']
    });
    confetti({
      particleCount: 50,
      angle: 120,
      spread: 55,
      origin: { x: 1, y: 0.7 },
      colors: ['#22c55e', '#fbbf24', '#ec4899']
    });
  }, 250);
};

export const triggerGrandCelebration = () => {
  const duration = 3.5 * 1000;
  const end = Date.now() + duration;

  const frame = () => {
    confetti({
      particleCount: 4,
      angle: 60,
      spread: 60,
      origin: { x: 0, y: 0.75 },
      colors: ['#22c55e', '#fbbf24', '#a855f7', '#00f0ff']
    });
    confetti({
      particleCount: 4,
      angle: 120,
      spread: 60,
      origin: { x: 1, y: 0.75 },
      colors: ['#ec4899', '#22c55e', '#fbbf24', '#ffffff']
    });

    if (Date.now() < end) {
      requestAnimationFrame(frame);
    }
  };
  frame();
};

export const triggerStarBurst = (x = 0.5, y = 0.5) => {
  confetti({
    particleCount: 30,
    spread: 360,
    startVelocity: 25,
    origin: { x, y },
    shapes: ['star', 'circle'],
    colors: ['#fbbf24', '#22c55e', '#38bdf8', '#f43f5e']
  });
};
