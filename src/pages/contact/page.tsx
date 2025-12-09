import { useState } from 'react';
import { motion } from 'framer-motion';
import Navbar from '../../components/feature/Navbar';
import Footer from '../../components/feature/Footer';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (formData.message.length > 500) {
      alert('Message must be 500 characters or less');
      return;
    }

    setIsSubmitting(true);

    try {
      const formDataToSend = new URLSearchParams();
      formDataToSend.append('name', formData.name);
      formDataToSend.append('email', formData.email);
      formDataToSend.append('subject', formData.subject);
      formDataToSend.append('message', formData.message);

      const response = await fetch('https://readdy.ai/api/form/d4og7nfvumd14qpjp460', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: formDataToSend.toString(),
      });

      if (response.ok) {
        setSubmitSuccess(true);
        setFormData({ name: '', email: '', subject: '', message: '' });
        setTimeout(() => setSubmitSuccess(false), 5000);
      }
    } catch (error) {
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const socialLinks = [
    { icon: 'ri-facebook-fill', url: 'https://facebook.com', color: 'from-blue-600 to-blue-800', name: 'Facebook' },
    { icon: 'ri-instagram-line', url: 'https://instagram.com', color: 'from-pink-600 to-purple-700', name: 'Instagram' },
    { icon: 'ri-youtube-fill', url: 'https://youtube.com', color: 'from-red-600 to-red-800', name: 'YouTube' },
    { icon: 'ri-tiktok-fill', url: 'https://tiktok.com', color: 'from-gray-800 to-black', name: 'TikTok' },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <div className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://readdy.ai/api/search-image?query=peaceful%20prayer%20hands%20reaching%20toward%20heaven%2C%20warm%20divine%20light%20streaming%20down%2C%20spiritual%20connection%20atmosphere%2C%20faith-based%20communication%20concept%2C%20golden%20rays%20of%20light%2C%20serene%20peaceful%20setting%2C%20warm%20amber%20and%20golden%20tones%20throughout%2C%20simple%20clean%20background%2C%20inspirational%20religious%20photography&width=1920&height=1080&seq=contact-hero&orientation=landscape"
            alt="Contact"
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
            Get in Touch
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-sans text-xl md:text-2xl max-w-3xl mx-auto"
          >
            We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </motion.p>
        </div>
      </div>

      {/* Contact Section */}
      <div className="relative bg-gradient-to-b from-white via-burgundy-50 to-white py-32 overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-gold-300/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-burgundy-300/20 rounded-full blur-3xl"></div>

        <div className="relative max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="bg-white rounded-[3rem] p-12 shadow-2xl">
                <h3 className="font-display text-4xl font-semibold text-burgundy-800 mb-8">
                  Send Us a Message
                </h3>
                
                <form id="contact-form" data-readdy-form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block font-sans text-sm font-semibold text-gray-700 mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      className="w-full px-6 py-4 bg-gray-50 border-2 border-gray-200 rounded-2xl text-gray-800 placeholder-gray-400 focus:border-burgundy-500 focus:outline-none focus:ring-2 focus:ring-burgundy-500/20 transition-all font-sans text-sm"
                      placeholder="Enter your name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block font-sans text-sm font-semibold text-gray-700 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                      className="w-full px-6 py-4 bg-gray-50 border-2 border-gray-200 rounded-2xl text-gray-800 placeholder-gray-400 focus:border-burgundy-500 focus:outline-none focus:ring-2 focus:ring-burgundy-500/20 transition-all font-sans text-sm"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block font-sans text-sm font-semibold text-gray-700 mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      required
                      className="w-full px-6 py-4 bg-gray-50 border-2 border-gray-200 rounded-2xl text-gray-800 placeholder-gray-400 focus:border-burgundy-500 focus:outline-none focus:ring-2 focus:ring-burgundy-500/20 transition-all font-sans text-sm"
                      placeholder="What's this about?"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block font-sans text-sm font-semibold text-gray-700 mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      required
                      maxLength={500}
                      rows={6}
                      className="w-full px-6 py-4 bg-gray-50 border-2 border-gray-200 rounded-2xl text-gray-800 placeholder-gray-400 focus:border-burgundy-500 focus:outline-none focus:ring-2 focus:ring-burgundy-500/20 transition-all resize-none font-sans text-sm"
                      placeholder="Tell us what's on your mind..."
                    />
                    <p className="text-gray-500 text-xs mt-2 font-sans">
                      {formData.message.length}/500 characters
                    </p>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting || formData.message.length > 500}
                    className="w-full px-8 py-4 bg-gradient-to-r from-burgundy-700 to-burgundy-900 text-white font-sans font-semibold rounded-full hover:from-burgundy-800 hover:to-burgundy-950 transition-all hover:scale-105 shadow-lg whitespace-nowrap cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center gap-2">
                        <i className="ri-loader-4-line animate-spin"></i>
                        Sending...
                      </span>
                    ) : (
                      <span className="flex items-center justify-center gap-2">
                        <i className="ri-send-plane-fill"></i>
                        Send Message
                      </span>
                    )}
                  </button>

                  {submitSuccess && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="p-4 bg-green-50 border-2 border-green-200 rounded-2xl"
                    >
                      <p className="text-green-700 text-center font-sans text-sm flex items-center justify-center gap-2">
                        <i className="ri-checkbox-circle-fill text-lg"></i>
                        Thank you! Your message has been sent successfully.
                      </p>
                    </motion.div>
                  )}
                </form>
              </div>
            </motion.div>

            {/* Contact Info & Social */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              {/* Contact Info Card */}
              <div className="bg-gradient-to-br from-burgundy-700 to-burgundy-900 rounded-[3rem] p-12 text-white shadow-2xl">
                <h3 className="font-script text-5xl mb-10">Let's Connect</h3>
                
                <div className="space-y-8">
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 bg-gold-500 rounded-xl flex items-center justify-center flex-shrink-0">
                      <i className="ri-mail-line text-2xl text-burgundy-900"></i>
                    </div>
                    <div>
                      <p className="font-sans font-semibold text-lg mb-1">Email Us</p>
                      <a href="mailto:contact@bettertogether.com" className="font-sans text-sm text-white/80 hover:text-gold-300 transition-colors cursor-pointer">
                        contact@bettertogether.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 bg-gold-500 rounded-xl flex items-center justify-center flex-shrink-0">
                      <i className="ri-map-pin-line text-2xl text-burgundy-900"></i>
                    </div>
                    <div>
                      <p className="font-sans font-semibold text-lg mb-1">Location</p>
                      <p className="font-sans text-sm text-white/80">
                        Montreal, Quebec, Canada
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 bg-gold-500 rounded-xl flex items-center justify-center flex-shrink-0">
                      <i className="ri-time-line text-2xl text-burgundy-900"></i>
                    </div>
                    <div>
                      <p className="font-sans font-semibold text-lg mb-1">Saturday Sessions</p>
                      <p className="font-sans text-sm text-white/80">
                        Every Saturday at 9:00 AM EST
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 bg-gold-500 rounded-xl flex items-center justify-center flex-shrink-0">
                      <i className="ri-whatsapp-line text-2xl text-burgundy-900"></i>
                    </div>
                    <div>
                      <p className="font-sans font-semibold text-lg mb-1">WhatsApp Community</p>
                      <a 
                        href="https://chat.whatsapp.com/DO6BBQwuATv8uJfk5j0nKh?mode=hqrc" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="font-sans text-sm text-white/80 hover:text-gold-300 transition-colors cursor-pointer"
                      >
                        Join our group
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="bg-white rounded-[3rem] p-12 shadow-2xl">
                <h3 className="font-display text-3xl font-semibold text-burgundy-800 mb-8 text-center">
                  Follow Our Journey
                </h3>
                
                <div className="grid grid-cols-2 gap-6">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className={`h-24 bg-gradient-to-br ${social.color} rounded-2xl flex flex-col items-center justify-center shadow-lg hover:shadow-xl transition-all cursor-pointer`}
                    >
                      <i className={`${social.icon} text-4xl text-white mb-2`}></i>
                      <span className="font-sans text-xs text-white font-semibold">{social.name}</span>
                    </motion.a>
                  ))}
                </div>

                <p className="font-sans text-sm text-gray-600 text-center mt-8 leading-relaxed">
                  Join our community and stay updated with our latest content, events, and inspirational messages. Follow us on social media for daily encouragement!
                </p>
              </div>

              {/* Quote Card */}
              <div className="bg-gradient-to-br from-gold-50 to-blush-50 rounded-[3rem] p-12 border-2 border-gold-200 relative overflow-hidden">
                <div className="absolute top-4 right-4 text-8xl text-gold-300/30">
                  <i className="ri-heart-fill"></i>
                </div>
                <p className="font-serif text-2xl text-gray-800 leading-relaxed mb-6 relative z-10">
                  "Two are better than one, because they have a good return for their labor."
                </p>
                <p className="font-display text-xl text-burgundy-700 font-semibold relative z-10">
                  — Ecclesiastes 4:9
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ContactPage;
