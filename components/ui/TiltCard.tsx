import React, { useRef, useState, MouseEvent } from 'react';

interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

const TiltCard: React.FC<TiltCardProps> = ({ children, className = '', onClick }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;

    const div = cardRef.current;
    const rect = div.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    // Calculate rotation:
    // xPct varies from -0.5 to 0.5. If mouse is left (-0.5), rotate Y to left (negative deg).
    // yPct varies from -0.5 to 0.5. If mouse is top (-0.5), rotate X to top (positive deg).
    const x = -yPct * 20; // Max 10 deg tilt
    const y = xPct * 20;

    setRotation({ x, y });
    setOpacity(1);
  };

  const handleMouseLeave = () => {
    setRotation({ x: 0, y: 0 });
    setOpacity(0);
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      className={`relative transition-transform duration-200 ease-out ${className}`}
      style={{
        transform: `perspective(1000px) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg) scale3d(1, 1, 1)`,
      }}
    >
      {/* Glossy gradient overlay that moves with mouse */}
      <div 
        className="pointer-events-none absolute -inset-px opacity-0 transition-opacity duration-300 rounded-[inherit] z-10"
        style={{
            opacity,
            background: `radial-gradient(600px circle at ${50 + (rotation.y * 3)}% ${50 + (rotation.x * 3)}%, rgba(255,255,255,0.15), transparent 40%)`
        }}
      />
      
      {children}
    </div>
  );
};

export default TiltCard;