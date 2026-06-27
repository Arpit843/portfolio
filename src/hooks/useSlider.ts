import { useState, useCallback, useEffect, useRef } from 'react';

export function useSlider(totalItems: number) {
  const [currentIdx, setCurrentIdx] = useState(0);
  const vpRef = useRef<HTMLDivElement>(null);

  const getColsVisible = useCallback(() => {
    const w = vpRef.current?.offsetWidth ?? window.innerWidth;
    if (w < 560) return 1;
    if (w < 900) return 2;
    return 3;
  }, []);

  const maxIdx = useCallback(
    () => Math.max(0, totalItems - getColsVisible()),
    [totalItems, getColsVisible]
  );

  const goTo = useCallback(
    (i: number) => setCurrentIdx(Math.max(0, Math.min(i, maxIdx()))),
    [maxIdx]
  );

  const prev = useCallback(() => goTo(currentIdx - 1), [currentIdx, goTo]);
  const next = useCallback(() => goTo(currentIdx + 1), [currentIdx, goTo]);

  const getOffset = useCallback(() => {
    if (!vpRef.current) return 0;
    const cols = getColsVisible();
    const gap = 20;
    const cardW = (vpRef.current.offsetWidth - (cols - 1) * gap) / cols;
    return currentIdx * (cardW + gap);
  }, [currentIdx, getColsVisible]);

  // Clamp on resize
  useEffect(() => {
    const handler = () => {
      setCurrentIdx(i => Math.min(i, maxIdx()));
    };
    window.addEventListener('resize', handler);
    return () => window.removeEventListener('resize', handler);
  }, [maxIdx]);

  const canPrev = currentIdx > 0;
  const canNext = currentIdx < maxIdx();
  const cols = getColsVisible();
  const from = currentIdx + 1;
  const to = Math.min(currentIdx + cols, totalItems);
  const dotCount = Math.max(0, totalItems - cols + 1);

  return { currentIdx, goTo, prev, next, canPrev, canNext, getOffset, vpRef, from, to, dotCount, cols };
}
