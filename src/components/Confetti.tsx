import { useEffect, useState } from "react";

interface ConfettiPiece {
  id: number;
  left: string;
  animationDelay: string;
  animationDuration: string;
  backgroundColor: string;
}

export const Confetti = () => {
  const [confetti, setConfetti] = useState<ConfettiPiece[]>([]);

  useEffect(() => {
    const colors = [
      "hsl(var(--celebration-gold))",
      "hsl(var(--celebration-coral))",
      "hsl(var(--celebration-warm))",
      "hsl(var(--accent))",
    ];

    const pieces = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      animationDelay: `${Math.random() * 3}s`,
      animationDuration: `${3 + Math.random() * 2}s`,
      backgroundColor: colors[Math.floor(Math.random() * colors.length)],
    }));

    setConfetti(pieces);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-50">
      {confetti.map((piece) => (
        <div
          key={piece.id}
          className="absolute w-2 h-2 animate-confetti"
          style={{
            left: piece.left,
            animationDelay: piece.animationDelay,
            animationDuration: piece.animationDuration,
            backgroundColor: piece.backgroundColor,
          }}
        />
      ))}
    </div>
  );
};
