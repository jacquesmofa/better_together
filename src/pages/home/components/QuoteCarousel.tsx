
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import GlowingText from '../../../components/base/GlowingText';

const QuoteCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const quotes = [
    {
      text: "Two are better than one, because they have a good return for their labor: If either of them falls down, one can help the other up.",
      reference: "Ecclesiastes 4:9-10",
    },
    {
      text: "Above all, love each other deeply, because love covers over a multitude of sins.",
      reference: "1 Peter 4:8",
    },
    {
      text: "Therefore what God has joined together, let no one separate.",
      reference: "Mark 10:9",
    },
    {
      text: "Love is patient, love is kind. It does not envy, it does not boast, it is not proud.",
      reference: "1 Corinthians 13:4",
    },
    {
      text: "A cord of three strands is not quickly broken.",
      reference: "Ecclesiastes 4:12",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % quotes.length);
    }, 6000);

    return () => clearInterval(timer);
  }, [quotes.length]);

  return (
    <div className="relative py-24 bg-gradient-to-br from-blush-50 via-white to-blush-50 overflow-hidden">
      {/* Decorative Wave Top */}
      <div className="absolute top-0 left-0 right-0 h-16">
        <svg
          className="absolute top-0 w-full h-16"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0 C300,80 600,80 900,40 C1050,20 1150,0 1200,0 L1200,120 L0,120 Z"
            fill="white"
          />
        </svg>
      </div>

      {/* Decorative Wave Bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-16">
        <svg
          className="absolute bottom-0 w-full h-16"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,120 C300,40 600,40 900,80 C1050,100 1150,120 1200,120 L1200,0 L0,0 Z"
            fill="white"
          />
        </svg>
      </div>

      <div className="relative max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="font-display text-4xl md:text-5xl text-burgundy-800 mb-4">
            Words of Inspiration
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-gold-500 to-transparent mx-auto"></div>
        </motion.div>

        <div className="relative min-h-[300px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.8 }}
              className="absolute inset-0 flex flex-col items-center justify-center"
            >
              <div className="relative">
                <i className="ri-double-quotes-l text-6xl text-gold-400/30 absolute -top-8 -left-8"></i>
                <p className="font-serif text-2xl md:text-3xl text-gray-800 leading-relaxed mb-6 px-12">
                  {quotes[currentIndex].text}
                </p>
                <i className="ri-double-quotes-r text-6xl text-gold-400/30 absolute -bottom-8 -right-8"></i>
              </div>
              
              <GlowingText className="font-display text-xl text-burgundy-700 font-semibold">
                — {quotes[currentIndex].reference}
              </GlowingText>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center gap-3 mt-12">
          {quotes.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all cursor-pointer ${
                index === currentIndex
                  ? 'bg-gold-500 w-8'
                  : 'bg-burgundy-300 hover:bg-burgundy-400'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default QuoteCarousel;
