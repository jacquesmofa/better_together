import { motion } from 'framer-motion';
import Navbar from '../../components/feature/Navbar';
import Footer from '../../components/feature/Footer';

const GentlemanLadyPage = () => {
  const gentlemanArticles = [
    {
      title: 'Sacrificial Leadership',
      description: 'Learn how to lead your family with love, humility, and Christ-like sacrifice. True leadership means serving those you love with dedication and putting their needs before your own.',
      icon: 'ri-shield-user-line',
      details: 'Biblical leadership is about serving, not being served. Discover how to lead with strength and gentleness, making decisions that honor God and bless your family.',
    },
    {
      title: 'Biblical Protection',
      description: 'Understand your role as a protector—spiritually, emotionally, and physically. Create a safe haven for your family where they can thrive and grow in faith.',
      icon: 'ri-shield-check-line',
      details: 'Protection goes beyond physical safety. Learn to guard your family\'s hearts, minds, and spirits while creating an environment of security and peace.',
    },
    {
      title: 'Emotional Presence',
      description: 'Being present means more than being physically there. Learn to connect emotionally and spiritually with your partner, creating deep intimacy and understanding.',
      icon: 'ri-heart-pulse-line',
      details: 'True presence requires vulnerability and intentionality. Discover how to be emotionally available and create meaningful connections that strengthen your relationship.',
    },
    {
      title: 'Serving Your Family',
      description: 'Discover the joy and purpose in serving your family with excellence, following Christ\'s example of servant leadership and unconditional love.',
      icon: 'ri-hand-heart-line',
      details: 'Service is the highest form of love. Learn practical ways to serve your family daily, from small acts of kindness to major sacrifices that demonstrate your commitment.',
    },
    {
      title: 'Spiritual Headship',
      description: 'Lead your family in faith by example. Learn how to be the spiritual leader God calls you to be, guiding your household in worship and devotion.',
      icon: 'ri-book-open-line',
      details: 'Spiritual leadership starts with your own relationship with God. Discover how to lead family devotions, pray together, and create a Christ-centered home.',
    },
    {
      title: 'Financial Stewardship',
      description: 'Manage your family\'s resources wisely. Learn biblical principles of financial stewardship and how to provide for your family with wisdom and integrity.',
      icon: 'ri-money-dollar-circle-line',
      details: 'Good stewardship honors God and blesses your family. Explore practical strategies for budgeting, saving, and making wise financial decisions together.',
    },
  ];

  const ladyArticles = [
    {
      title: 'Spiritual Support',
      description: 'Be the spiritual backbone of your home. Learn how to pray for, encourage, and uplift your partner in faith, creating a foundation of spiritual strength.',
      icon: 'ri-hand-heart-line',
      details: 'Your prayers have power. Discover how to intercede for your family, speak life into your relationships, and create an atmosphere of faith in your home.',
    },
    {
      title: 'Cultivating Peace',
      description: 'Create a peaceful, welcoming home atmosphere where love, grace, and God\'s presence dwell abundantly. Your home should be a sanctuary from the world.',
      icon: 'ri-home-heart-line',
      details: 'Peace begins with you. Learn practical ways to create calm in chaos, manage stress gracefully, and make your home a haven of rest and renewal.',
    },
    {
      title: 'Respect & Honor',
      description: 'Discover the power of respect in your relationship and how it strengthens the bond between you and your partner, creating mutual admiration and love.',
      icon: 'ri-heart-3-line',
      details: 'Respect is a choice and a gift. Explore how showing honor to your partner transforms your relationship and creates a culture of mutual appreciation.',
    },
    {
      title: 'Strength in Christ',
      description: 'Embrace the Proverbs 31 woman—strong, capable, and rooted in faith. Your strength comes from the Lord, enabling you to face any challenge with grace.',
      icon: 'ri-sparkling-line',
      details: 'True strength is found in Christ alone. Learn how to draw from His power, stand firm in your faith, and be the woman God created you to be.',
    },
    {
      title: 'Nurturing Relationships',
      description: 'Build deep, meaningful connections with your family. Learn the art of nurturing relationships through love, patience, and intentional care.',
      icon: 'ri-parent-line',
      details: 'Relationships require cultivation. Discover how to invest in your family emotionally, create lasting memories, and build bonds that withstand any storm.',
    },
    {
      title: 'Wisdom & Discernment',
      description: 'Develop godly wisdom and discernment in all areas of life. Learn to make decisions that honor God and bless your family with insight and understanding.',
      icon: 'ri-lightbulb-line',
      details: 'Wisdom is a gift from God. Explore how to seek His guidance, trust your intuition, and make choices that align with His will for your life.',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <div className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://readdy.ai/api/search-image?query=elegant%20Christian%20couple%20portrait%20showing%20character%20and%20strength%2C%20sophisticated%20professional%20photography%2C%20warm%20natural%20lighting%20with%20golden%20glow%2C%20faith-based%20relationship%20displaying%20mutual%20respect%2C%20modern%20luxury%20aesthetic%20with%20refined%20style%2C%20genuine%20connection%20and%20partnership%2C%20warm%20amber%20and%20golden%20tones%20throughout%2C%20simple%20clean%20background%20with%20soft%20focus&width=1920&height=1080&seq=gentleman-lady-hero&orientation=landscape"
            alt="Gentleman & Lady"
            className="w-full h-full object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/40"></div>
        </div>
        
        <div className="relative z-10 text-center text-white px-6">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-display text-7xl md:text-8xl mb-6"
          >
            Gentleman & Lady
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-sans text-xl md:text-2xl max-w-3xl mx-auto"
          >
            Character development and biblical guidance for men and women in faith
          </motion.p>
        </div>
      </div>

      {/* Gentleman Section */}
      <div className="bg-gradient-to-b from-white via-burgundy-50 to-white py-32">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
              {/* Image */}
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-burgundy-600/30 to-gold-500/30 rounded-[3rem] blur-2xl"></div>
                <div className="relative w-full h-[600px]">
                  <img
                    src="https://readdy.ai/api/search-image?query=confident%20Christian%20gentleman%20in%20elegant%20attire%20portrait%2C%20strong%20faithful%20man%20with%20genuine%20smile%2C%20warm%20natural%20lighting%20creating%20depth%2C%20sophisticated%20masculine%20style%20with%20attention%20to%20detail%2C%20faith-based%20leadership%20radiating%20strength%2C%20modern%20professional%20aesthetic%20with%20refined%20look%2C%20genuine%20strength%20and%20compassion%2C%20warm%20golden%20tones%20throughout%2C%20clean%20simple%20background%20in%20neutral%20colors&width=800&height=1000&seq=gentleman-hero&orientation=portrait"
                    alt="Being a Gentleman"
                    className="relative rounded-[3rem] shadow-2xl w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Content */}
              <div>
                <h2 className="font-script text-6xl text-burgundy-800 mb-6">
                  Being a Gentleman
                </h2>
                <p className="font-sans text-lg text-gray-700 leading-relaxed mb-8">
                  A true gentleman leads with love, protects with strength, and serves with humility. Discover what it means to be a godly man who honors Christ in every aspect of life and relationship. Your character is your greatest legacy.
                </p>
                <p className="font-sans text-base text-gray-700 leading-relaxed mb-8">
                  In a world that often confuses masculinity with aggression or passivity, biblical manhood stands apart. It's about strength under control, courage with compassion, and leadership through service. Every man is called to be a gentleman in the truest sense—gentle in spirit yet strong in conviction.
                </p>
              </div>
            </div>

            {/* Gentleman Articles Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {gentlemanArticles.map((article, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                  className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all cursor-pointer group"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-burgundy-600 to-burgundy-800 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <i className={`${article.icon} text-3xl text-white`}></i>
                  </div>
                  <h3 className="font-display text-2xl font-semibold text-burgundy-800 mb-3">
                    {article.title}
                  </h3>
                  <p className="font-sans text-sm text-gray-600 leading-relaxed mb-4">
                    {article.description}
                  </p>
                  <p className="font-sans text-sm text-gray-600 leading-relaxed">
                    {article.details}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Lady Section */}
      <div className="bg-gradient-to-b from-white via-blush-50 to-white py-32">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
              {/* Content */}
              <div className="order-2 lg:order-1">
                <h2 className="font-script text-6xl text-blush-700 mb-6">
                  Being an Ideal Lady
                </h2>
                <p className="font-sans text-lg text-gray-700 leading-relaxed mb-8">
                  A godly woman is strong, graceful, and rooted in Christ. She cultivates peace, offers unwavering support, and embodies the beauty of Proverbs 31. Discover your divine purpose and strength in Him.
                </p>
                <p className="font-sans text-base text-gray-700 leading-relaxed mb-8">
                  True femininity is not weakness but strength clothed in grace. It's the power to nurture, the wisdom to guide, and the courage to stand firm in faith. A godly woman knows her worth comes from Christ alone, and from that foundation, she builds a life of purpose and impact.
                </p>
              </div>

              {/* Image */}
              <div className="relative order-1 lg:order-2">
                <div className="absolute inset-0 bg-gradient-to-br from-blush-500/30 to-gold-500/30 rounded-[3rem] blur-2xl"></div>
                <div className="relative w-full h-[600px]">
                  <img
                    src="https://readdy.ai/api/search-image?query=elegant%20Christian%20woman%20portrait%20with%20graceful%20presence%2C%20faithful%20lady%20with%20warm%20genuine%20smile%2C%20warm%20natural%20lighting%20creating%20soft%20glow%2C%20sophisticated%20feminine%20style%20with%20elegant%20attire%2C%20faith-based%20strength%20radiating%20confidence%2C%20modern%20professional%20aesthetic%20with%20refined%20elegance%2C%20genuine%20grace%20and%20compassion%2C%20warm%20golden%20tones%20throughout%2C%20clean%20simple%20background%20in%20neutral%20colors&width=800&height=1000&seq=lady-hero&orientation=portrait"
                    alt="Being an Ideal Lady"
                    className="relative rounded-[3rem] shadow-2xl w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Lady Articles Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {ladyArticles.map((article, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                  className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all cursor-pointer group"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-blush-500 to-blush-700 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <i className={`${article.icon} text-3xl text-white`}></i>
                  </div>
                  <h3 className="font-display text-2xl font-semibold text-blush-800 mb-3">
                    {article.title}
                  </h3>
                  <p className="font-sans text-sm text-gray-600 leading-relaxed mb-4">
                    {article.description}
                  </p>
                  <p className="font-sans text-sm text-gray-600 leading-relaxed">
                    {article.details}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default GentlemanLadyPage;
