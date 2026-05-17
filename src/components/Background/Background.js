import { useEffect, useState } from 'react';

const symbols = ['🐍 Python', '🧮 C', '⚙️ C++', '✨ JS', '🌐 HTML', '🎨 CSS', '🍃 MongoDB', '⚛️ React', '🐙 GitHub', '🐳 Docker', '🗄️ NoSQL', 'const', 'let', '=>', '{}', '[]'];

export const useBackgroundChips = () => {
  const [chips, setChips] = useState([]);
  const [reduced, setReduced] = useState(window.matchMedia('(prefers-reduced-motion: reduce)').matches);

  useEffect(() => {
    const mqReduced = window.matchMedia('(prefers-reduced-motion: reduce)');
    const mqMobile = window.matchMedia('(max-width: 640px)');

    const render = () => {
      const mobile = mqMobile.matches;
      const count = mobile ? 15 : 30;
      const minSize = mobile ? 9 : 10;
      const maxSize = mobile ? 18 : 22;
      const next = Array.from({ length: count }, (_, i) => ({
        id: i,
        text: symbols[Math.floor(Math.random() * symbols.length)],
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        size: `${minSize + Math.random() * (maxSize - minSize)}px`,
        duration: `${10 + Math.random() * 20}s`,
        delay: `${Math.random() * -30}s`,
        rotation: `${Math.random() * 40 - 20}deg`,
        drift: `${Math.random() * 40 - 20}px`
      }));
      setChips(next);
    };

    const onReduced = () => setReduced(mqReduced.matches);
    render();
    onReduced();
    mqMobile.addEventListener('change', render);
    mqReduced.addEventListener('change', onReduced);
    return () => {
      mqMobile.removeEventListener('change', render);
      mqReduced.removeEventListener('change', onReduced);
    };
  }, []);

  return { chips, reduced };
};
