import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Navbar from '../../components/feature/Navbar';
import Footer from '../../components/feature/Footer';
import GlowingText from '../../components/base/GlowingText';

const TheWordPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    prayer: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const bibles = [
    { name: 'King James Version', language: 'English', icon: 'ri-book-line', description: 'Classic English translation with timeless language' },
    { name: 'New International Version', language: 'English', icon: 'ri-book-2-line', description: 'Modern, easy-to-read English translation' },
    { name: 'La Bible Louis Segond', language: 'French', icon: 'ri-book-3-line', description: 'French translation widely used in francophone countries' },
    { name: 'English Standard Version', language: 'English', icon: 'ri-book-open-line', description: 'Literal translation with literary excellence' },
    { name: 'New Living Translation', language: 'English', icon: 'ri-book-mark-line', description: 'Contemporary language for modern readers' },
    { name: 'New King James Version', language: 'English', icon: 'ri-book-read-line', description: 'Updated KJV with modern English' },
    { name: 'Hebrew Bible (Tanakh)', language: 'Hebrew', icon: 'ri-book-2-line', description: 'Original Hebrew scriptures of the Old Testament' },
    { name: 'Greek New Testament', language: 'Greek', icon: 'ri-book-3-line', description: 'Original Greek text of the New Testament' },
    { name: 'Septuagint (LXX)', language: 'Greek', icon: 'ri-book-open-line', description: 'Greek translation of Hebrew scriptures' },
  ];

  const inspirations = [
    // Bible Verses
    "Love the Lord your God with all your heart and with all your soul and with all your mind. This is the first and greatest commandment.",
    "Draw near to God and He will draw near to you. Cleanse your hands and purify your hearts.",
    "Seek first the kingdom of God and His righteousness, and all these things will be added to you.",
    "Trust in the Lord with all your heart and lean not on your own understanding. In all your ways acknowledge Him.",
    "Be still and know that I am God. I will be exalted among the nations, I will be exalted in the earth.",
    "Delight yourself in the Lord, and He will give you the desires of your heart.",
    "The Lord is my shepherd; I shall not want. He makes me lie down in green pastures.",
    "I can do all things through Christ who strengthens me. His grace is sufficient for me.",
    "For God so loved the world that He gave His one and only Son, that whoever believes in Him shall not perish but have eternal life.",
    "The joy of the Lord is your strength. Do not grieve, for the joy of the Lord is your strength.",
    // Christian Motivations
    "Your faith can move mountains. Trust God's timing, He's never late.",
    "God's plan for you is greater than any mistake you've made. His grace covers all.",
    "In every season, God is working for your good. Trust the process.",
    "You are fearfully and wonderfully made. God doesn't make mistakes.",
    "When you feel weak, remember: God's power is made perfect in weakness.",
    "Your current situation is not your final destination. Keep the faith.",
    "God is writing your story. Trust Him with the pen.",
    "Every setback is a setup for a comeback when God is in control.",
    // Inspirational Quotes
    "Faith is taking the first step even when you don't see the whole staircase. - Martin Luther King Jr.",
    "God never said the journey would be easy, but He did say the arrival would be worthwhile.",
    "Prayer is not asking. Prayer is putting oneself in the hands of God. - Mother Teresa",
    "Let your faith be bigger than your fear. God has not given us a spirit of fear.",
    "The will of God will never take you where the grace of God will not protect you.",
    "God's love is like the ocean: you can see its beginning, but not its end.",
  ];

  const getTimeBasedInspiration = () => {
    const now = new Date();
    const hours = now.getHours();
    const dayOfYear = Math.floor((now.getTime() - new Date(now.getFullYear(), 0, 0).getTime()) / 86400000);
    
    // Morning (00:00-11:59) or Afternoon/Evening (12:00-23:59)
    const timeSlot = hours < 12 ? 0 : 1;
    
    // Create a unique index based on day and time slot
    const index = (dayOfYear * 2 + timeSlot) % inspirations.length;
    
    return inspirations[index];
  };

  const [currentInspiration, setCurrentInspiration] = useState(getTimeBasedInspiration());

  useEffect(() => {
    // Update inspiration at midnight and noon
    const checkAndUpdate = () => {
      const now = new Date();
      const hours = now.getHours();
      const minutes = now.getMinutes();
      
      // Update at 00:00 or 12:00
      if ((hours === 0 || hours === 12) && minutes === 0) {
        setCurrentInspiration(getTimeBasedInspiration());
      }
    };

    // Check every minute
    const interval = setInterval(checkAndUpdate, 60000);
    
    return () => clearInterval(interval);
  }, []);

  const verses = [
    { text: "Your word is a lamp to my feet and a light to my path.", reference: "Psalm 119:105" },
    { text: "Heaven and earth will pass away, but my words will never pass away.", reference: "Matthew 24:35" },
    { text: "All Scripture is God-breathed and is useful for teaching, rebuking, correcting and training in righteousness.", reference: "2 Timothy 3:16" },
    { text: "The word of God is alive and active. Sharper than any double-edged sword.", reference: "Hebrews 4:12" },
  ];

  const readingPlanFeatures = [
    { icon: 'ri-calendar-check-line', title: 'Daily Readings', description: 'Structured plan to read the entire Bible in one year' },
    { icon: 'ri-book-open-line', title: 'Old & New Testament', description: 'Balanced readings from both testaments each day' },
    { icon: 'ri-time-line', title: 'Flexible Schedule', description: 'Catch up anytime without falling behind' },
    { icon: 'ri-heart-line', title: 'Spiritual Growth', description: 'Deepen your relationship with God daily' },
    { icon: 'ri-checkbox-circle-line', title: 'Weekly Checkpoints', description: 'Track your progress with weekly accomplishment markers' },
    { icon: 'ri-lightbulb-line', title: 'Reflection Prompts', description: 'Weekly questions to deepen understanding' },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (formData.prayer.length > 500) {
      return;
    }

    setIsSubmitting(true);
    
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setSubmitSuccess(true);
    setFormData({ name: '', email: '', prayer: '' });
    
    setTimeout(() => setSubmitSuccess(false), 5000);
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <div className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://readdy.ai/api/search-image?query=open%20Bible%20on%20wooden%20altar%20with%20dramatic%20light%20rays%20streaming%20from%20above%2C%20sacred%20spiritual%20atmosphere%20with%20golden%20divine%20light%2C%20peaceful%20church%20or%20prayer%20room%20setting%2C%20warm%20golden%20and%20amber%20tones%20throughout%2C%20soft%20focus%20background%20creating%20depth%2C%20professional%20religious%20photography%20with%20cinematic%20quality%2C%20simple%20clean%20composition%20highlighting%20the%20Bible%2C%20spiritual%20reverence%20and%20holiness&width=1920&height=1080&seq=theword-hero&orientation=landscape"
            alt="The Word"
            className="w-full h-full object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/50"></div>
        </div>

        {/* Animated Light Rays */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute top-1/2 left-1/2 w-1 h-full bg-gradient-to-b from-transparent via-gold-400/30 to-transparent"
              style={{
                transformOrigin: 'top center',
                transform: `rotate(${i * 45}deg)`,
              }}
              animate={{
                opacity: [0.2, 0.6, 0.2],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                delay: i * 0.5,
              }}
            />
          ))}
        </div>
        
        <div className="relative z-10 text-center text-white px-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="inline-block mb-6"
          >
            <motion.div
              animate={{
                boxShadow: [
                  '0 0 30px rgba(241, 165, 19, 0.4)',
                  '0 0 60px rgba(241, 165, 19, 0.7)',
                  '0 0 30px rgba(241, 165, 19, 0.4)',
                ],
              }}
              transition={{ duration: 3, repeat: Infinity }}
              className="w-24 h-24 bg-gold-500/20 rounded-full flex items-center justify-center"
            >
              <i className="ri-book-open-line text-6xl text-gold-300"></i>
            </motion.div>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-display text-7xl md:text-8xl mb-6"
          >
            The Word
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="font-script text-3xl md:text-4xl text-gold-300"
          >
            Your spiritual foundation
          </motion.p>
        </div>
      </div>

      {/* Bible Verses Section */}
      <div className="bg-gradient-to-b from-burgundy-900 via-burgundy-800 to-burgundy-900 py-32">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-script text-6xl text-white mb-4">
              Living by His Word
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-transparent via-gold-500 to-transparent mx-auto"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
            {verses.map((verse, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-ivory-50 to-gold-50 rounded-[2rem] p-8 relative overflow-hidden"
              >
                <motion.div
                  className="absolute inset-0 rounded-[2rem] border-2 border-gold-400/50"
                  animate={{
                    boxShadow: [
                      '0 0 20px rgba(241, 165, 19, 0.2)',
                      '0 0 40px rgba(241, 165, 19, 0.4)',
                      '0 0 20px rgba(241, 165, 19, 0.2)',
                    ],
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                />
                <div className="relative">
                  <GlowingText>
                    <p className="font-serif text-xl text-gray-800 leading-relaxed mb-4">
                      "{verse.text}"
                    </p>
                  </GlowingText>
                  <p className="font-display text-lg text-burgundy-700 font-semibold">
                    — {verse.reference}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Bible Downloads */}
      <div className="bg-gradient-to-b from-white via-blush-50 to-white py-32">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h3 className="font-display text-5xl text-burgundy-800 mb-4">
              Download the Bible
            </h3>
            <p className="font-sans text-lg text-gray-600 max-w-2xl mx-auto">
              Access God's Word anytime, anywhere. Choose your preferred translation including original Hebrew and Greek texts.
            </p>
            <div className="w-32 h-1 bg-gradient-to-r from-transparent via-gold-500 to-transparent mx-auto mt-6"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {bibles.map((bible, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.03 }}
                className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all cursor-pointer group"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-burgundy-600 to-gold-500 rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform">
                  <i className={`${bible.icon} text-4xl text-white`}></i>
                </div>
                <h4 className="font-display text-xl font-semibold text-burgundy-800 mb-2 text-center">
                  {bible.name}
                </h4>
                <p className="font-sans text-sm text-gray-600 mb-3 text-center">
                  {bible.language}
                </p>
                <p className="font-sans text-sm text-gray-600 mb-6 text-center leading-relaxed">
                  {bible.description}
                </p>
                <button className="w-full px-6 py-3 bg-burgundy-700 text-white font-sans font-semibold rounded-full hover:bg-burgundy-800 transition-all whitespace-nowrap">
                  <i className="ri-download-line mr-2"></i>
                  Download PDF
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Words of Inspiration Widget */}
      <div className="bg-gradient-to-b from-burgundy-900 via-burgundy-800 to-burgundy-900 py-32">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <div className="max-w-4xl mx-auto bg-gradient-to-br from-ivory-50 to-gold-50 rounded-[3rem] p-16 shadow-2xl relative">
              <motion.div
                className="absolute inset-0 rounded-[3rem] border-2 border-gold-400"
                animate={{
                  boxShadow: [
                    '0 0 30px rgba(241, 165, 19, 0.3)',
                    '0 0 60px rgba(241, 165, 19, 0.6)',
                    '0 0 30px rgba(241, 165, 19, 0.3)',
                  ],
                }}
                transition={{ duration: 3, repeat: Infinity }}
              />
              <div className="relative text-center">
                <motion.div
                  animate={{ rotate: [0, 5, -5, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="inline-block mb-6"
                >
                  <i className="ri-heart-pulse-line text-6xl text-burgundy-700"></i>
                </motion.div>
                <h3 className="font-script text-5xl text-burgundy-800 mb-8">
                  Words of Inspiration
                </h3>
                <GlowingText>
                  <p className="font-serif text-2xl md:text-3xl text-gray-800 leading-relaxed mb-8">
                    "{currentInspiration}"
                  </p>
                </GlowingText>
                <p className="font-sans text-sm text-gray-600 italic">
                  Updated twice daily at 00:00 and 12:00 • Fresh inspiration to strengthen your faith
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Reading Plan */}
      <div className="bg-gradient-to-b from-white via-gold-50 to-white py-32">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <div className="bg-white rounded-[3rem] overflow-hidden shadow-2xl">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="relative h-96 lg:h-auto">
                  <img
                    src="https://readdy.ai/api/search-image?query=elegant%20open%20Bible%20on%20wooden%20table%20with%20reading%20plan%20notebook%2C%20soft%20morning%20light%20streaming%20through%20window%20creating%20warm%20glow%2C%20peaceful%20devotional%20setting%20with%20coffee%20cup%2C%20warm%20golden%20tones%20throughout%20scene%2C%20simple%20clean%20background%20with%20minimal%20decor%2C%20spiritual%20atmosphere%20of%20daily%20study%2C%20high%20quality%20professional%20photography%2C%20gentle%20shadows%20and%20highlights&width=1000&height=800&seq=bible-reading&orientation=landscape"
                    alt="Bible Reading"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-12 flex flex-col justify-center">
                  <h3 className="font-display text-4xl font-semibold text-burgundy-800 mb-6">
                    2026 Detailed Bible Reading Plan
                  </h3>
                  <p className="font-sans text-base text-gray-700 leading-relaxed mb-8">
                    Start your journey through God's Word with our comprehensive yearly reading plan. Designed to help you read the entire Bible in one year, with daily readings, weekly checkpoints, and reflection prompts to track your spiritual growth.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                    {readingPlanFeatures.map((feature, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <div className="w-10 h-10 bg-gold-100 rounded-lg flex items-center justify-center flex-shrink-0">
                          <i className={`${feature.icon} text-xl text-burgundy-700`}></i>
                        </div>
                        <div>
                          <h4 className="font-sans font-semibold text-burgundy-800 text-sm mb-1">
                            {feature.title}
                          </h4>
                          <p className="font-sans text-xs text-gray-600">
                            {feature.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="bg-gold-50 rounded-2xl p-6 mb-8">
                    <h4 className="font-display text-lg font-semibold text-burgundy-800 mb-3">
                      What's Included:
                    </h4>
                    <ul className="space-y-2 font-sans text-sm text-gray-700">
                      <li className="flex items-start gap-2">
                        <i className="ri-check-line text-gold-600 mt-0.5"></i>
                        <span>52 weeks of structured daily readings</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <i className="ri-check-line text-gold-600 mt-0.5"></i>
                        <span>Weekly accomplishment checkboxes to track progress</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <i className="ri-check-line text-gold-600 mt-0.5"></i>
                        <span>Reflection questions for deeper understanding</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <i className="ri-check-line text-gold-600 mt-0.5"></i>
                        <span>Key themes and takeaways for each week</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <i className="ri-check-line text-gold-600 mt-0.5"></i>
                        <span>Prayer prompts aligned with weekly readings</span>
                      </li>
                    </ul>
                  </div>

                  <button className="px-8 py-4 bg-gold-500 text-burgundy-900 font-sans font-semibold rounded-full hover:bg-gold-600 transition-all hover:scale-105 shadow-lg whitespace-nowrap cursor-pointer inline-flex items-center justify-center">
                    <i className="ri-download-2-line mr-2 text-xl"></i>
                    Download Detailed Reading Plan
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Worship Session & Prayer Request */}
      <div className="bg-gradient-to-b from-burgundy-900 via-burgundy-800 to-burgundy-900 py-32">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-burgundy-800 to-burgundy-900 rounded-[3rem] p-12 shadow-2xl border-2 border-gold-400/30"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Session Info */}
              <div className="text-white">
                <h3 className="font-display text-4xl font-semibold mb-8">
                  Saturday Worship & Prayer Session
                </h3>
                <div className="space-y-6 mb-8">
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 bg-gold-500 rounded-xl flex items-center justify-center flex-shrink-0">
                      <i className="ri-calendar-line text-2xl text-burgundy-900"></i>
                    </div>
                    <div>
                      <p className="font-sans font-semibold text-lg">Every Saturday</p>
                      <p className="font-sans text-sm text-white/80">Weekly gathering for worship and prayer</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 bg-gold-500 rounded-xl flex items-center justify-center flex-shrink-0">
                      <i className="ri-time-line text-2xl text-burgundy-900"></i>
                    </div>
                    <div>
                      <p className="font-sans font-semibold text-lg">9:00 AM EST</p>
                      <p className="font-sans text-sm text-white/80">Morning session to start your day with God</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 bg-gold-500 rounded-xl flex items-center justify-center flex-shrink-0">
                      <i className="ri-heart-line text-2xl text-burgundy-900"></i>
                    </div>
                    <div>
                      <p className="font-sans font-semibold text-lg">Worship & Prayer</p>
                      <p className="font-sans text-sm text-white/80">Seeking God's presence together in unity</p>
                    </div>
                  </div>
                </div>
                <p className="font-sans text-base text-white/90 leading-relaxed mb-6">
                  Join us for a powerful time of worship, prayer, and spiritual encouragement. Together, we seek God's presence and lift up our hearts in praise and intercession for one another.
                </p>
                <p className="font-sans text-base text-white/90 leading-relaxed">
                  Whether you're facing challenges, celebrating victories, or simply seeking to grow closer to God, our Saturday sessions provide a safe space for authentic fellowship and spiritual growth.
                </p>
              </div>

              {/* Prayer Request Form */}
              <div>
                <h3 className="font-display text-3xl font-semibold text-white mb-6">
                  Submit Your Prayer Request
                </h3>
                <p className="font-sans text-sm text-white/80 mb-6">
                  Share your prayer needs with us. We believe in the power of prayer and will lift you up before the Lord.
                </p>
                <form onSubmit={handleSubmit} className="space-y-4" data-readdy-form id="prayer-request-form">
                  <div>
                    <input
                      type="text"
                      name="name"
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
                      name="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                      className="w-full px-6 py-4 bg-white/10 border-2 border-white/30 rounded-2xl text-white placeholder-white/60 focus:border-gold-400 focus:outline-none focus:ring-2 focus:ring-gold-400/50 transition-all font-sans text-sm"
                    />
                  </div>
                  <div>
                    <textarea
                      name="prayer"
                      placeholder="Your Prayer Request"
                      value={formData.prayer}
                      onChange={(e) => setFormData({ ...formData, prayer: e.target.value })}
                      required
                      maxLength={500}
                      rows={6}
                      className="w-full px-6 py-4 bg-white/10 border-2 border-white/30 rounded-2xl text-white placeholder-white/60 focus:border-gold-400 focus:outline-none focus:ring-2 focus:ring-gold-400/50 transition-all resize-none font-sans text-sm"
                    />
                    <p className="text-white/60 text-xs mt-2 font-sans">
                      {formData.prayer.length}/500 characters
                    </p>
                  </div>
                  <button
                    type="submit"
                    disabled={isSubmitting || formData.prayer.length > 500}
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

      <Footer />
    </div>
  );
};

export default TheWordPage;
