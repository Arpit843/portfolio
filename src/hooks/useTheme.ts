import { useState, useEffect, useCallback } from 'react';

type Theme = 'light' | 'dark';

function getTimeBasedTheme(): Theme {
  const hour = new Date().getHours();
  return hour >= 6 && hour < 18 ? 'light' : 'dark';
}

function getTimePeriod() {
  const h = new Date().getHours();
  if (h >= 6 && h < 12) return { period: 'morning',   orbClass: 'orb-morning'   };
  if (h >= 12 && h < 17) return { period: 'afternoon', orbClass: 'orb-afternoon' };
  if (h >= 17 && h < 21) return { period: 'evening',   orbClass: 'orb-evening'   };
  return                         { period: 'night',     orbClass: 'orb-night'     };
}

export function useTheme() {
  const [theme, setTheme] = useState<Theme>(getTimeBasedTheme);
  const [manualOverride, setManualOverride] = useState(false);
  const [timeInfo, setTimeInfo] = useState(getTimePeriod);
  const [clockStr, setClockStr] = useState('');

  const formatClock = () => {
    const now = new Date();
    const h = String(now.getHours()).padStart(2, '0');
    const m = String(now.getMinutes()).padStart(2, '0');
    return `${h}:${m}`;
  };

  useEffect(() => {
    setClockStr(formatClock());
    const tick = setInterval(() => {
      setClockStr(formatClock());
      setTimeInfo(getTimePeriod());
      if (!manualOverride) setTheme(getTimeBasedTheme());
    }, 30_000);
    return () => clearInterval(tick);
  }, [manualOverride]);

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') root.classList.add('dark');
    else root.classList.remove('dark');
  }, [theme]);

  const toggle = useCallback(() => {
    setManualOverride(true);
    setTheme(t => (t === 'dark' ? 'light' : 'dark'));
  }, []);

  return { theme, toggle, timeInfo, clockStr };
}
