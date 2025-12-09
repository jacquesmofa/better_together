
import { useState } from 'react';
import { motion } from 'framer-motion';

const Resources = () => {
  const [activeMovieCategory, setActiveMovieCategory] = useState('all');

  const movieCategories = [
    { id: 'all', label: 'All Movies' },
    { id: 'faith', label: 'Faith-Based Drama' },
    { id: 'romance', label: 'Clean Romance' },
    { id: 'biography', label: 'Biographies' },
    { id: 'family', label: 'Family & Growth' },
  ];

  const movies = [
    { title: 'War Room', category: 'faith', rating: '4.9/5', image: 'https://readdy.ai/api/search-image?query=movie%20poster%20style%20prayer%20war%20room%20theme%2C%20dramatic%20lighting%2C%20faith-based%20film%20aesthetic%2C%20powerful%20spiritual%20warfare%20concept%2C%20warm%20tones%2C%20professional%20cinema%20design%2C%20clean%20composition&width=300&height=450&seq=movie-1&orientation=portrait' },
    { title: 'Fireproof', category: 'romance', rating: '4.8/5', image: 'https://readdy.ai/api/search-image?query=movie%20poster%20style%20firefighter%20marriage%20theme%2C%20romantic%20drama%20aesthetic%2C%20faith-based%20relationship%20film%2C%20warm%20emotional%20tones%2C%20professional%20cinema%20design%2C%20clean%20composition&width=300&height=450&seq=movie-2&orientation=portrait' },
    { title: 'I Can Only Imagine', category: 'biography', rating: '4.9/5', image: 'https://readdy.ai/api/search-image?query=movie%20poster%20style%20inspirational%20music%20biography%2C%20emotional%20faith%20journey%20theme%2C%20dramatic%20lighting%2C%20professional%20cinema%20aesthetic%2C%20warm%20tones%2C%20clean%20composition&width=300&height=450&seq=movie-3&orientation=portrait' },
    { title: 'Courageous', category: 'family', rating: '4.7/5', image: 'https://readdy.ai/api/search-image?query=movie%20poster%20style%20fatherhood%20courage%20theme%2C%20family%20drama%20aesthetic%2C%20faith-based%20film%2C%20strong%20masculine%20leadership%2C%20warm%20tones%2C%20professional%20cinema%20design%2C%20clean%20composition&width=300&height=450&seq=movie-4&orientation=portrait' },
    { title: 'The Case for Christ', category: 'faith', rating: '4.8/5', image: 'https://readdy.ai/api/search-image?query=movie%20poster%20style%20investigative%20faith%20journey%2C%20dramatic%20discovery%20theme%2C%20professional%20cinema%20aesthetic%2C%20spiritual%20truth%20concept%2C%20warm%20tones%2C%20clean%20composition&width=300&height=450&seq=movie-5&orientation=portrait' },
    { title: 'Overcomer', category: 'family', rating: '4.8/5', image: 'https://readdy.ai/api/search-image?query=movie%20poster%20style%20overcoming%20obstacles%20theme%2C%20inspirational%20sports%20drama%2C%20faith-based%20triumph%2C%20warm%20emotional%20tones%2C%20professional%20cinema%20design%2C%20clean%20composition&width=300&height=450&seq=movie-6&orientation=portrait' },
    { title: 'The Vow', category: 'romance', rating: '4.6/5', image: 'https://readdy.ai/api/search-image?query=movie%20poster%20style%20romantic%20commitment%20theme%2C%20love%20and%20memory%20loss%20drama%2C%20emotional%20relationship%20story%2C%20warm%20romantic%20tones%2C%20professional%20cinema%20design%2C%20clean%20composition&width=300&height=450&seq=movie-7&orientation=portrait' },
    { title: 'Unbroken', category: 'biography', rating: '4.9/5', image: 'https://readdy.ai/api/search-image?query=movie%20poster%20style%20survival%20faith%20biography%2C%20war%20hero%20redemption%20theme%2C%20dramatic%20powerful%20aesthetic%2C%20inspirational%20true%20story%2C%20warm%20tones%2C%20professional%20cinema%20design%2C%20clean%20composition&width=300&height=450&seq=movie-8&orientation=portrait' },
    { title: 'Facing the Giants', category: 'faith', rating: '4.7/5', image: 'https://readdy.ai/api/search-image?query=movie%20poster%20style%20faith%20sports%20drama%2C%20underdog%20victory%20theme%2C%20inspirational%20coaching%20story%2C%20warm%20motivational%20tones%2C%20professional%20cinema%20design%2C%20clean%20composition&width=300&height=450&seq=movie-9&orientation=portrait' },
    { title: 'Soul Surfer', category: 'biography', rating: '4.8/5', image: 'https://readdy.ai/api/search-image?query=movie%20poster%20style%20surfing%20faith%20biography%2C%20overcoming%20adversity%20theme%2C%20inspirational%20true%20story%2C%20ocean%20waves%20aesthetic%2C%20warm%20tones%2C%20professional%20cinema%20design%2C%20clean%20composition&width=300&height=450&seq=movie-10&orientation=portrait' },
    { title: 'The Shack', category: 'faith', rating: '4.6/5', image: 'https://readdy.ai/api/search-image?query=movie%20poster%20style%20spiritual%20healing%20journey%2C%20faith%20and%20forgiveness%20theme%2C%20emotional%20drama%20aesthetic%2C%20warm%20peaceful%20tones%2C%20professional%20cinema%20design%2C%20clean%20composition&width=300&height=450&seq=movie-11&orientation=portrait' },
    { title: 'Like Dandelion Dust', category: 'family', rating: '4.7/5', image: 'https://readdy.ai/api/search-image?query=movie%20poster%20style%20family%20adoption%20drama%2C%20emotional%20parenting%20theme%2C%20heartfelt%20story%20aesthetic%2C%20warm%20emotional%20tones%2C%20professional%20cinema%20design%2C%20clean%20composition&width=300&height=450&seq=movie-12&orientation=portrait' },
  ];

  const books = [
    { title: 'The Meaning of Marriage', author: 'Timothy Keller', cover: 'https://readdy.ai/api/search-image?query=book%20cover%20design%20marriage%20theology%20theme%2C%20elegant%20typography%2C%20faith-based%20relationship%20book%2C%20warm%20sophisticated%20colors%2C%20professional%20publishing%20design%2C%20clean%20composition&width=300&height=450&seq=book-1&orientation=portrait' },
    { title: 'Sacred Marriage', author: 'Gary Thomas', cover: 'https://readdy.ai/api/search-image?query=book%20cover%20design%20sacred%20marriage%20theme%2C%20spiritual%20growth%20in%20relationships%2C%20elegant%20design%2C%20faith-based%20book%2C%20warm%20colors%2C%20professional%20publishing%20aesthetic%2C%20clean%20composition&width=300&height=450&seq=book-2&orientation=portrait' },
    { title: 'Love & Respect', author: 'Emerson Eggerichs', cover: 'https://readdy.ai/api/search-image?query=book%20cover%20design%20love%20and%20respect%20theme%2C%20marriage%20relationship%20book%2C%20elegant%20typography%2C%20faith-based%20guidance%2C%20warm%20colors%2C%20professional%20publishing%20design%2C%20clean%20composition&width=300&height=450&seq=book-3&orientation=portrait' },
    { title: 'The Five Love Languages', author: 'Gary Chapman', cover: 'https://readdy.ai/api/search-image?query=book%20cover%20design%20five%20love%20languages%20theme%2C%20relationship%20communication%20book%2C%20elegant%20design%2C%20warm%20inviting%20colors%2C%20professional%20publishing%20aesthetic%2C%20clean%20composition&width=300&height=450&seq=book-4&orientation=portrait' },
    { title: 'Boundaries in Marriage', author: 'Henry Cloud', cover: 'https://readdy.ai/api/search-image?query=book%20cover%20design%20boundaries%20marriage%20theme%2C%20healthy%20relationship%20book%2C%20elegant%20typography%2C%20faith-based%20guidance%2C%20warm%20colors%2C%20professional%20publishing%20design%2C%20clean%20composition&width=300&height=450&seq=book-5&orientation=portrait' },
    { title: 'The Power of a Praying Wife', author: 'Stormie Omartian', cover: 'https://readdy.ai/api/search-image?query=book%20cover%20design%20praying%20wife%20theme%2C%20spiritual%20marriage%20book%2C%20elegant%20design%2C%20faith-based%20prayer%20guide%2C%20warm%20peaceful%20colors%2C%20professional%20publishing%20aesthetic%2C%20clean%20composition&width=300&height=450&seq=book-6&orientation=portrait' },
  ];

  const filteredMovies = activeMovieCategory === 'all' 
    ? movies 
    : movies.filter(movie => movie.category === activeMovieCategory);

  return (
    <div className="bg-gradient-to-b from-white via-gold-50 to-white py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="font-display text-5xl md:text-6xl text-burgundy-800 mb-4">
            Resources & Community
          </h2>
          <p className="font-sans text-lg text-gray-600 max-w-2xl mx-auto">
            Inspirational media and community connections to support your faith journey
          </p>
          <div className="w-32 h-1 bg-gradient-to-r from-transparent via-gold-500 to-transparent mx-auto mt-6"></div>
        </motion.div>

        {/* WhatsApp Group CTA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <div className="relative bg-gradient-to-br from-burgundy-700 via-burgundy-600 to-gold-600 rounded-[3rem] p-12 overflow-hidden shadow-2xl">
            <motion.div
              className="absolute inset-0"
              animate={{
                background: [
                  'linear-gradient(135deg, #862941 0%, #9f2e48 50%, #f1a513 100%)',
                  'linear-gradient(135deg, #9f2e48 0%, #f1a513 50%, #862941 100%)',
                  'linear-gradient(135deg, #862941 0%, #9f2e48 50%, #f1a513 100%)',
                ],
              }}
              transition={{ duration: 8, repeat: Infinity }}
            />
            <div className="relative text-center">
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="inline-block mb-6"
              >
                <i className="ri-whatsapp-line text-7xl text-white"></i>
              </motion.div>
              <h3 className="font-script text-5xl text-white mb-4">
                Join Our Community
              </h3>
              <p className="font-sans text-lg text-white/90 mb-8 max-w-2xl mx-auto">
                Connect with like-minded believers, share your journey, and grow together in faith. Join the Better Together WhatsApp group today!
              </p>
              <a
                href="https://chat.whatsapp.com/bettertogether"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-10 py-5 bg-white text-burgundy-800 font-sans font-bold text-lg rounded-full hover:bg-gold-100 transition-all hover:scale-105 shadow-2xl cursor-pointer whitespace-nowrap"
              >
                <i className="ri-whatsapp-fill text-2xl"></i>
                Join WhatsApp Group
              </a>
            </div>
          </div>
        </motion.div>

        {/* Movies Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <h3 className="font-display text-4xl text-burgundy-800 text-center mb-8">
            Inspirational Movies
          </h3>
          
          {/* Movie Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {movieCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveMovieCategory(category.id)}
                className={`px-6 py-3 rounded-full font-sans font-medium transition-all cursor-pointer whitespace-nowrap ${
                  activeMovieCategory === category.id
                    ? 'bg-gold-500 text-burgundy-900 shadow-lg scale-105'
                    : 'bg-white text-burgundy-700 border-2 border-gold-500 hover:bg-gold-50'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>

          {/* Movies Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredMovies.map((movie, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ y: -10, scale: 1.05 }}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all cursor-pointer group"
              >
                <div className="relative h-80 overflow-hidden">
                  <img
                    src={movie.image}
                    alt={movie.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-burgundy-900/90 via-burgundy-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center pb-6">
                    <div className="text-center">
                      <p className="font-display text-lg font-semibold text-white mb-2">
                        {movie.title}
                      </p>
                      <div className="flex items-center justify-center gap-1 text-gold-400">
                        <i className="ri-star-fill"></i>
                        <span className="font-sans text-sm text-white">{movie.rating}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Books Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="font-display text-4xl text-burgundy-800 text-center mb-12">
            Recommended Reading
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {books.map((book, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -15, rotateY: 5 }}
                className="cursor-pointer group"
              >
                <div className="relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all">
                  <img
                    src={book.cover}
                    alt={book.title}
                    className="w-full h-auto object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-burgundy-900/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center p-4">
                    <p className="font-sans text-xs text-white text-center">
                      {book.author}
                    </p>
                  </div>
                </div>
                <p className="font-display text-sm font-semibold text-burgundy-800 mt-3 text-center">
                  {book.title}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Resources;
