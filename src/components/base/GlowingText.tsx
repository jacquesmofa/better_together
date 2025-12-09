
import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface GlowingTextProps {
  children: ReactNode;
  className?: string;
}

const GlowingText = ({ children, className = '' }: GlowingTextProps) => {
  return (
    <motion.div
      className={`relative inline-block ${className}`}
      animate={{
        textShadow: [
          '0 0 10px rgba(241, 165, 19, 0.3)',
          '0 0 20px rgba(241, 165, 19, 0.6)',
          '0 0 10px rgba(241, 165, 19, 0.3)',
        ],
      }}
      transition={{
        duration: 3,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
    >
      {children}
    </motion.div>
  );
};

export default GlowingText;
