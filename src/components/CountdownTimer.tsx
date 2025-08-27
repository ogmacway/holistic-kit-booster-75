import React, { useState, useEffect } from 'react';

interface CountdownTimerProps {
  initialHours?: number;
}

const CountdownTimer: React.FC<CountdownTimerProps> = ({ initialHours = 24 }) => {
  const [timeLeft, setTimeLeft] = useState({
    hours: initialHours,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        }
        if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        }
        if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex items-center justify-center space-x-4 bg-destructive/10 border border-destructive/20 rounded-lg p-4">
      <div className="text-center">
        <div className="text-3xl font-bold text-destructive">
          {String(timeLeft.hours).padStart(2, '0')}
        </div>
        <div className="text-sm text-muted-foreground">Horas</div>
      </div>
      <div className="text-2xl text-destructive">:</div>
      <div className="text-center">
        <div className="text-3xl font-bold text-destructive">
          {String(timeLeft.minutes).padStart(2, '0')}
        </div>
        <div className="text-sm text-muted-foreground">Min</div>
      </div>
      <div className="text-2xl text-destructive">:</div>
      <div className="text-center">
        <div className="text-3xl font-bold text-destructive">
          {String(timeLeft.seconds).padStart(2, '0')}
        </div>
        <div className="text-sm text-muted-foreground">Seg</div>
      </div>
    </div>
  );
};

export default CountdownTimer;