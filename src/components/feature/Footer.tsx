
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Footer = () => {
  const quickLinks = [
    { label: 'Home', path: '/' },
    { label: 'Our Story', path: '/our-story' },
    { label: 'The Word', path: '/the-word' },
    { label: 'Growth', path: '/growth' },
  ];

  const resourceLinks = [
    { label: 'Gentleman & Lady', path: '/gentleman-lady' },
    { label: 'Resources', path: '/resources' },
    { label: 'Contact', path: '/contact' },
  ];

  return (
    <footer className="relative bg-gradient-to-br from-burgundy-800 via-burgundy-700 to-burgundy-900 text-white overflow-hidden">
      {/* Decorative Wave */}
      <div className="absolute top-0 left-0 right-0 h-16 bg-white">
        <svg
          className="absolute bottom-0 w-full h-16"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0 C300,80 600,80 900,40 C1050,20 1150,0 1200,0 L1200,120 L0,120 Z"
            fill="url(#footerGradient)"
          />
          <defs>
            <linearGradient id="footerGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#862941" />
              <stop offset="50%" stopColor="#9f2e48" />
              <stop offset="100%" stopColor="#72263d" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 pt-24 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Logo and Mission */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img
                src="https://public.readdy.ai/ai/img_res/4804859f-0a32-4433-b009-5de61fc56630.png"
                alt="Better Together"
                className="h-12 w-12 object-contain"
              />
              <span className="font-script text-3xl text-gold-300">Better Together</span>
            </div>
            <p className="font-sans text-sm text-white/80 leading-relaxed">
              Glorifying God by sharing the journey of a Christ-centered relationship, offering practical biblical advice, and fostering spiritual growth for individuals and couples.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display text-lg font-semibold mb-4 text-gold-300">Quick Links</h3>
            <div className="grid grid-cols-2 gap-3">
              <div className="space-y-3">
                {quickLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className="block font-sans text-sm text-white/80 hover:text-gold-300 transition-colors cursor-pointer whitespace-nowrap"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
              <div className="space-y-3">
                {resourceLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className="block font-sans text-sm text-white/80 hover:text-gold-300 transition-colors cursor-pointer whitespace-nowrap"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Newsletter Signup */}
          <div>
            <h3 className="font-display text-lg font-semibold mb-4 text-gold-300">Stay Connected</h3>
            <p className="font-sans text-sm text-white/80 mb-4">
              Join our community for weekly encouragement and updates.
            </p>
            <div className="flex gap-3 mb-6">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-gold-500 transition-all cursor-pointer"
              >
                <i className="ri-facebook-fill text-lg"></i>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-gold-500 transition-all cursor-pointer"
              >
                <i className="ri-instagram-line text-lg"></i>
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-gold-500 transition-all cursor-pointer"
              >
                <i className="ri-youtube-fill text-lg"></i>
              </a>
              <a
                href="https://tiktok.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-gold-500 transition-all cursor-pointer"
              >
                <i className="ri-tiktok-fill text-lg"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-sans text-sm text-white/60">
            © 2025 Better Together. All rights reserved.
          </p>
          <a
            href="https://readdy.ai/?origin=logo"
            target="_blank"
            rel="noopener noreferrer"
            className="font-sans text-sm text-white/60 hover:text-gold-300 transition-colors cursor-pointer whitespace-nowrap"
          >
            Website Builder
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
