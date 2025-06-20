'use client';

import { useEffect, useState } from 'react';

export default function StickySideButtons() {
  const [highlight, setHighlight] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setHighlight(true);
      setTimeout(() => setHighlight(false), 1000); // highlight for 1s
    }, 2000); // every 2s

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed top-32 right-0 z-40 flex">
      <a
        href="/sandipform"
        className={`bg-red-600 text-white text-lg font-bold py-3 w-10 text-center rounded-l-2xl transition-all duration-300 ${
          highlight ? 'bg-yellow-400 scale-110 shadow-lg' : ''
        }`}
      >
        <ul>
          <li>A</li>
          <li>P</li>
          <li>P</li>
          <li>L</li>
          <li>Y</li>
          <li className="p-2"></li>
          <li>N</li>
          <li>O</li>
          <li>W</li>
        </ul>
      </a>
    </div>
  );
}
