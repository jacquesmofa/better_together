
import { motion } from 'framer-motion';
import FloatingHearts from '../../../components/base/FloatingHearts';

const OurStory = () => {
  const timeline = [
    {
      date: '2019',
      title: 'First Meeting',
      description: 'God orchestrated our paths to cross in the most beautiful way. From the first conversation, we knew there was something special about our connection.',
      image: 'https://readdy.ai/api/search-image?query=romantic%20couple%20first%20meeting%20moment%2C%20warm%20coffee%20shop%20atmosphere%2C%20soft%20natural%20lighting%2C%20genuine%20smiles%20and%20laughter%2C%20elegant%20casual%20style%2C%20intimate%20conversation%2C%20faith-based%20connection%2C%20modern%20lifestyle%20photography%2C%20warm%20tones%2C%20simple%20clean%20background&width=600&height=400&seq=timeline-1&orientation=landscape',
    },
    {
      date: '2020',
      title: 'Growing in Faith Together',
      description: 'Through prayer, worship, and studying God\'s Word together, our relationship deepened. We learned to put Christ at the center of everything we do.',
      image: 'https://readdy.ai/api/search-image?query=Christian%20couple%20praying%20together%2C%20holding%20hands%20in%20prayer%2C%20peaceful%20serene%20atmosphere%2C%20soft%20window%20light%2C%20Bible%20open%20on%20table%2C%20spiritual%20intimacy%2C%20warm%20golden%20tones%2C%20faith-based%20relationship%2C%20elegant%20simple%20setting%2C%20devotional%20time&width=600&height=400&seq=timeline-2&orientation=landscape',
    },
    {
      date: '2021',
      title: 'Move to Canada',
      description: 'A new chapter began as we moved to Canada, trusting God\'s plan for our lives. This journey strengthened our faith and commitment to each other.',
      image: 'https://readdy.ai/api/search-image?query=couple%20starting%20new%20life%20adventure%2C%20moving%20to%20new%20city%2C%20hopeful%20optimistic%20atmosphere%2C%20modern%20urban%20background%2C%20warm%20embrace%2C%20excited%20expressions%2C%20elegant%20lifestyle%20photography%2C%20soft%20natural%20lighting%2C%20clean%20simple%20background%2C%20romantic%20moment&width=600&height=400&seq=timeline-3&orientation=landscape',
    },
    {
      date: '2023',
      title: 'Ministry Launch',
      description: 'God called us to share our journey and help others build Christ-centered relationships. Better Together was born from our desire to glorify Him.',
      image: 'https://readdy.ai/api/search-image?query=couple%20leading%20worship%20ministry%2C%20speaking%20to%20small%20group%2C%20warm%20community%20atmosphere%2C%20faith-based%20gathering%2C%20inspirational%20moment%2C%20modern%20church%20setting%2C%20soft%20lighting%2C%20genuine%20connection%2C%20elegant%20professional%20photography%2C%20simple%20clean%20background&width=600&height=400&seq=timeline-4&orientation=landscape',
    },
  ];

  const gallery = [
    'https://readdy.ai/api/search-image?query=elegant%20Christian%20couple%20outdoor%20date%2C%20walking%20together%20in%20beautiful%20park%2C%20autumn%20golden%20hour%20lighting%2C%20romantic%20atmosphere%2C%20holding%20hands%2C%20genuine%20smiles%2C%20faith-based%20relationship%2C%20luxury%20lifestyle%20aesthetic%2C%20soft%20focus%20background%2C%20warm%20tones&width=500&height=600&seq=gallery-1&orientation=portrait',
    'https://readdy.ai/api/search-image?query=couple%20worship%20prayer%20session%20together%2C%20intimate%20spiritual%20moment%2C%20soft%20candlelight%20atmosphere%2C%20peaceful%20serene%20setting%2C%20hands%20raised%20in%20worship%2C%20faith-based%20devotion%2C%20warm%20golden%20lighting%2C%20elegant%20simple%20background%2C%20genuine%20emotion&width=600&height=400&seq=gallery-2&orientation=landscape',
    'https://readdy.ai/api/search-image?query=romantic%20couple%20cooking%20together%20in%20modern%20kitchen%2C%20laughing%20and%20enjoying%20time%2C%20warm%20home%20atmosphere%2C%20natural%20window%20light%2C%20elegant%20casual%20style%2C%20genuine%20connection%2C%20lifestyle%20photography%2C%20clean%20simple%20background%2C%20warm%20tones&width=500&height=600&seq=gallery-3&orientation=portrait',
    'https://readdy.ai/api/search-image?query=Christian%20couple%20reading%20Bible%20together%2C%20cozy%20home%20setting%2C%20soft%20morning%20light%2C%20peaceful%20atmosphere%2C%20coffee%20cups%20on%20table%2C%20intimate%20study%20time%2C%20faith-based%20relationship%2C%20warm%20tones%2C%20elegant%20simple%20decor%2C%20genuine%20devotion&width=600&height=400&seq=gallery-4&orientation=landscape',
    'https://readdy.ai/api/search-image?query=elegant%20couple%20dressed%20up%20for%20special%20occasion%2C%20sophisticated%20romantic%20photography%2C%20warm%20evening%20lighting%2C%20genuine%20smiles%2C%20luxury%20aesthetic%2C%20faith-based%20relationship%2C%20modern%20glamorous%20style%2C%20soft%20focus%20background%2C%20warm%20tones&width=500&height=600&seq=gallery-5&orientation=portrait',
    'https://readdy.ai/api/search-image?query=couple%20enjoying%20outdoor%20picnic%2C%20beautiful%20natural%20setting%2C%20soft%20afternoon%20sunlight%2C%20romantic%20atmosphere%2C%20laughing%20together%2C%20elegant%20casual%20style%2C%20faith-based%20relationship%2C%20warm%20tones%2C%20simple%20clean%20background%2C%20genuine%20joy&width=600&height=400&seq=gallery-6&orientation=landscape',
  ];

  return (
    <div className="relative bg-gradient-to-b from-white via-blush-50 to-white py-24 overflow-hidden">
      <FloatingHearts count={12} />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="font-script text-6xl md:text-7xl text-burgundy-800 mb-4">
            Our Love Story
          </h2>
          <p className="font-sans text-lg text-gray-600 max-w-2xl mx-auto">
            A journey of faith, love, and God's perfect timing
          </p>
          <div className="w-32 h-1 bg-gradient-to-r from-transparent via-gold-500 to-transparent mx-auto mt-6"></div>
        </motion.div>

        {/* Timeline */}
        <div className="relative mb-32">
          {/* Curved Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-gold-400 via-burgundy-400 to-gold-400 transform -translate-x-1/2 hidden lg:block"></div>

          {timeline.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className={`relative flex flex-col lg:flex-row items-center gap-8 mb-20 ${
                index % 2 === 0 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              {/* Content Card */}
              <div className="lg:w-5/12">
                <div className="bg-white rounded-[2rem] p-8 shadow-xl hover:shadow-2xl transition-all">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-burgundy-600 to-gold-500 rounded-full flex items-center justify-center">
                      <span className="font-display text-xl font-bold text-white">{item.date}</span>
                    </div>
                    <h3 className="font-display text-2xl font-semibold text-burgundy-800">
                      {item.title}
                    </h3>
                  </div>
                  <p className="font-sans text-base text-gray-700 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>

              {/* Center Node */}
              <div className="hidden lg:block lg:w-2/12 flex-shrink-0">
                <motion.div
                  className="w-6 h-6 bg-gold-500 rounded-full mx-auto border-4 border-white shadow-lg"
                  whileHover={{ scale: 1.5 }}
                >
                  <motion.div
                    className="absolute inset-0 bg-gold-400 rounded-full"
                    animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                </motion.div>
              </div>

              {/* Image */}
              <div className="lg:w-5/12">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="relative rounded-[2rem] overflow-hidden shadow-xl"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-burgundy-900/50 to-transparent opacity-0 hover:opacity-100 transition-opacity"></div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Photo Gallery */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h3 className="font-script text-5xl text-burgundy-800 mb-4">
              Our Journey in Pictures
            </h3>
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-gold-500 to-transparent mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {gallery.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05, zIndex: 10 }}
                className="relative rounded-3xl overflow-hidden shadow-lg cursor-pointer group"
              >
                <img
                  src={image}
                  alt={`Gallery ${index + 1}`}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-burgundy-900/70 via-burgundy-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center pb-6">
                  <i className="ri-heart-fill text-3xl text-white"></i>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Directors' Bios */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12"
        >
          {/* Jacques */}
          <div className="text-center">
            <div className="relative inline-block mb-6">
              <div className="absolute inset-0 bg-gradient-to-br from-burgundy-600 to-gold-500 rounded-full blur-xl opacity-30"></div>
              <div className="relative w-48 h-48 mx-auto rounded-full border-4 border-gold-500 overflow-hidden shadow-xl">
                <img
                  src="https://readdy.ai/api/search-image?query=professional%20portrait%20of%20confident%20Christian%20man%2C%20warm%20genuine%20smile%2C%20elegant%20business%20casual%20attire%2C%20soft%20studio%20lighting%2C%20faith-based%20leader%2C%20sophisticated%20modern%20style%2C%20clean%20simple%20background%2C%20warm%20tones%2C%20approachable%20demeanor&width=400&height=400&seq=jacques-bio&orientation=squarish"
                  alt="Jacques Mofa"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <h3 className="font-script text-4xl text-burgundy-800 mb-2">Jacques Mofa</h3>
            <p className="font-display text-xl text-gold-600 mb-4">Co-Director</p>
            <p className="font-sans text-base text-gray-700 leading-relaxed max-w-md mx-auto">
              A devoted follower of Christ with a heart for serving others. Jacques believes in leading with love, integrity, and biblical wisdom. His passion is helping men understand their God-given role as spiritual leaders and protectors in their relationships and families.
            </p>
          </div>

          {/* Sweetness */}
          <div className="text-center">
            <div className="relative inline-block mb-6">
              <div className="absolute inset-0 bg-gradient-to-br from-blush-500 to-gold-500 rounded-full blur-xl opacity-30"></div>
              <div className="relative w-48 h-48 mx-auto rounded-full border-4 border-blush-400 overflow-hidden shadow-xl">
                <img
                  src="https://readdy.ai/api/search-image?query=professional%20portrait%20of%20elegant%20Christian%20woman%2C%20warm%20genuine%20smile%2C%20sophisticated%20feminine%20style%2C%20soft%20studio%20lighting%2C%20faith-based%20leader%2C%20graceful%20demeanor%2C%20clean%20simple%20background%2C%20warm%20tones%2C%20approachable%20presence&width=400&height=400&seq=sweetness-bio&orientation=squarish"
                  alt="Kendra Netam Maeva Leslie"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <h3 className="font-script text-4xl text-burgundy-800 mb-2">Kendra Netam "Sweetness"</h3>
            <p className="font-display text-xl text-blush-600 mb-4">Co-Director</p>
            <p className="font-sans text-base text-gray-700 leading-relaxed max-w-md mx-auto">
              A woman of faith, grace, and strength. Sweetness embodies the Proverbs 31 woman, dedicated to cultivating a peaceful home and supporting her partner spiritually. Her mission is to inspire women to embrace their God-given purpose with confidence and love.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default OurStory;
