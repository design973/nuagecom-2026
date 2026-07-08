'use client';

import { useEffect, useRef, useState } from 'react';

const easeOutExpo = (t: number) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t));

/**
 * Anime un compteur de 0 jusqu'à `target` lorsque `start` passe à true.
 * Se déclenche une seule fois (utilisé avec useInView pour un déclenchement au scroll).
 */
export function useCountUp(target: number, start: boolean, duration = 1400): number {
  const [value, setValue] = useState(0);
  const frame = useRef<number | undefined>(undefined);
  const hasRun = useRef(false);

  useEffect(() => {
    if (!start || hasRun.current) return;
    hasRun.current = true;

    const startTime = performance.now();

    const tick = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      setValue(Math.round(target * easeOutExpo(progress)));
      if (progress < 1) {
        frame.current = requestAnimationFrame(tick);
      }
    };

    frame.current = requestAnimationFrame(tick);
    return () => {
      if (frame.current) cancelAnimationFrame(frame.current);
    };
  }, [start, target, duration]);

  return value;
}
