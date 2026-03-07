import { motion } from "framer-motion";

interface OrionConstellationProps {
  className?: string;
  size?: "sm" | "md" | "lg" | "xl";
  animate?: boolean;
  showStars?: boolean;
  opacity?: number;
}

// Real Orion star positions (simplified & normalized to viewBox)
const stars = [
  { name: "Betelgeuse", x: 85, y: 60, r: 3.5, brightness: 1 },
  { name: "Bellatrix", x: 215, y: 55, r: 2.8, brightness: 0.9 },
  { name: "Mintaka", x: 130, y: 145, r: 2, brightness: 0.7 },
  { name: "Alnilam", x: 150, y: 155, r: 2.2, brightness: 0.8 },
  { name: "Alnitak", x: 170, y: 165, r: 2, brightness: 0.7 },
  { name: "Saiph", x: 100, y: 265, r: 2.5, brightness: 0.85 },
  { name: "Rigel", x: 220, y: 275, r: 3.2, brightness: 0.95 },
];

// Constellation lines connecting stars
const lines = [
  // Shoulders
  "M85,60 L215,55",
  // Left shoulder to belt
  "M85,60 L130,145",
  // Right shoulder to belt
  "M215,55 L170,165",
  // Belt
  "M130,145 L150,155 L170,165",
  // Belt to left foot
  "M130,145 L100,265",
  // Belt to right foot
  "M170,165 L220,275",
];

const sizeMap = {
  sm: "w-[80px] h-[100px]",
  md: "w-[160px] h-[200px]",
  lg: "w-[240px] h-[300px]",
  xl: "w-[400px] h-[500px]",
};

const OrionConstellation = ({
  className = "",
  size = "md",
  animate = true,
  showStars = true,
  opacity = 0.3,
}: OrionConstellationProps) => {
  return (
    <svg
      viewBox="0 0 300 330"
      className={`${sizeMap[size]} ${className}`}
      style={{ opacity }}
      fill="none"
    >
      {/* Constellation lines */}
      {lines.map((d, i) => (
        <motion.path
          key={i}
          d={d}
          stroke="hsl(var(--foreground))"
          strokeWidth="0.8"
          strokeOpacity={0.25}
          initial={animate ? { pathLength: 0 } : { pathLength: 1 }}
          animate={{ pathLength: 1 }}
          transition={{
            duration: 1.5,
            delay: i * 0.2,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Stars */}
      {showStars &&
        stars.map((star, i) => (
          <motion.circle
            key={star.name}
            cx={star.x}
            cy={star.y}
            r={star.r}
            fill="hsl(var(--foreground))"
            initial={animate ? { opacity: 0, scale: 0 } : {}}
            animate={{ opacity: star.brightness, scale: 1 }}
            transition={{
              duration: 0.6,
              delay: animate ? 0.5 + i * 0.15 : 0,
            }}
            className="animate-twinkle"
            style={{ animationDelay: `${i * 0.7}s` }}
          />
        ))}
    </svg>
  );
};

export default OrionConstellation;
