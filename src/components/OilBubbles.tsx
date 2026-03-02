import { useEffect, useState } from 'react';

interface Bubble {
  id: number;
  x: number;
  size: number;
  duration: number;
  delay: number;
}

export default function OilBubbles() {
  const [bubbles, setBubbles] = useState<Bubble[]>([]);

  useEffect(() => {
    // Create initial bubbles
    const initialBubbles: Bubble[] = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      size: Math.random() * 20 + 10,
      duration: Math.random() * 10 + 10,
      delay: Math.random() * 5
    }));
    setBubbles(initialBubbles);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {bubbles.map(bubble => (
        <div
          key={bubble.id}
          className="absolute bottom-0 rounded-full bg-[#0052FF]/10 animate-float"
          style={{
            left: `${bubble.x}%`,
            width: bubble.size,
            height: bubble.size,
            animationDuration: `${bubble.duration}s`,
            animationDelay: `${bubble.delay}s`,
          }}
        />
      ))}

      {/* Oil drip effect on sides */}
      <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-[#0052FF]/20 via-[#0052FF]/5 to-transparent" />
      <div className="absolute top-0 right-0 w-2 h-full bg-gradient-to-b from-[#0052FF]/20 via-[#0052FF]/5 to-transparent" />

      <style>{`
        @keyframes float {
          0% {
            transform: translateY(100vh) scale(0);
            opacity: 0;
          }
          10% {
            opacity: 0.6;
          }
          90% {
            opacity: 0.3;
          }
          100% {
            transform: translateY(-100px) scale(1);
            opacity: 0;
          }
        }

        .animate-float {
          animation: float linear infinite;
        }
      `}</style>
    </div>
  );
}
