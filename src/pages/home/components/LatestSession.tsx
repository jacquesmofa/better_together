
import { motion } from 'framer-motion';

const LatestSession = () => {
  return (
    <div className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative max-w-2xl mx-auto"
        >
          {/* Decorative Border */}
          <div className="absolute inset-0 bg-gradient-to-br from-burgundy-600 to-gold-500 rounded-[3rem] opacity-20 blur-xl"></div>
          
          <div className="relative bg-gradient-to-br from-ivory-50 to-gold-50 rounded-[3rem] p-12 shadow-2xl border-4 border-burgundy-200">
            {/* Glowing Icon */}
            <motion.div
              className="absolute -top-8 right-12 w-16 h-16 bg-gold-500 rounded-full flex items-center justify-center shadow-lg"
              animate={{
                boxShadow: [
                  '0 0 20px rgba(241, 165, 19, 0.5)',
                  '0 0 40px rgba(241, 165, 19, 0.8)',
                  '0 0 20px rgba(241, 165, 19, 0.5)',
                ],
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <i className="ri-hand-heart-fill text-2xl text-white"></i>
            </motion.div>

            <div className="text-center">
              <p className="font-script text-3xl text-burgundy-700 mb-4">
                Our Latest Session
              </p>
              
              <div className="mb-6">
                <p className="font-display text-5xl font-bold text-burgundy-900 mb-2">
                  Saturday Morning
                </p>
                <p className="font-sans text-xl text-gray-700">
                  Every Week at 9:00 AM EST
                </p>
              </div>

              <div className="bg-white/80 rounded-2xl p-6 mb-6">
                <h3 className="font-display text-2xl font-semibold text-burgundy-800 mb-3">
                  Worship & Prayer Session
                </h3>
                <p className="font-sans text-base text-gray-700 leading-relaxed">
                  Join us for a powerful time of worship, prayer, and spiritual encouragement. Together, we seek God's presence and lift up our hearts in praise and intercession.
                </p>
              </div>

              <button
                onClick={() => {
                  const element = document.getElementById('the-word');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}
                className="px-8 py-4 bg-burgundy-700 text-white font-sans font-semibold rounded-full hover:bg-burgundy-800 transition-all hover:scale-105 shadow-lg whitespace-nowrap cursor-pointer"
              >
                Submit Prayer Request
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default LatestSession;
