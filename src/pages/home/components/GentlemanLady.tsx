
import { motion } from 'framer-motion';

const GentlemanLady = () => {
  const gentlemanArticles = [
    {
      title: 'Sacrificial Leadership',
      description: 'Learn how to lead your family with love, humility, and Christ-like sacrifice. True leadership means serving those you love.',
      icon: 'ri-shield-user-line',
    },
    {
      title: 'Biblical Protection',
      description: 'Understand your role as a protector—spiritually, emotionally, and physically. Create a safe haven for your family.',
      icon: 'ri-shield-check-line',
    },
    {
      title: 'Emotional Presence',
      description: 'Being present means more than being physically there. Learn to connect emotionally and spiritually with your partner.',
      icon: 'ri-heart-pulse-line',
    },
    {
      title: 'Serving Your Family',
      description: 'Discover the joy and purpose in serving your family with excellence, following Christ\'s example of servant leadership.',
      icon: 'ri-hand-heart-line',
    },
  ];

  const ladyArticles = [
    {
      title: 'Spiritual Support',
      description: 'Be the spiritual backbone of your home. Learn how to pray for, encourage, and uplift your partner in faith.',
      icon: 'ri-hand-heart-line',
    },
    {
      title: 'Cultivating Peace',
      description: 'Create a peaceful, welcoming home atmosphere where love, grace, and God\'s presence dwell abundantly.',
      icon: 'ri-home-heart-line',
    },
    {
      title: 'Respect & Honor',
      description: 'Discover the power of respect in your relationship and how it strengthens the bond between you and your partner.',
      icon: 'ri-heart-3-line',
    },
    {
      title: 'Strength in Christ',
      description: 'Embrace the Proverbs 31 woman—strong, capable, and rooted in faith. Your strength comes from the Lord.',
      icon: 'ri-sparkling-line',
    },
  ];

  return (
    <div className="bg-gradient-to-b from-white via-burgundy-50 to-white py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="font-display text-5xl md:text-6xl text-burgundy-800 mb-4">
            Gentleman & Lady
          </h2>
          <p className="font-sans text-lg text-gray-600 max-w-2xl mx-auto">
            Character development and biblical guidance for men and women in faith
          </p>
          <div className="w-32 h-1 bg-gradient-to-r from-transparent via-gold-500 to-transparent mx-auto mt-6"></div>
        </motion.div>

        {/* Gentleman Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-burgundy-600/30 to-gold-500/30 rounded-[3rem] blur-2xl"></div>
              <img
                src="https://readdy.ai/api/search-image?query=confident%20Christian%20gentleman%20in%20elegant%20attire%2C%20strong%20faithful%20man%20portrait%2C%20warm%20natural%20lighting%2C%20sophisticated%20masculine%20style%2C%20faith-based%20leadership%2C%20modern%20professional%20aesthetic%2C%20genuine%20strength%2C%20warm%20tones%2C%20clean%20simple%20background&width=700&height=800&seq=gentleman-hero&orientation=portrait"
                alt="Being a Gentleman"
                className="relative rounded-[3rem] shadow-2xl w-full h-auto object-cover"
              />
            </div>

            {/* Content */}
            <div>
              <h3 className="font-script text-5xl text-burgundy-800 mb-6">
                Being a Gentleman
              </h3>
              <p className="font-sans text-base text-gray-700 leading-relaxed mb-8">
                A true gentleman leads with love, protects with strength, and serves with humility. Discover what it means to be a godly man who honors Christ in every aspect of life and relationship.
              </p>

              <div className="space-y-6">
                {gentlemanArticles.map((article, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ x: 10 }}
                    className="flex items-start gap-4 p-6 bg-white rounded-2xl shadow-md hover:shadow-xl transition-all cursor-pointer group"
                  >
                    <div className="w-14 h-14 bg-gradient-to-br from-burgundy-600 to-burgundy-800 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <i className={`${article.icon} text-2xl text-white`}></i>
                    </div>
                    <div>
                      <h4 className="font-display text-lg font-semibold text-burgundy-800 mb-2">
                        {article.title}
                      </h4>
                      <p className="font-sans text-sm text-gray-600 leading-relaxed">
                        {article.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Lady Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="order-2 lg:order-1">
              <h3 className="font-script text-5xl text-blush-700 mb-6">
                Being an Ideal Lady
              </h3>
              <p className="font-sans text-base text-gray-700 leading-relaxed mb-8">
                A godly woman is strong, graceful, and rooted in Christ. She cultivates peace, offers unwavering support, and embodies the beauty of Proverbs 31. Discover your divine purpose and strength.
              </p>

              <div className="space-y-6">
                {ladyArticles.map((article, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ x: -10 }}
                    className="flex items-start gap-4 p-6 bg-white rounded-2xl shadow-md hover:shadow-xl transition-all cursor-pointer group"
                  >
                    <div className="w-14 h-14 bg-gradient-to-br from-blush-500 to-blush-700 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <i className={`${article.icon} text-2xl text-white`}></i>
                    </div>
                    <div>
                      <h4 className="font-display text-lg font-semibold text-blush-800 mb-2">
                        {article.title}
                      </h4>
                      <p className="font-sans text-sm text-gray-600 leading-relaxed">
                        {article.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Image */}
            <div className="relative order-1 lg:order-2">
              <div className="absolute inset-0 bg-gradient-to-br from-blush-500/30 to-gold-500/30 rounded-[3rem] blur-2xl"></div>
              <img
                src="https://readdy.ai/api/search-image?query=elegant%20Christian%20woman%20portrait%2C%20graceful%20faithful%20lady%2C%20warm%20natural%20lighting%2C%20sophisticated%20feminine%20style%2C%20faith-based%20strength%2C%20modern%20professional%20aesthetic%2C%20genuine%20grace%2C%20warm%20tones%2C%20clean%20simple%20background&width=700&height=800&seq=lady-hero&orientation=portrait"
                alt="Being an Ideal Lady"
                className="relative rounded-[3rem] shadow-2xl w-full h-auto object-cover"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default GentlemanLady;
