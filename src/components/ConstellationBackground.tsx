import { motion } from "framer-motion";

const ConstellationBackground = () => {
  // Da Vinci style constellation nodes and connections
  const nodes = [
    { x: 10, y: 15, r: 2 }, { x: 25, y: 30, r: 1.5 }, { x: 45, y: 12, r: 2.5 },
    { x: 60, y: 40, r: 1.8 }, { x: 80, y: 20, r: 2 }, { x: 35, y: 55, r: 1.5 },
    { x: 70, y: 60, r: 2.2 }, { x: 15, y: 70, r: 1.8 }, { x: 50, y: 75, r: 2 },
    { x: 90, y: 50, r: 1.5 }, { x: 20, y: 45, r: 1.2 }, { x: 75, y: 80, r: 1.8 },
    { x: 55, y: 25, r: 1 }, { x: 40, y: 85, r: 1.5 }, { x: 85, y: 35, r: 1.2 },
    { x: 30, y: 10, r: 1 }, { x: 65, y: 70, r: 1.3 }, { x: 95, y: 75, r: 1 },
  ];

  const lines = [
    [0, 1], [1, 2], [2, 4], [1, 5], [3, 6], [5, 7], [6, 8], [4, 9],
    [0, 10], [10, 5], [3, 12], [12, 2], [8, 13], [7, 13], [9, 14],
    [14, 4], [6, 16], [16, 11], [11, 17], [8, 16], [15, 0], [15, 2],
  ];

  // Da Vinci style circles (like Vitruvian Man measurements)
  const circles = [
    { cx: 50, cy: 45, r: 25 },
    { cx: 50, cy: 45, r: 38 },
    { cx: 35, cy: 30, r: 12 },
    { cx: 70, cy: 60, r: 15 },
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice">
        {/* Da Vinci measurement circles */}
        {circles.map((c, i) => (
          <motion.circle
            key={`circle-${i}`}
            cx={c.cx}
            cy={c.cy}
            r={c.r}
            fill="none"
            stroke="hsl(var(--accent-warm))"
            strokeWidth="0.15"
            strokeDasharray="0.5 1"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: [0, 0.15, 0.08], scale: 1 }}
            transition={{ duration: 3, delay: i * 0.5, repeat: Infinity, repeatType: "reverse", repeatDelay: 4 }}
          />
        ))}

        {/* Connection lines */}
        {lines.map(([a, b], i) => (
          <motion.line
            key={`line-${i}`}
            x1={nodes[a].x}
            y1={nodes[a].y}
            x2={nodes[b].x}
            y2={nodes[b].y}
            stroke="hsl(var(--foreground))"
            strokeWidth="0.12"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 0.2, 0.1] }}
            transition={{ duration: 2, delay: i * 0.1, repeat: Infinity, repeatType: "reverse", repeatDelay: 6 }}
          />
        ))}

        {/* Star nodes */}
        {nodes.map((node, i) => (
          <motion.circle
            key={`node-${i}`}
            cx={node.x}
            cy={node.y}
            r={node.r * 0.4}
            fill="hsl(var(--accent-warm))"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 0.5, 0.2] }}
            transition={{ duration: 3, delay: 0.5 + i * 0.15, repeat: Infinity, repeatType: "reverse", repeatDelay: 3 }}
          />
        ))}

        {/* Cross markers (Da Vinci style) */}
        {[nodes[2], nodes[6], nodes[8]].map((node, i) => (
          <g key={`cross-${i}`}>
            <motion.line
              x1={node.x - 1.5} y1={node.y}
              x2={node.x + 1.5} y2={node.y}
              stroke="hsl(var(--accent-warm))"
              strokeWidth="0.1"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.3 }}
              transition={{ delay: 2 + i * 0.3 }}
            />
            <motion.line
              x1={node.x} y1={node.y - 1.5}
              x2={node.x} y2={node.y + 1.5}
              stroke="hsl(var(--accent-warm))"
              strokeWidth="0.1"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.3 }}
              transition={{ delay: 2 + i * 0.3 }}
            />
          </g>
        ))}
      </svg>
    </div>
  );
};

export default ConstellationBackground;
