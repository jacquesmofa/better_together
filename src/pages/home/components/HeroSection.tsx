
import { motion } from 'framer-motion';
import FloatingHearts from '../../../components/base/FloatingHearts';

const HeroSection = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0">
        <img
          src="https://readdy.ai/api/search-image?query=elegant%20romantic%20couple%20in%20love%20standing%20together%20in%20soft%20natural%20lighting%20with%20warm%20golden%20hour%20glow%2C%20sophisticated%20modern%20lifestyle%20photography%2C%20intimate%20moment%2C%20soft%20focus%20dreamy%20atmosphere%2C%20luxury%20aesthetic%2C%20gentle%20embrace%2C%20peaceful%20serene%20background%20with%20bokeh%20effect&width=1920&height=1080&seq=hero-couple-bg&orientation=landscape"
          alt="Jacques and Sweetness"
          className="w-full h-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/40"></div>
      </div>

      {/* Floating Hearts */}
      <FloatingHearts count={10} />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 w-full">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left Side - Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="lg:w-5/12"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-burgundy-600/30 to-gold-500/30 rounded-[3rem] blur-2xl"></div>
              <img
                src="https://readdy.ai/api/search-image?query=beautiful%20elegant%20Christian%20couple%20portrait%2C%20sophisticated%20romantic%20photography%2C%20warm%20loving%20embrace%2C%20soft%20natural%20lighting%2C%20luxury%20lifestyle%20aesthetic%2C%20genuine%20smiles%2C%20faith-based%20relationship%2C%20modern%20glamorous%20style%2C%20intimate%20connection%2C%20professional%20photography&width=600&height=800&seq=hero-couple-portrait&orientation=portrait"
                alt="Jacques and Sweetness"
                className="relative rounded-[3rem] shadow-2xl w-full h-auto object-cover"
              />
            </div>
          </motion.div>

          {/* Right Side - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="lg:w-7/12 text-center lg:text-left"
          >
            <motion.h1
              className="font-script text-6xl md:text-7xl lg:text-8xl text-white mb-6"
              animate={{
                textShadow: [
                  '0 0 20px rgba(241, 165, 19, 0.5)',
                  '0 0 40px rgba(241, 165, 19, 0.8)',
                  '0 0 20px rgba(241, 165, 19, 0.5)',
                ],
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              Better Together
            </motion.h1>
            
            <h2 className="font-display text-3xl md:text-4xl text-white mb-6">
              A Life Lived in Christ
            </h2>

            <p className="font-sans text-lg text-white/90 leading-relaxed mb-8 max-w-2xl">
              Glorifying God by sharing the journey of a Christ-centered relationship, offering practical biblical advice, and fostering spiritual growth for individuals and couples seeking to honor Him in their relationships.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button
                onClick={() => scrollToSection('our-story')}
                className="px-8 py-4 bg-burgundy-700 text-white font-sans font-semibold rounded-full hover:bg-burgundy-800 transition-all hover:scale-105 shadow-lg whitespace-nowrap cursor-pointer"
              >
                Discover Our Story
              </button>
              <button
                onClick={() => scrollToSection('the-word')}
                className="px-8 py-4 bg-transparent border-2 border-gold-400 text-white font-sans font-semibold rounded-full hover:bg-gold-400 hover:text-burgundy-900 transition-all hover:scale-105 shadow-lg whitespace-nowrap cursor-pointer"
              >
                Explore The Word
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <i className="ri-arrow-down-line text-3xl text-white/80"></i>
      </motion.div>
    </div>
  );
};

export default HeroSection;
