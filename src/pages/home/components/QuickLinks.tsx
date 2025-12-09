
import { motion } from 'framer-motion';

const QuickLinks = () => {
  const links = [
    {
      icon: 'ri-hand-heart-line',
      title: 'Prayer & Worship',
      description: 'Join our Saturday morning sessions and submit your prayer requests',
      action: 'the-word',
      color: 'from-burgundy-600 to-burgundy-800',
    },
    {
      icon: 'ri-book-open-line',
      title: 'Latest Articles',
      description: 'Discover practical biblical advice for relationships and spiritual growth',
      action: 'growth',
      color: 'from-gold-500 to-gold-700',
    },
    {
      icon: 'ri-film-line',
      title: 'Movie Recommendations',
      description: 'Explore our curated list of faith-based and inspirational films',
      action: 'resources',
      color: 'from-blush-500 to-blush-700',
    },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="py-24 bg-gradient-to-b from-white to-blush-50">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl text-burgundy-800 mb-4">
            Explore Our Resources
          </h2>
          <p className="font-sans text-lg text-gray-600 max-w-2xl mx-auto">
            Everything you need to grow in faith, strengthen your relationship, and live a life that glorifies God
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {links.map((link, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ y: -10, scale: 1.02 }}
              onClick={() => scrollToSection(link.action)}
              className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all cursor-pointer group"
            >
              <div className={`w-20 h-20 bg-gradient-to-br ${link.color} rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform`}>
                <i className={`${link.icon} text-4xl text-white`}></i>
              </div>

              <h3 className="font-display text-2xl font-semibold text-burgundy-800 mb-3 text-center">
                {link.title}
              </h3>

              <p className="font-sans text-base text-gray-600 leading-relaxed text-center">
                {link.description}
              </p>

              <div className="mt-6 text-center">
                <span className="inline-flex items-center gap-2 font-sans text-sm font-semibold text-burgundy-700 group-hover:text-gold-600 transition-colors">
                  Learn More
                  <i className="ri-arrow-right-line group-hover:translate-x-2 transition-transform"></i>
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default QuickLinks;
