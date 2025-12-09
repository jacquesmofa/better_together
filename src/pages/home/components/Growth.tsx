
import { useState } from 'react';
import { motion } from 'framer-motion';

const Growth = () => {
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
      excerpt: 'Learn how to communicate with love, respect, and understanding in your relationship. Discover biblical principles that transform conversations into opportunities for deeper connection.',
      image: 'https://readdy.ai/api/search-image?query=Christian%20couple%20having%20meaningful%20conversation%2C%20sitting%20together%20peacefully%2C%20warm%20home%20atmosphere%2C%20soft%20natural%20lighting%2C%20genuine%20connection%2C%20faith-based%20relationship%2C%20elegant%20simple%20setting%2C%20intimate%20discussion%2C%20warm%20tones%2C%20clean%20background&width=600&height=400&seq=article-1&orientation=landscape',
      tag: 'Communication',
    },
    {
      category: 'relationship',
      title: 'Conflict Resolution God\'s Way',
      excerpt: 'Every relationship faces challenges. Discover how to navigate disagreements with grace, forgiveness, and biblical wisdom that strengthens rather than divides.',
      image: 'https://readdy.ai/api/search-image?query=couple%20reconciling%20after%20disagreement%2C%20holding%20hands%20in%20forgiveness%2C%20peaceful%20resolution%20moment%2C%20soft%20lighting%2C%20faith-based%20healing%2C%20warm%20atmosphere%2C%20genuine%20emotion%2C%20elegant%20simple%20setting%2C%20warm%20tones%2C%20clean%20background&width=600&height=400&seq=article-2&orientation=landscape',
      tag: 'Conflict',
    },
    {
      category: 'relationship',
      title: 'Prioritizing Your Partner',
      excerpt: 'In our busy lives, learn how to make your relationship a priority. Practical tips for showing love, appreciation, and keeping Christ at the center of your partnership.',
      image: 'https://readdy.ai/api/search-image?query=romantic%20couple%20quality%20time%20together%2C%20enjoying%20peaceful%20moment%2C%20warm%20intimate%20atmosphere%2C%20soft%20natural%20lighting%2C%20genuine%20affection%2C%20faith-based%20relationship%2C%20elegant%20lifestyle%2C%20simple%20clean%20background%2C%20warm%20tones&width=600&height=400&seq=article-3&orientation=landscape',
      tag: 'Priority',
    },
    {
      category: 'marriage',
      title: 'Covenant vs Contract Marriage',
      excerpt: 'Understanding the sacred difference between a covenant and a contract. Explore how viewing marriage as a covenant transforms your commitment and honors God.',
      image: 'https://readdy.ai/api/search-image?query=wedding%20rings%20on%20open%20Bible%2C%20sacred%20covenant%20symbol%2C%20soft%20golden%20lighting%2C%20spiritual%20marriage%20concept%2C%20elegant%20simple%20composition%2C%20faith-based%20commitment%2C%20warm%20tones%2C%20clean%20background%2C%20peaceful%20atmosphere&width=600&height=400&seq=article-4&orientation=landscape',
      tag: 'Covenant',
    },
    {
      category: 'marriage',
      title: 'Financial Unity in Marriage',
      excerpt: 'Money matters can make or break a marriage. Learn biblical principles for managing finances together, building trust, and achieving financial peace as one.',
      image: 'https://readdy.ai/api/search-image?query=couple%20planning%20finances%20together%2C%20reviewing%20budget%20peacefully%2C%20modern%20home%20office%20setting%2C%20soft%20natural%20lighting%2C%20teamwork%20and%20unity%2C%20faith-based%20partnership%2C%20elegant%20simple%20decor%2C%20warm%20tones%2C%20clean%20background&width=600&height=400&seq=article-5&orientation=landscape',
      tag: 'Finances',
    },
    {
      category: 'marriage',
      title: 'The Power of Forgiveness',
      excerpt: 'Forgiveness is the foundation of lasting love. Discover how to forgive deeply, heal wounds, and build a marriage that reflects Christ\'s unconditional love.',
      image: 'https://readdy.ai/api/search-image?query=couple%20embracing%20in%20forgiveness%2C%20emotional%20healing%20moment%2C%20soft%20warm%20lighting%2C%20genuine%20reconciliation%2C%20faith-based%20love%2C%20peaceful%20atmosphere%2C%20elegant%20simple%20setting%2C%20warm%20tones%2C%20clean%20background&width=600&height=400&seq=article-6&orientation=landscape',
      tag: 'Forgiveness',
    },
    {
      category: 'singles',
      title: 'Healing from Past Hurts',
      excerpt: 'Before entering a new relationship, it\'s essential to heal. Learn how God can restore your heart and prepare you for the love He has planned for you.',
      image: 'https://readdy.ai/api/search-image?query=person%20in%20peaceful%20prayer%20and%20reflection%2C%20healing%20spiritual%20moment%2C%20soft%20morning%20light%2C%20serene%20atmosphere%2C%20faith-based%20restoration%2C%20elegant%20simple%20setting%2C%20warm%20tones%2C%20clean%20background%2C%20hopeful%20mood&width=600&height=400&seq=article-7&orientation=landscape',
      tag: 'Healing',
    },
    {
      category: 'singles',
      title: 'Contentment in Singleness',
      excerpt: 'Being single is not a waiting period but a season of growth. Discover how to find joy, purpose, and fulfillment in Christ while trusting His timing.',
      image: 'https://readdy.ai/api/search-image?query=joyful%20single%20person%20enjoying%20peaceful%20moment%2C%20reading%20Bible%20in%20beautiful%20setting%2C%20soft%20natural%20lighting%2C%20contentment%20and%20peace%2C%20faith-based%20fulfillment%2C%20elegant%20lifestyle%2C%20warm%20tones%2C%20clean%20background&width=600&height=400&seq=article-8&orientation=landscape',
      tag: 'Contentment',
    },
    {
      category: 'singles',
      title: 'Praying for Your Future Spouse',
      excerpt: 'Start your relationship with prayer. Learn how to pray specifically for your future spouse and prepare your heart for the covenant God is preparing.',
      image: 'https://readdy.ai/api/search-image?query=person%20praying%20with%20hands%20folded%2C%20peaceful%20devotional%20moment%2C%20soft%20window%20light%2C%20spiritual%20preparation%2C%20faith-based%20hope%2C%20elegant%20simple%20setting%2C%20warm%20tones%2C%20clean%20background%2C%20serene%20atmosphere&width=600&height=400&seq=article-9&orientation=landscape',
      tag: 'Prayer',
    },
    {
      category: 'counseling',
      title: 'When to Seek Godly Counseling',
      excerpt: 'There\'s strength in seeking help. Understand when and how to seek professional or pastoral counseling to strengthen your relationship and honor God.',
      image: 'https://readdy.ai/api/search-image?query=couple%20meeting%20with%20counselor%2C%20supportive%20guidance%20session%2C%20warm%20office%20atmosphere%2C%20soft%20natural%20lighting%2C%20faith-based%20counseling%2C%20professional%20setting%2C%20elegant%20simple%20decor%2C%20warm%20tones%2C%20clean%20background&width=600&height=400&seq=article-10&orientation=landscape',
      tag: 'Counseling',
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
  ];

  const filteredArticles = activeCategory === 'all' 
    ? articles 
    : articles.filter(article => article.category === activeCategory);

  return (
    <div className="bg-gradient-to-b from-white via-blush-50 to-white py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-5xl md:text-6xl text-burgundy-800 mb-4">
            Growth & Guidance
          </h2>
          <p className="font-sans text-lg text-gray-600 max-w-2xl mx-auto">
            Practical biblical advice for building strong, Christ-centered relationships
          </p>
          <div className="w-32 h-1 bg-gradient-to-r from-transparent via-gold-500 to-transparent mx-auto mt-6"></div>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-16"
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-full font-sans font-medium transition-all cursor-pointer whitespace-nowrap ${
                activeCategory === category.id
                  ? 'bg-burgundy-700 text-white shadow-lg scale-105'
                  : 'bg-white text-burgundy-700 border-2 border-burgundy-700 hover:bg-burgundy-50'
              }`}
            >
              {category.label}
            </button>
          ))}
        </motion.div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {filteredArticles.map((article, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all cursor-pointer group"
            >
              <div className="relative h-56 overflow-hidden">
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
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {quotes.map((quote, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
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
        </motion.div>
      </div>
    </div>
  );
};

export default Growth;
