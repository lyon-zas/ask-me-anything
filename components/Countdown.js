"use client";

import { useEffect, useState } from "react";

// The start time is still to be announced, so count down to the start of the day (WAT, UTC+1).
const TARGET = new Date("2026-10-17T00:00:00+01:00").getTime();

const pad = (n) => String(n).padStart(2, "0");

export default function Countdown() {
  const [left, setLeft] = useState(null);

  useEffect(() => {
    const tick = () => setLeft(Math.max(0, TARGET - Date.now()));
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  const s = left === null ? null : Math.floor(left / 1000);
  const parts = [
    ["Days", s === null ? "--" : pad(Math.floor(s / 86400))],
    ["Hours", s === null ? "--" : pad(Math.floor((s % 86400) / 3600))],
    ["Mins", s === null ? "--" : pad(Math.floor((s % 3600) / 60))],
    ["Secs", s === null ? "--" : pad(s % 60)],
  ];

  if (left === 0) {
    return <p className="countdown-done">The room is open. See you there.</p>;
  }

  return (
    <div className="countdown" role="timer" aria-label="Time until Saturday 17 October 2026">
      {parts.map(([label, value]) => (
        <div key={label}>
          <b>{value}</b>
          <span>{label}</span>
        </div>
      ))}
    </div>
  );
}
