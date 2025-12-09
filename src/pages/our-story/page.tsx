import { motion } from 'framer-motion';
import Navbar from '../../components/feature/Navbar';
import Footer from '../../components/feature/Footer';
import FloatingHearts from '../../components/base/FloatingHearts';

const OurStoryPage = () => {
  const timeline = [
    {
      date: '2019',
      title: 'First Meeting',
      description: 'God orchestrated our paths to cross in the most beautiful way. From the first conversation, we knew there was something special about our connection. It was a divine appointment that would change our lives forever.',
      image: 'https://readdy.ai/api/search-image?query=romantic%20couple%20first%20meeting%20moment%20in%20elegant%20coffee%20shop%2C%20warm%20atmosphere%20with%20soft%20natural%20lighting%20streaming%20through%20windows%2C%20genuine%20smiles%20and%20laughter%20between%20two%20people%2C%20elegant%20casual%20style%20clothing%2C%20intimate%20conversation%20across%20table%2C%20faith-based%20connection%20visible%20in%20their%20expressions%2C%20modern%20lifestyle%20photography%20with%20cinematic%20quality%2C%20warm%20golden%20tones%20throughout%2C%20simple%20clean%20background%20with%20bokeh%20effect&width=800&height=600&seq=timeline-1&orientation=landscape',
    },
    {
      date: '2020',
      title: 'Growing in Faith Together',
      description: 'Through prayer, worship, and studying God\'s Word together, our relationship deepened. We learned to put Christ at the center of everything we do. Every challenge became an opportunity to grow closer to God and each other.',
      image: 'https://readdy.ai/api/search-image?query=Christian%20couple%20praying%20together%20in%20peaceful%20home%20setting%2C%20holding%20hands%20in%20prayer%20with%20heads%20bowed%2C%20peaceful%20serene%20atmosphere%20with%20soft%20window%20light%2C%20open%20Bible%20on%20wooden%20table%20with%20coffee%20cups%2C%20spiritual%20intimacy%20and%20devotion%2C%20warm%20golden%20tones%20throughout%20scene%2C%20faith-based%20relationship%20moment%2C%20elegant%20simple%20setting%20with%20minimal%20decor%2C%20devotional%20time%20together&width=800&height=600&seq=timeline-2&orientation=landscape',
    },
    {
      date: '2021',
      title: 'Move to Canada',
      description: 'A new chapter began as we moved to Canada, trusting God\'s plan for our lives. This journey strengthened our faith and commitment to each other. We discovered that home isn\'t a place, but wherever we are together with God.',
      image: 'https://readdy.ai/api/search-image?query=couple%20starting%20new%20life%20adventure%20together%2C%20moving%20to%20new%20city%20with%20hopeful%20expressions%2C%20optimistic%20atmosphere%20with%20modern%20urban%20background%2C%20warm%20embrace%20showing%20support%20and%20love%2C%20excited%20expressions%20looking%20toward%20future%2C%20elegant%20lifestyle%20photography%20with%20professional%20quality%2C%20soft%20natural%20lighting%2C%20clean%20simple%20background%2C%20romantic%20moment%20of%20new%20beginnings&width=800&height=600&seq=timeline-3&orientation=landscape',
    },
    {
      date: '2023',
      title: 'Ministry Launch',
      description: 'God called us to share our journey and help others build Christ-centered relationships. Better Together was born from our desire to glorify Him. We felt the calling to serve couples and individuals seeking to honor God in their relationships.',
      image: 'https://readdy.ai/api/search-image?query=couple%20leading%20worship%20ministry%20together%2C%20speaking%20to%20small%20intimate%20group%2C%20warm%20community%20atmosphere%20with%20people%20engaged%2C%20faith-based%20gathering%20in%20modern%20setting%2C%20inspirational%20moment%20with%20genuine%20connection%2C%20modern%20church%20or%20home%20setting%2C%20soft%20warm%20lighting%20creating%20welcoming%20mood%2C%20genuine%20connection%20between%20leaders%20and%20community%2C%20elegant%20professional%20photography%2C%20simple%20clean%20background&width=800&height=600&seq=timeline-4&orientation=landscape',
    },
    {
      date: '2024',
      title: 'Community Growth',
      description: 'Our community expanded as more couples joined our Saturday worship sessions. We witnessed countless testimonies of transformed relationships and renewed faith. God\'s faithfulness continues to amaze us.',
      image: 'https://readdy.ai/api/search-image?query=diverse%20group%20of%20couples%20in%20worship%20gathering%2C%20hands%20raised%20in%20praise%2C%20warm%20community%20atmosphere%20with%20joyful%20expressions%2C%20faith-based%20celebration%2C%20modern%20church%20setting%20with%20soft%20lighting%2C%20genuine%20connection%20and%20unity%2C%20elegant%20professional%20photography%2C%20warm%20tones%20throughout%2C%20simple%20clean%20background&width=800&height=600&seq=timeline-5&orientation=landscape',
    },
    {
      date: '2025',
      title: 'Expanding Our Reach',
      description: 'Through online platforms and resources, we\'re reaching couples worldwide. Our mission to glorify God through relationships continues to grow, touching lives across continents and cultures.',
      image: 'https://readdy.ai/api/search-image?query=couple%20working%20together%20on%20laptop%20creating%20content%2C%20modern%20home%20office%20setting%2C%20warm%20collaborative%20atmosphere%2C%20faith-based%20ministry%20work%2C%20genuine%20partnership%20and%20teamwork%2C%20soft%20natural%20lighting%2C%20elegant%20simple%20decor%2C%20warm%20tones%2C%20clean%20background%2C%20professional%20lifestyle%20photography&width=800&height=600&seq=timeline-6&orientation=landscape',
    },
  ];

  const gallery = [
    'https://readdy.ai/api/search-image?query=elegant%20Christian%20couple%20outdoor%20date%20walking%20together%20in%20beautiful%20park%20during%20autumn%2C%20golden%20hour%20lighting%20with%20warm%20sunset%20glow%2C%20romantic%20atmosphere%20with%20leaves%20falling%2C%20holding%20hands%20with%20genuine%20smiles%2C%20faith-based%20relationship%20showing%20love%20and%20respect%2C%20luxury%20lifestyle%20aesthetic%20with%20sophisticated%20style%2C%20soft%20focus%20background%20with%20bokeh%2C%20warm%20amber%20and%20golden%20tones&width=600&height=800&seq=gallery-1&orientation=portrait',
    'https://readdy.ai/api/search-image?query=couple%20worship%20prayer%20session%20together%20at%20home%2C%20intimate%20spiritual%20moment%20with%20soft%20candlelight%20atmosphere%2C%20peaceful%20serene%20setting%20with%20Bible%20open%2C%20hands%20raised%20in%20worship%20and%20devotion%2C%20faith-based%20devotion%20and%20connection%2C%20warm%20golden%20lighting%20creating%20sacred%20mood%2C%20elegant%20simple%20background%20with%20minimal%20decor%2C%20genuine%20emotion%20and%20spiritual%20intimacy&width=800&height=600&seq=gallery-2&orientation=landscape',
    'https://readdy.ai/api/search-image?query=romantic%20couple%20cooking%20together%20in%20modern%20elegant%20kitchen%2C%20laughing%20and%20enjoying%20quality%20time%2C%20warm%20home%20atmosphere%20with%20natural%20window%20light%20streaming%20in%2C%20elegant%20casual%20style%20clothing%2C%20genuine%20connection%20and%20partnership%2C%20lifestyle%20photography%20with%20cinematic%20quality%2C%20clean%20simple%20background%20with%20modern%20appliances%2C%20warm%20tones%20throughout%20scene&width=600&height=800&seq=gallery-3&orientation=portrait',
    'https://readdy.ai/api/search-image?query=Christian%20couple%20reading%20Bible%20together%20in%20cozy%20home%2C%20sitting%20close%20on%20comfortable%20sofa%2C%20soft%20morning%20light%20creating%20peaceful%20atmosphere%2C%20coffee%20cups%20on%20wooden%20table%2C%20intimate%20study%20time%20and%20devotion%2C%20faith-based%20relationship%20moment%2C%20warm%20golden%20tones%20throughout%2C%20elegant%20simple%20decor%20with%20plants%2C%20genuine%20devotion%20and%20love&width=800&height=600&seq=gallery-4&orientation=landscape',
    'https://readdy.ai/api/search-image?query=elegant%20couple%20dressed%20up%20for%20special%20occasion%2C%20sophisticated%20romantic%20photography%20with%20professional%20quality%2C%20warm%20evening%20lighting%20with%20soft%20glow%2C%20genuine%20smiles%20showing%20happiness%2C%20luxury%20aesthetic%20with%20glamorous%20style%2C%20faith-based%20relationship%20radiating%20joy%2C%20modern%20glamorous%20style%20with%20elegant%20attire%2C%20soft%20focus%20background%20with%20bokeh%2C%20warm%20golden%20tones&width=600&height=800&seq=gallery-5&orientation=portrait',
    'https://readdy.ai/api/search-image?query=couple%20enjoying%20outdoor%20picnic%20in%20beautiful%20natural%20setting%2C%20soft%20afternoon%20sunlight%20filtering%20through%20trees%2C%20romantic%20atmosphere%20with%20blanket%20and%20basket%2C%20laughing%20together%20with%20genuine%20joy%2C%20elegant%20casual%20style%20with%20coordinated%20outfits%2C%20faith-based%20relationship%20showing%20contentment%2C%20warm%20golden%20tones%20throughout%2C%20simple%20clean%20background%20with%20nature%2C%20genuine%20happiness%20and%20love&width=800&height=600&seq=gallery-6&orientation=landscape',
    'https://readdy.ai/api/search-image?query=couple%20dancing%20together%20in%20elegant%20home%20setting%2C%20romantic%20moment%20with%20soft%20lighting%2C%20warm%20intimate%20atmosphere%20showing%20connection%2C%20genuine%20affection%20and%20joy%2C%20faith-based%20love%20and%20respect%2C%20elegant%20simple%20decor%20with%20minimal%20furniture%2C%20warm%20tones%20creating%20romantic%20mood%2C%20professional%20lifestyle%20photography&width=600&height=800&seq=gallery-7&orientation=portrait',
    'https://readdy.ai/api/search-image?query=Christian%20couple%20volunteering%20together%20at%20community%20event%2C%20serving%20others%20with%20joy%2C%20warm%20community%20atmosphere%20with%20people%20around%2C%20faith-based%20service%20and%20ministry%2C%20genuine%20compassion%20and%20teamwork%2C%20soft%20natural%20lighting%2C%20elegant%20casual%20style%2C%20warm%20tones%2C%20clean%20background&width=800&height=600&seq=gallery-8&orientation=landscape',
    'https://readdy.ai/api/search-image?query=couple%20watching%20sunset%20together%20on%20beach%2C%20silhouette%20with%20warm%20golden%20sky%2C%20romantic%20peaceful%20atmosphere%2C%20holding%20hands%20in%20contemplation%2C%20faith-based%20relationship%20moment%2C%20warm%20orange%20and%20pink%20tones%2C%20simple%20clean%20composition%2C%20professional%20photography&width=600&height=800&seq=gallery-9&orientation=portrait',
    'https://readdy.ai/api/search-image?query=couple%20celebrating%20together%20with%20cake%20and%20candles%2C%20joyful%20anniversary%20or%20birthday%20moment%2C%20warm%20home%20atmosphere%20with%20soft%20lighting%2C%20genuine%20happiness%20and%20love%2C%20faith-based%20celebration%2C%20elegant%20simple%20decor%2C%20warm%20tones%20throughout%2C%20clean%20background&width=800&height=600&seq=gallery-10&orientation=landscape',
    'https://readdy.ai/api/search-image?query=couple%20hiking%20together%20in%20beautiful%20mountain%20landscape%2C%20adventure%20and%20exploration%2C%20warm%20natural%20lighting%20with%20scenic%20views%2C%20genuine%20partnership%20and%20support%2C%20faith-based%20relationship%20showing%20teamwork%2C%20elegant%20outdoor%20athletic%20wear%2C%20warm%20tones%2C%20clean%20composition&width=600&height=800&seq=gallery-11&orientation=portrait',
    'https://readdy.ai/api/search-image?query=couple%20relaxing%20at%20home%20reading%20books%20together%2C%20cozy%20peaceful%20atmosphere%2C%20soft%20natural%20lighting%20through%20windows%2C%20genuine%20contentment%20and%20peace%2C%20faith-based%20relationship%20moment%2C%20elegant%20simple%20home%20decor%2C%20warm%20tones%20throughout%2C%20clean%20background&width=800&height=600&seq=gallery-12&orientation=landscape',
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <div className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://readdy.ai/api/search-image?query=romantic%20Christian%20couple%20portrait%20in%20elegant%20setting%2C%20warm%20golden%20hour%20lighting%20with%20soft%20glow%2C%20sophisticated%20luxury%20aesthetic%2C%20genuine%20love%20and%20connection%2C%20faith-based%20relationship%20showing%20devotion%2C%20professional%20photography%20with%20cinematic%20quality%2C%20warm%20amber%20and%20golden%20tones%20throughout%2C%20simple%20clean%20background%20with%20soft%20focus%2C%20intimate%20moment%20between%20couple&width=1920&height=1080&seq=ourstory-hero&orientation=landscape"
            alt="Our Story"
            className="w-full h-full object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/40"></div>
        </div>
        
        <FloatingHearts count={15} />
        
        <div className="relative z-10 text-center text-white px-6">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-script text-7xl md:text-8xl mb-6"
          >
            Our Love Story
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-sans text-xl md:text-2xl max-w-3xl mx-auto"
          >
            A journey of faith, love, and God's perfect timing
          </motion.p>
        </div>
      </div>

      {/* Timeline Section */}
      <div className="relative bg-gradient-to-b from-white via-blush-50 to-white py-32 overflow-hidden">
        <FloatingHearts count={8} />

        <div className="relative max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="font-script text-6xl md:text-7xl text-burgundy-800 mb-4">
              Our Journey Together
            </h2>
            <p className="font-sans text-lg text-gray-600 max-w-2xl mx-auto">
              Every step guided by faith, every moment a blessing
            </p>
            <div className="w-32 h-1 bg-gradient-to-r from-transparent via-gold-500 to-transparent mx-auto mt-6"></div>
          </motion.div>

          {/* Timeline */}
          <div className="relative">
            {/* Curved Line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-gold-400 via-burgundy-400 to-gold-400 transform -translate-x-1/2 hidden lg:block"></div>

            {timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className={`relative flex flex-col lg:flex-row items-center gap-8 mb-24 ${
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
                    className="w-6 h-6 bg-gold-500 rounded-full mx-auto border-4 border-white shadow-lg relative"
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
                    <div className="w-full h-80">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-burgundy-900/50 to-transparent opacity-0 hover:opacity-100 transition-opacity"></div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Photo Gallery */}
      <div className="bg-gradient-to-b from-white via-gold-50 to-white py-32">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h3 className="font-script text-6xl text-burgundy-800 mb-4">
              Our Journey in Pictures
            </h3>
            <p className="font-sans text-lg text-gray-600 max-w-2xl mx-auto">
              Moments captured, memories cherished, love celebrated
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-gold-500 to-transparent mx-auto mt-6"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {gallery.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ scale: 1.05, zIndex: 10 }}
                className="relative rounded-3xl overflow-hidden shadow-lg cursor-pointer group"
              >
                <div className="w-full h-96">
                  <img
                    src={image}
                    alt={`Gallery ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-burgundy-900/70 via-burgundy-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center pb-6">
                  <i className="ri-heart-fill text-4xl text-white"></i>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Directors' Bios */}
      <div className="bg-gradient-to-b from-white via-blush-50 to-white py-32">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h3 className="font-script text-6xl text-burgundy-800 mb-4">
              Meet the Directors
            </h3>
            <p className="font-sans text-lg text-gray-600 max-w-2xl mx-auto">
              Two hearts united in faith, serving God together
            </p>
            <div className="w-32 h-1 bg-gradient-to-r from-transparent via-gold-500 to-transparent mx-auto mt-6"></div>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Jacques */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="relative inline-block mb-6">
                <div className="absolute inset-0 bg-gradient-to-br from-burgundy-600 to-gold-500 rounded-full blur-xl opacity-30"></div>
                <div className="relative w-64 h-64 mx-auto rounded-full border-4 border-gold-500 overflow-hidden shadow-xl">
                  <img
                    src="https://readdy.ai/api/search-image?query=professional%20portrait%20of%20confident%20Christian%20man%20leader%2C%20warm%20genuine%20smile%20showing%20approachability%2C%20elegant%20business%20casual%20attire%20with%20sophisticated%20style%2C%20soft%20studio%20lighting%20creating%20depth%2C%20faith-based%20leader%20with%20strong%20presence%2C%20sophisticated%20modern%20style%20with%20attention%20to%20detail%2C%20clean%20simple%20background%20in%20neutral%20tones%2C%20warm%20golden%20tones%20throughout%2C%20approachable%20demeanor%20radiating%20confidence&width=600&height=600&seq=jacques-bio&orientation=squarish"
                    alt="Jacques Mofa"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <h3 className="font-script text-5xl text-burgundy-800 mb-2">Jacques Mofa</h3>
              <p className="font-display text-2xl text-gold-600 mb-6">Co-Director</p>
              <p className="font-sans text-base text-gray-700 leading-relaxed max-w-md mx-auto mb-6">
                A devoted follower of Christ with a heart for serving others. Jacques believes in leading with love, integrity, and biblical wisdom. His passion is helping men understand their God-given role as spiritual leaders and protectors in their relationships and families.
              </p>
              <p className="font-sans text-base text-gray-700 leading-relaxed max-w-md mx-auto">
                With years of experience in ministry and counseling, Jacques brings practical wisdom and genuine compassion to every interaction. He believes that true masculinity is found in Christ-like servant leadership.
              </p>
            </motion.div>

            {/* Sweetness */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="relative inline-block mb-6">
                <div className="absolute inset-0 bg-gradient-to-br from-blush-500 to-gold-500 rounded-full blur-xl opacity-30"></div>
                <div className="relative w-64 h-64 mx-auto rounded-full border-4 border-blush-400 overflow-hidden shadow-xl">
                  <img
                    src="https://readdy.ai/api/search-image?query=professional%20portrait%20of%20elegant%20Christian%20woman%20leader%2C%20warm%20genuine%20smile%20radiating%20kindness%2C%20sophisticated%20feminine%20style%20with%20elegant%20attire%2C%20soft%20studio%20lighting%20creating%20warmth%2C%20faith-based%20leader%20with%20graceful%20presence%2C%20graceful%20demeanor%20with%20confident%20posture%2C%20clean%20simple%20background%20in%20neutral%20tones%2C%20warm%20golden%20tones%20throughout%2C%20approachable%20presence%20showing%20compassion&width=600&height=600&seq=sweetness-bio&orientation=squarish"
                    alt="Kendra Netam Maeva Leslie"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <h3 className="font-script text-5xl text-burgundy-800 mb-2">Kendra Netam "Sweetness"</h3>
              <p className="font-display text-2xl text-blush-600 mb-6">Co-Director</p>
              <p className="font-sans text-base text-gray-700 leading-relaxed max-w-md mx-auto mb-6">
                A woman of faith, grace, and strength. Sweetness embodies the Proverbs 31 woman, dedicated to cultivating a peaceful home and supporting her partner spiritually. Her mission is to inspire women to embrace their God-given purpose with confidence and love.
              </p>
              <p className="font-sans text-base text-gray-700 leading-relaxed max-w-md mx-auto">
                Through her gentle spirit and unwavering faith, Sweetness mentors women in discovering their unique calling. She believes that true beauty radiates from a heart devoted to Christ.
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default OurStoryPage;
