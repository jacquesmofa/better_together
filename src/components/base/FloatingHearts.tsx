
import { motion } from 'framer-motion';

interface FloatingHeartsProps {
  count?: number;
}

const FloatingHearts = ({ count = 8 }: FloatingHeartsProps) => {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {Array.from({ length: count }).map((_, index) => (
        <motion.div
          key={index}
          className="absolute text-burgundy-300/20"
          style={{
            left: `${Math.random() * 100}%`,
            fontSize: `${Math.random() * 20 + 15}px`,
          }}
          animate={{
            y: [1000, -100],
            opacity: [0, 0.3, 0.3, 0],
            scale: [0, 1, 1, 0.8],
          }}
          transition={{
            duration: 8 + Math.random() * 4,
            repeat: Infinity,
            delay: Math.random() * 8,
            ease: 'easeInOut',
          }}
        >
          <i className="ri-heart-fill"></i>
        </motion.div>
      ))}
    </div>
  );
};

export default FloatingHearts;
