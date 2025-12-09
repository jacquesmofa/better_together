
import { useState } from 'react';
import { motion } from 'framer-motion';
import GlowingText from '../../../components/base/GlowingText';

const TheWord = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    prayer: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const bibles = [
    { name: 'King James Version', language: 'English', icon: 'ri-book-line' },
    { name: 'New International Version', language: 'English', icon: 'ri-book-2-line' },
    { name: 'La Bible Louis Segond', language: 'French', icon: 'ri-book-3-line' },
    { name: 'English Standard Version', language: 'English', icon: 'ri-book-open-line' },
  ];

  const encouragements = [
    "Love the Lord your God with all your heart and with all your soul and with all your mind.",
    "Draw near to God and He will draw near to you.",
    "Seek first the kingdom of God and His righteousness.",
    "Trust in the Lord with all your heart and lean not on your own understanding.",
    "Be still and know that I am God.",
  ];

  const [currentEncouragement] = useState(
    encouragements[Math.floor(Math.random() * encouragements.length)]
  );

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setSubmitSuccess(true);
    setFormData({ name: '', email: '', prayer: '' });
    
    setTimeout(() => setSubmitSuccess(false), 5000);
  };

  return (
    <div className="relative bg-gradient-to-b from-burgundy-900 via-burgundy-800 to-burgundy-900 py-24 overflow-hidden">
      {/* Animated Light Rays */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute top-1/2 left-1/2 w-1 h-full bg-gradient-to-b from-transparent via-gold-400/20 to-transparent"
            style={{
              transformOrigin: 'top center',
              transform: `rotate(${i * 30}deg)`,
            }}
            animate={{
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              delay: i * 0.5,
            }}
          />
        ))}
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.div
            className="inline-block mb-6"
            animate={{
              boxShadow: [
                '0 0 30px rgba(241, 165, 19, 0.3)',
                '0 0 60px rgba(241, 165, 19, 0.6)',
                '0 0 30px rgba(241, 165, 19, 0.3)',
              ],
            }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            <i className="ri-book-open-line text-7xl text-gold-400"></i>
          </motion.div>
          <h2 className="font-display text-5xl md:text-6xl text-white mb-4">
            The Word
          </h2>
          <p className="font-script text-3xl text-gold-300">
            Your spiritual foundation
          </p>
        </motion.div>

        {/* Bible Downloads */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h3 className="font-display text-3xl text-white text-center mb-12">
            Download the Bible
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {bibles.map((bible, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.05 }}
                className="bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all cursor-pointer group"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-burgundy-600 to-gold-500 rounded-xl flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform">
                  <i className={`${bible.icon} text-3xl text-white`}></i>
                </div>
                <h4 className="font-display text-lg font-semibold text-burgundy-800 mb-2 text-center">
                  {bible.name}
                </h4>
                <p className="font-sans text-sm text-gray-600 mb-4 text-center">
                  {bible.language}
                </p>
                <button className="w-full px-4 py-3 bg-burgundy-700 text-white font-sans font-semibold rounded-full hover:bg-burgundy-800 transition-all whitespace-nowrap">
                  <i className="ri-download-line mr-2"></i>
                  Download PDF
                </button>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Daily Encouragement Widget */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="max-w-3xl mx-auto bg-gradient-to-br from-ivory-50 to-gold-50 rounded-[3rem] p-12 shadow-2xl relative">
            <motion.div
              className="absolute inset-0 rounded-[3rem] border-2 border-gold-400"
              animate={{
                boxShadow: [
                  '0 0 20px rgba(241, 165, 19, 0.3)',
                  '0 0 40px rgba(241, 165, 19, 0.6)',
                  '0 0 20px rgba(241, 165, 19, 0.3)',
                ],
              }}
              transition={{ duration: 3, repeat: Infinity }}
            />
            <div className="relative text-center">
              <h3 className="font-script text-4xl text-burgundy-800 mb-6">
                Love God More Today
              </h3>
              <GlowingText>
                <p className="font-serif text-2xl text-gray-800 leading-relaxed mb-6">
                  "{currentEncouragement}"
                </p>
              </GlowingText>
              <p className="font-sans text-sm text-gray-600 italic">
                Refreshes every 3 hours
              </p>
            </div>
          </div>
        </motion.div>

        {/* Reading Plan */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="bg-white rounded-[3rem] overflow-hidden shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="relative h-80 lg:h-auto">
                <img
                  src="https://readdy.ai/api/search-image?query=elegant%20open%20Bible%20on%20wooden%20table%2C%20soft%20morning%20light%20streaming%20through%20window%2C%20peaceful%20devotional%20setting%2C%20warm%20golden%20tones%2C%20simple%20clean%20background%2C%20spiritual%20atmosphere%2C%20high%20quality%20photography%2C%20gentle%20shadows&width=800&height=600&seq=bible-reading&orientation=landscape"
                  alt="Bible Reading"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-12 flex flex-col justify-center">
                <h3 className="font-display text-3xl font-semibold text-burgundy-800 mb-4">
                  2026 Bible Reading Plan
                </h3>
                <p className="font-sans text-base text-gray-700 leading-relaxed mb-6">
                  Start your journey through God's Word with our comprehensive yearly reading plan. Designed to help you read the entire Bible in one year, with daily readings that fit into your busy schedule.
                </p>
                <button className="px-8 py-4 bg-gold-500 text-burgundy-900 font-sans font-semibold rounded-full hover:bg-gold-600 transition-all hover:scale-105 shadow-lg whitespace-nowrap cursor-pointer inline-flex items-center justify-center">
                  <i className="ri-download-2-line mr-2 text-xl"></i>
                  Download Reading Plan
                </button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Worship Session & Prayer Request */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-burgundy-800 to-burgundy-900 rounded-[3rem] p-12 shadow-2xl border-2 border-gold-400/30"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Session Info */}
            <div className="text-white">
              <h3 className="font-display text-3xl font-semibold mb-6">
                Saturday Worship & Prayer Session
              </h3>
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-4">
                  <i className="ri-calendar-line text-2xl text-gold-400 mt-1"></i>
                  <div>
                    <p className="font-sans font-semibold">Every Saturday</p>
                    <p className="font-sans text-sm text-white/80">Weekly gathering</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <i className="ri-time-line text-2xl text-gold-400 mt-1"></i>
                  <div>
                    <p className="font-sans font-semibold">9:00 AM EST</p>
                    <p className="font-sans text-sm text-white/80">Morning session</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <i className="ri-heart-line text-2xl text-gold-400 mt-1"></i>
                  <div>
                    <p className="font-sans font-semibold">Worship & Prayer</p>
                    <p className="font-sans text-sm text-white/80">Seeking God's presence together</p>
                  </div>
                </div>
              </div>
              <p className="font-sans text-base text-white/90 leading-relaxed">
                Join us for a powerful time of worship, prayer, and spiritual encouragement. Together, we seek God's presence and lift up our hearts in praise and intercession for one another.
              </p>
            </div>

            {/* Prayer Request Form */}
            <div>
              <h3 className="font-display text-2xl font-semibold text-white mb-6">
                Submit Your Prayer Request
              </h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <input
                    type="text"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="w-full px-6 py-4 bg-white/10 border-2 border-white/30 rounded-2xl text-white placeholder-white/60 focus:border-gold-400 focus:outline-none focus:ring-2 focus:ring-gold-400/50 transition-all font-sans text-sm"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="w-full px-6 py-4 bg-white/10 border-2 border-white/30 rounded-2xl text-white placeholder-white/60 focus:border-gold-400 focus:outline-none focus:ring-2 focus:ring-gold-400/50 transition-all font-sans text-sm"
                  />
                </div>
                <div>
                  <textarea
                    placeholder="Your Prayer Request"
                    value={formData.prayer}
                    onChange={(e) => setFormData({ ...formData, prayer: e.target.value })}
                    required
                    maxLength={500}
                    rows={5}
                    className="w-full px-6 py-4 bg-white/10 border-2 border-white/30 rounded-2xl text-white placeholder-white/60 focus:border-gold-400 focus:outline-none focus:ring-2 focus:ring-gold-400/50 transition-all resize-none font-sans text-sm"
                  />
                  <p className="text-white/60 text-xs mt-2 font-sans">
                    {formData.prayer.length}/500 characters
                  </p>
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-8 py-4 bg-gold-500 text-burgundy-900 font-sans font-semibold rounded-full hover:bg-gold-600 transition-all hover:scale-105 shadow-lg whitespace-nowrap cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Submitting...' : 'Submit Prayer Request'}
                </button>
                {submitSuccess && (
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-gold-300 text-center font-sans text-sm"
                  >
                    ✓ Your prayer request has been submitted. We will pray for you!
                  </motion.p>
                )}
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default TheWord;
