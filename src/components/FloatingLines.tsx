import { useEffect, useState } from 'react';

const FloatingLines = () => {
  const [lines, setLines] = useState<Array<{
    id: number;
    height: number;
    top: number;
    delay: number;
    duration: number;
  }>>([]);

  useEffect(() => {
    const createLine = () => {
      const newLine = {
        id: Math.random(),
        height: Math.random() * 200 + 100, // Random height between 100-300px
        top: Math.random() * window.innerHeight,
        delay: Math.random() * 2, // Random delay 0-2s
        duration: Math.random() * 4 + 6, // Random duration 6-10s
      };
      
      setLines(prev => [...prev, newLine]);
      
      // Remove line after animation completes
      setTimeout(() => {
        setLines(prev => prev.filter(line => line.id !== newLine.id));
      }, (newLine.duration + newLine.delay) * 1000);
    };

    // Create initial lines
    for (let i = 0; i < 3; i++) {
      setTimeout(createLine, i * 2000);
    }

    // Create new lines periodically
    const interval = setInterval(() => {
      if (Math.random() > 0.5) { // 50% chance to create a line
        createLine();
      }
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="floating-lines">
      {lines.map((line) => (
        <div
          key={line.id}
          className="floating-line"
          style={{
            height: `${line.height}px`,
            top: `${line.top}px`,
            animationDelay: `${line.delay}s`,
            animationDuration: `${line.duration}s`,
          }}
        />
      ))}
    </div>
  );
};

export default FloatingLines;