
import { useState } from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
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
      const form = e.target as HTMLFormElement;
      const formDataToSend = new URLSearchParams();
      formDataToSend.append('name', formData.name);
      formDataToSend.append('email', formData.email);
      formDataToSend.append('subject', formData.subject);
      formDataToSend.append('message', formData.message);

      const response = await fetch('https://readdy.ai/api/form/d4ofmaf76s95aopp4800', {
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
    { icon: 'ri-facebook-fill', url: 'https://facebook.com', color: 'from-blue-600 to-blue-800' },
    { icon: 'ri-instagram-line', url: 'https://instagram.com', color: 'from-pink-600 to-purple-700' },
    { icon: 'ri-youtube-fill', url: 'https://youtube.com', color: 'from-red-600 to-red-800' },
    { icon: 'ri-twitter-x-line', url: 'https://twitter.com', color: 'from-gray-800 to-black' },
  ];

  return (
    <div className="relative bg-gradient-to-b from-white via-burgundy-50 to-white py-24 overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-gold-300/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-burgundy-300/20 rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-5xl md:text-6xl text-burgundy-800 mb-4">
            Get in Touch
          </h2>
          <p className="font-sans text-lg text-gray-600 max-w-2xl mx-auto">
            We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
          <div className="w-32 h-1 bg-gradient-to-r from-transparent via-gold-500 to-transparent mx-auto mt-6"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="bg-white rounded-[3rem] p-10 shadow-2xl">
              <h3 className="font-display text-3xl font-semibold text-burgundy-800 mb-6">
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
            <div className="bg-gradient-to-br from-burgundy-700 to-burgundy-900 rounded-[3rem] p-10 text-white shadow-2xl">
              <h3 className="font-script text-4xl mb-8">Let's Connect</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gold-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <i className="ri-mail-line text-xl text-burgundy-900"></i>
                  </div>
                  <div>
                    <p className="font-sans font-semibold mb-1">Email Us</p>
                    <a href="mailto:contact@bettertogether.com" className="font-sans text-sm text-white/80 hover:text-gold-300 transition-colors cursor-pointer">
                      contact@bettertogether.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gold-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <i className="ri-map-pin-line text-xl text-burgundy-900"></i>
                  </div>
                  <div>
                    <p className="font-sans font-semibold mb-1">Location</p>
                    <p className="font-sans text-sm text-white/80">
                      Montreal, Quebec, Canada
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gold-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <i className="ri-time-line text-xl text-burgundy-900"></i>
                  </div>
                  <div>
                    <p className="font-sans font-semibold mb-1">Saturday Sessions</p>
                    <p className="font-sans text-sm text-white/80">
                      Every Saturday at 9:00 AM EST
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="bg-white rounded-[3rem] p-10 shadow-2xl">
              <h3 className="font-display text-2xl font-semibold text-burgundy-800 mb-6 text-center">
                Follow Our Journey
              </h3>
              
              <div className="grid grid-cols-2 gap-4">
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
                    className={`w-full h-20 bg-gradient-to-br ${social.color} rounded-2xl flex items-center justify-center shadow-lg hover:shadow-xl transition-all cursor-pointer`}
                  >
                    <i className={`${social.icon} text-3xl text-white`}></i>
                  </motion.a>
                ))}
              </div>

              <p className="font-sans text-sm text-gray-600 text-center mt-6">
                Join our community and stay updated with our latest content, events, and inspirational messages.
              </p>
            </div>

            {/* Quote Card */}
            <div className="bg-gradient-to-br from-gold-50 to-blush-50 rounded-[3rem] p-10 border-2 border-gold-200 relative overflow-hidden">
              <div className="absolute top-4 right-4 text-7xl text-gold-300/30">
                <i className="ri-heart-fill"></i>
              </div>
              <p className="font-serif text-xl text-gray-800 leading-relaxed mb-4 relative z-10">
                "Two are better than one, because they have a good return for their labor."
              </p>
              <p className="font-display text-lg text-burgundy-700 font-semibold relative z-10">
                — Ecclesiastes 4:9
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
