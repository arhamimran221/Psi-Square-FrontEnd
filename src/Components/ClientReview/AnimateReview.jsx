import React, { useRef, useEffect } from 'react';

export default function AnimatedValue({ start, end, duration }) {
  const objRef = useRef(null);

  useEffect(() => {
    const obj = objRef.current;
    let startTimestamp = null;

    const step = timestamp => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      obj.innerHTML = Math.floor(progress * (end - start) + start);
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };

    window.requestAnimationFrame(step);

    return () => {
      obj.innerHTML = end;
    };
  }, [start, end, duration]);

  return <div ref={objRef}></div>;
}
