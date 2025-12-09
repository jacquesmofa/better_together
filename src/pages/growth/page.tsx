import { useState } from 'react';
import { motion } from 'framer-motion';
import Navbar from '../../components/feature/Navbar';
import Footer from '../../components/feature/Footer';

const GrowthPage = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'All Articles' },
    { id: 'relationship', label: 'Relationship Tips' },
    { id: 'marriage', label: 'Marriage Success' },
    { id: 'singles', label: 'Singles Preparation' },
    { id: 'counseling', label: 'Godly Counseling' },
  ];

  const articles = [
    {
      category: 'relationship',
      title: 'The Art of Godly Communication',
      excerpt: 'Learn how to communicate with love, respect, and understanding in your relationship. Discover biblical principles that transform conversations into opportunities for deeper connection and spiritual growth.',
      image: 'https://readdy.ai/api/search-image?query=Christian%20couple%20having%20meaningful%20conversation%20sitting%20together%20peacefully%2C%20warm%20home%20atmosphere%20with%20soft%20natural%20lighting%2C%20genuine%20connection%20and%20eye%20contact%2C%20faith-based%20relationship%20showing%20respect%2C%20elegant%20simple%20setting%20with%20comfortable%20furniture%2C%20intimate%20discussion%20moment%2C%20warm%20golden%20tones%20throughout%2C%20clean%20background%20with%20minimal%20decor&width=800&height=600&seq=article-1&orientation=landscape',
      tag: 'Communication',
    },
    {
      category: 'relationship',
      title: 'Conflict Resolution God\'s Way',
      excerpt: 'Every relationship faces challenges. Discover how to navigate disagreements with grace, forgiveness, and biblical wisdom that strengthens rather than divides. Learn practical steps for healthy conflict resolution.',
      image: 'https://readdy.ai/api/search-image?query=couple%20reconciling%20after%20disagreement%2C%20holding%20hands%20in%20forgiveness%20gesture%2C%20peaceful%20resolution%20moment%20with%20soft%20lighting%2C%20faith-based%20healing%20and%20restoration%2C%20warm%20atmosphere%20showing%20grace%2C%20genuine%20emotion%20and%20understanding%2C%20elegant%20simple%20setting%2C%20warm%20golden%20tones%2C%20clean%20background&width=800&height=600&seq=article-2&orientation=landscape',
      tag: 'Conflict',
    },
    {
      category: 'relationship',
      title: 'Prioritizing Your Partner',
      excerpt: 'In our busy lives, learn how to make your relationship a priority. Practical tips for showing love, appreciation, and keeping Christ at the center of your partnership through intentional actions.',
      image: 'https://readdy.ai/api/search-image?query=romantic%20couple%20quality%20time%20together%2C%20enjoying%20peaceful%20moment%20in%20cozy%20setting%2C%20warm%20intimate%20atmosphere%20with%20soft%20natural%20lighting%2C%20genuine%20affection%20and%20attention%2C%20faith-based%20relationship%20showing%20priority%2C%20elegant%20lifestyle%20with%20simple%20decor%2C%20simple%20clean%20background%2C%20warm%20golden%20tones&width=800&height=600&seq=article-3&orientation=landscape',
      tag: 'Priority',
    },
    {
      category: 'relationship',
      title: 'Building Trust Together',
      excerpt: 'Trust is the foundation of every strong relationship. Explore biblical principles for building and maintaining trust, creating a safe space where love can flourish and grow deeper.',
      image: 'https://readdy.ai/api/search-image?query=couple%20showing%20trust%20and%20vulnerability%2C%20intimate%20moment%20of%20connection%2C%20warm%20supportive%20atmosphere%2C%20faith-based%20relationship%2C%20genuine%20emotion%2C%20elegant%20simple%20setting%2C%20warm%20tones%2C%20clean%20background&width=800&height=600&seq=article-4&orientation=landscape',
      tag: 'Trust',
    },
    {
      category: 'relationship',
      title: 'Love Languages in Action',
      excerpt: 'Understanding how your partner receives love transforms your relationship. Learn to speak their love language fluently and watch your connection deepen in beautiful ways.',
      image: 'https://readdy.ai/api/search-image?query=couple%20expressing%20love%20through%20acts%20of%20service%2C%20warm%20home%20atmosphere%2C%20genuine%20care%20and%20affection%2C%20faith-based%20relationship%2C%20elegant%20lifestyle%2C%20warm%20tones%2C%20clean%20background&width=800&height=600&seq=article-5&orientation=landscape',
      tag: 'Love',
    },
    {
      category: 'relationship',
      title: 'Quality Time That Matters',
      excerpt: 'It\'s not about quantity but quality. Discover how to create meaningful moments together that strengthen your bond and honor God in your relationship.',
      image: 'https://readdy.ai/api/search-image?query=couple%20enjoying%20quality%20time%20together%2C%20peaceful%20moment%20of%20connection%2C%20warm%20intimate%20atmosphere%2C%20faith-based%20relationship%2C%20genuine%20joy%2C%20elegant%20simple%20setting%2C%20warm%20tones%2C%20clean%20background&width=800&height=600&seq=article-6&orientation=landscape',
      tag: 'Time',
    },
    {
      category: 'marriage',
      title: 'Covenant vs Contract Marriage',
      excerpt: 'Understanding the sacred difference between a covenant and a contract. Explore how viewing marriage as a covenant transforms your commitment and honors God in profound ways.',
      image: 'https://readdy.ai/api/search-image?query=wedding%20rings%20on%20open%20Bible%20with%20soft%20lighting%2C%20sacred%20covenant%20symbol%20of%20marriage%2C%20spiritual%20marriage%20concept%20with%20warm%20glow%2C%20elegant%20simple%20composition%2C%20faith-based%20commitment%20and%20promise%2C%20warm%20golden%20tones%20throughout%2C%20clean%20background%2C%20peaceful%20atmosphere&width=800&height=600&seq=article-7&orientation=landscape',
      tag: 'Covenant',
    },
    {
      category: 'marriage',
      title: 'Financial Unity in Marriage',
      excerpt: 'Money matters can make or break a marriage. Learn biblical principles for managing finances together, building trust, and achieving financial peace as one unified team.',
      image: 'https://readdy.ai/api/search-image?query=couple%20planning%20finances%20together%20peacefully%2C%20reviewing%20budget%20with%20laptop%20and%20papers%2C%20modern%20home%20office%20setting%20with%20soft%20natural%20lighting%2C%20teamwork%20and%20unity%20in%20decision%20making%2C%20faith-based%20partnership%2C%20elegant%20simple%20decor%2C%20warm%20tones%2C%20clean%20background&width=800&height=600&seq=article-8&orientation=landscape',
      tag: 'Finances',
    },
    {
      category: 'marriage',
      title: 'The Power of Forgiveness',
      excerpt: 'Forgiveness is the foundation of lasting love. Discover how to forgive deeply, heal wounds, and build a marriage that reflects Christ\'s unconditional love and grace.',
      image: 'https://readdy.ai/api/search-image?query=couple%20embracing%20in%20forgiveness%20moment%2C%20emotional%20healing%20and%20reconciliation%2C%20soft%20warm%20lighting%20creating%20peaceful%20mood%2C%20genuine%20reconciliation%20and%20restoration%2C%20faith-based%20love%20and%20grace%2C%20peaceful%20atmosphere%2C%20elegant%20simple%20setting%2C%20warm%20tones%2C%20clean%20background&width=800&height=600&seq=article-9&orientation=landscape',
      tag: 'Forgiveness',
    },
    {
      category: 'marriage',
      title: 'Keeping Romance Alive',
      excerpt: 'Romance doesn\'t end at the altar. Learn creative ways to keep the spark alive, nurture intimacy, and continue dating your spouse throughout your marriage journey.',
      image: 'https://readdy.ai/api/search-image?query=romantic%20married%20couple%20on%20date%20night%2C%20elegant%20dinner%20setting%20with%20candlelight%2C%20warm%20intimate%20atmosphere%2C%20genuine%20affection%20and%20joy%2C%20faith-based%20marriage%2C%20sophisticated%20style%2C%20warm%20tones%2C%20clean%20background&width=800&height=600&seq=article-10&orientation=landscape',
      tag: 'Romance',
    },
    {
      category: 'marriage',
      title: 'Praying Together as Couples',
      excerpt: 'Couples who pray together stay together. Discover the transformative power of shared prayer and how it deepens your spiritual and emotional connection.',
      image: 'https://readdy.ai/api/search-image?query=married%20couple%20praying%20together%2C%20holding%20hands%20in%20prayer%2C%20peaceful%20spiritual%20moment%2C%20faith-based%20devotion%2C%20warm%20lighting%2C%20elegant%20simple%20setting%2C%20warm%20tones%2C%20clean%20background&width=800&height=600&seq=article-11&orientation=landscape',
      tag: 'Prayer',
    },
    {
      category: 'marriage',
      title: 'Navigating Life Transitions',
      excerpt: 'From new jobs to new babies, life brings constant change. Learn how to navigate major transitions together while keeping your marriage strong and Christ-centered.',
      image: 'https://readdy.ai/api/search-image?query=couple%20supporting%20each%20other%20through%20change%2C%20warm%20supportive%20atmosphere%2C%20genuine%20partnership%2C%20faith-based%20relationship%2C%20elegant%20lifestyle%2C%20warm%20tones%2C%20clean%20background&width=800&height=600&seq=article-12&orientation=landscape',
      tag: 'Transitions',
    },
    {
      category: 'singles',
      title: 'Healing from Past Hurts',
      excerpt: 'Before entering a new relationship, it\'s essential to heal. Learn how God can restore your heart and prepare you for the love He has planned for you through His grace.',
      image: 'https://readdy.ai/api/search-image?query=person%20in%20peaceful%20prayer%20and%20reflection%20moment%2C%20healing%20spiritual%20atmosphere%20with%20soft%20morning%20light%2C%20serene%20peaceful%20setting%2C%20faith-based%20restoration%20and%20renewal%2C%20elegant%20simple%20setting%20with%20Bible%2C%20warm%20golden%20tones%2C%20clean%20background%2C%20hopeful%20mood&width=800&height=600&seq=article-13&orientation=landscape',
      tag: 'Healing',
    },
    {
      category: 'singles',
      title: 'Contentment in Singleness',
      excerpt: 'Being single is not a waiting period but a season of growth. Discover how to find joy, purpose, and fulfillment in Christ while trusting His perfect timing for your life.',
      image: 'https://readdy.ai/api/search-image?query=joyful%20single%20person%20enjoying%20peaceful%20moment%2C%20reading%20Bible%20in%20beautiful%20setting%20with%20natural%20light%2C%20contentment%20and%20peace%20radiating%2C%20faith-based%20fulfillment%20and%20joy%2C%20elegant%20lifestyle%20with%20simple%20decor%2C%20warm%20golden%20tones%2C%20clean%20background&width=800&height=600&seq=article-14&orientation=landscape',
      tag: 'Contentment',
    },
    {
      category: 'singles',
      title: 'Praying for Your Future Spouse',
      excerpt: 'Start your relationship with prayer. Learn how to pray specifically for your future spouse and prepare your heart for the covenant God is preparing for you.',
      image: 'https://readdy.ai/api/search-image?query=person%20praying%20with%20hands%20folded%20in%20devotion%2C%20peaceful%20devotional%20moment%20with%20soft%20window%20light%2C%20spiritual%20preparation%20and%20hope%2C%20faith-based%20prayer%20and%20expectation%2C%20elegant%20simple%20setting%20with%20journal%2C%20warm%20golden%20tones%2C%20clean%20background%2C%20serene%20atmosphere&width=800&height=600&seq=article-15&orientation=landscape',
      tag: 'Prayer',
    },
    {
      category: 'singles',
      title: 'Building Your Identity in Christ',
      excerpt: 'Your identity isn\'t found in a relationship but in Christ alone. Discover who you are in Him and build a foundation that will strengthen your future relationships.',
      image: 'https://readdy.ai/api/search-image?query=person%20in%20worship%20with%20hands%20raised%2C%20spiritual%20identity%20moment%2C%20faith-based%20devotion%2C%20warm%20lighting%2C%20elegant%20simple%20setting%2C%20warm%20tones%2C%20clean%20background&width=800&height=600&seq=article-16&orientation=landscape',
      tag: 'Identity',
    },
    {
      category: 'singles',
      title: 'Guarding Your Heart',
      excerpt: 'Learn biblical wisdom for protecting your heart while remaining open to love. Discover the balance between wisdom and vulnerability in relationships.',
      image: 'https://readdy.ai/api/search-image?query=person%20reading%20Bible%20peacefully%2C%20contemplative%20moment%2C%20faith-based%20wisdom%2C%20warm%20natural%20lighting%2C%20elegant%20simple%20setting%2C%20warm%20tones%2C%20clean%20background&width=800&height=600&seq=article-17&orientation=landscape',
      tag: 'Wisdom',
    },
    {
      category: 'singles',
      title: 'Preparing for Marriage',
      excerpt: 'Use your single season to prepare for marriage. Practical steps to become the person God wants you to be before entering into covenant relationship.',
      image: 'https://readdy.ai/api/search-image?query=person%20journaling%20and%20planning%2C%20peaceful%20preparation%20moment%2C%20faith-based%20growth%2C%20warm%20lighting%2C%20elegant%20simple%20setting%2C%20warm%20tones%2C%20clean%20background&width=800&height=600&seq=article-18&orientation=landscape',
      tag: 'Preparation',
    },
    {
      category: 'counseling',
      title: 'When to Seek Godly Counseling',
      excerpt: 'There\'s strength in seeking help. Understand when and how to seek professional or pastoral counseling to strengthen your relationship and honor God through wise guidance.',
      image: 'https://readdy.ai/api/search-image?query=couple%20meeting%20with%20counselor%20in%20supportive%20session%2C%20warm%20office%20atmosphere%20with%20soft%20natural%20lighting%2C%20faith-based%20counseling%20and%20guidance%2C%20professional%20setting%20with%20comfortable%20seating%2C%20elegant%20simple%20decor%2C%20warm%20golden%20tones%2C%20clean%20background&width=800&height=600&seq=article-19&orientation=landscape',
      tag: 'Counseling',
    },
    {
      category: 'counseling',
      title: 'Finding the Right Counselor',
      excerpt: 'Not all counseling is created equal. Learn how to find a counselor who aligns with your faith values and can provide biblical guidance for your relationship.',
      image: 'https://readdy.ai/api/search-image?query=professional%20counselor%20in%20office%20setting%2C%20warm%20welcoming%20atmosphere%2C%20faith-based%20professional%2C%20elegant%20office%20decor%2C%20warm%20tones%2C%20clean%20background&width=800&height=600&seq=article-20&orientation=landscape',
      tag: 'Guidance',
    },
  ];

  const quotes = [
    {
      text: "A successful marriage requires falling in love many times, always with the same person.",
      author: "Mignon McLaughlin",
    },
    {
      text: "The goal in marriage is not to think alike, but to think together.",
      author: "Robert C. Dodds",
    },
    {
      text: "Marriage is not a noun; it's a verb. It isn't something you get. It's something you do.",
      author: "Barbara De Angelis",
    },
    {
      text: "A great marriage is not when the 'perfect couple' comes together. It is when an imperfect couple learns to enjoy their differences.",
      author: "Dave Meurer",
    },
    {
      text: "The greatest marriages are built on teamwork, mutual respect, a healthy dose of admiration, and a never-ending portion of love and grace.",
      author: "Fawn Weaver",
    },
    {
      text: "In marriage, being the right person is as important as finding the right person.",
      author: "Wilbert Donald Gough",
    },
  ];

  const filteredArticles = activeCategory === 'all' 
    ? articles 
    : articles.filter(article => article.category === activeCategory);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <div className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://readdy.ai/api/search-image?query=couple%20reading%20Bible%20together%20in%20peaceful%20study%2C%20warm%20natural%20lighting%20streaming%20through%20windows%2C%20spiritual%20growth%20and%20learning%20atmosphere%2C%20faith-based%20relationship%20development%2C%20elegant%20home%20setting%20with%20books%20and%20plants%2C%20intimate%20study%20moment%2C%20warm%20golden%20tones%20throughout%2C%20clean%20simple%20background&width=1920&height=1080&seq=growth-hero&orientation=landscape"
            alt="Growth"
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
            Growth & Guidance
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-sans text-xl md:text-2xl max-w-3xl mx-auto"
          >
            Practical biblical advice for building strong, Christ-centered relationships
          </motion.p>
        </div>
      </div>

      {/* Category Filter */}
      <div className="bg-gradient-to-b from-white via-blush-50 to-white py-32">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-script text-6xl text-burgundy-800 mb-4">
              Explore Our Resources
            </h2>
            <p className="font-sans text-lg text-gray-600 max-w-2xl mx-auto">
              Choose a category to find guidance for your specific journey
            </p>
            <div className="w-32 h-1 bg-gradient-to-r from-transparent via-gold-500 to-transparent mx-auto mt-6"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-4 mb-20"
          >
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-8 py-4 rounded-full font-sans font-medium transition-all cursor-pointer whitespace-nowrap ${
                  activeCategory === category.id
                    ? 'bg-burgundy-700 text-white shadow-xl scale-105'
                    : 'bg-white text-burgundy-700 border-2 border-burgundy-700 hover:bg-burgundy-50'
                }`}
              >
                {category.label}
              </button>
            ))}
          </motion.div>

          {/* Articles Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
            {filteredArticles.map((article, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ y: -10 }}
                className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all cursor-pointer group"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-burgundy-900/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <div className="absolute top-4 left-4">
                    <span className="px-4 py-2 bg-gold-500 text-burgundy-900 font-sans text-xs font-semibold rounded-full">
                      {article.tag}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-display text-xl font-semibold text-burgundy-800 mb-3 group-hover:text-burgundy-900">
                    {article.title}
                  </h3>
                  <p className="font-sans text-sm text-gray-600 leading-relaxed mb-4">
                    {article.excerpt}
                  </p>
                  <span className="inline-flex items-center gap-2 font-sans text-sm font-semibold text-burgundy-700 group-hover:text-gold-600 transition-colors">
                    Read More
                    <i className="ri-arrow-right-line group-hover:translate-x-2 transition-transform"></i>
                  </span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Inspirational Quotes */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h3 className="font-script text-5xl text-burgundy-800 text-center mb-12">
              Words of Wisdom
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {quotes.map((quote, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-gradient-to-br from-blush-50 to-gold-50 rounded-3xl p-8 border-2 border-burgundy-200 relative overflow-hidden"
                >
                  <div className="absolute top-4 left-4 text-6xl text-burgundy-200 opacity-30">
                    <i className="ri-double-quotes-l"></i>
                  </div>
                  <p className="font-serif text-lg text-gray-800 leading-relaxed mb-4 relative z-10">
                    {quote.text}
                  </p>
                  <p className="font-sans text-sm text-burgundy-700 font-semibold relative z-10">
                    — {quote.author}
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

export default GrowthPage;
