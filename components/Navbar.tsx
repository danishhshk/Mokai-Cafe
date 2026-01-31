
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'Menu', path: '/menu' },
    { label: 'About', path: '/about' },
    { label: 'Gallery', path: '/gallery' },
    { label: 'Visit', path: '/visit' },
    { label: 'Order', path: '/order' },
  ];

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-500 backdrop-blur-md ${
        scrolled ? 'bg-white/80 shadow-sm py-4' : 'bg-white/40 py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <span className="text-2xl font-serif font-bold tracking-widest text-[#2D2A28]">MOKAI</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-10">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-sm tracking-widest uppercase font-medium transition-colors hover:text-[#7BAA8D] ${
                location.pathname === link.path ? 'text-[#7BAA8D]' : 'text-[#2D2A28]'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* WhatsApp CTA */}
        <div className="hidden md:block">
          <Link
            to="/order"
            className="px-6 py-2 border border-[#2D2A28] text-xs uppercase tracking-widest font-bold hover:bg-[#2D2A28] hover:text-white transition-all duration-300"
          >
            Order Now
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-[#2D2A28]"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-white border-t border-gray-100 shadow-xl md:hidden flex flex-col p-8 space-y-6"
          >
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="text-lg font-serif text-[#2D2A28]"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/order"
              className="w-full py-4 bg-[#7BAA8D] text-white text-center rounded-lg font-bold"
              onClick={() => setIsOpen(false)}
            >
              Order Now
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
