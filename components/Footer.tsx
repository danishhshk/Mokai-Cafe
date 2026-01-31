
import React from 'react';
import { Instagram, MapPin, Phone, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#2D2A28] text-[#E8E2D9] pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="space-y-6">
          <h2 className="text-3xl font-serif tracking-widest">MOKAI</h2>
          <p className="text-sm opacity-70 leading-relaxed max-w-xs">
            A premium specialty coffee and ceremonial matcha bar in the heart of Bandra. Experience the fusion of Japanese precision and European warmth.
          </p>
          <div className="flex space-x-4">
            <a href="https://www.instagram.com/mokaiindia/?hl=en" target="_blank" rel="noopener noreferrer" className="hover:text-[#7BAA8D] transition-colors"><Instagram size={20} /></a>
            <a href="#" className="hover:text-[#7BAA8D] transition-colors"><MessageCircle size={20} /></a>
          </div>
        </div>

        <div>
          <h3 className="text-sm uppercase tracking-widest font-bold mb-6">Quick Links</h3>
          <ul className="space-y-4 text-sm opacity-70">
            <li><Link to="/" className="hover:text-white">Home</Link></li>
            <li><Link to="/menu" className="hover:text-white">Our Menu</Link></li>
            <li><Link to="/about" className="hover:text-white">Our Story</Link></li>
            <li><Link to="/order" className="hover:text-white">Order Online</Link></li>
            <li><Link to="/visit" className="hover:text-white">Visit Us</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm uppercase tracking-widest font-bold mb-6">Contact</h3>
          <ul className="space-y-4 text-sm opacity-70">
            <li className="flex items-start space-x-3">
              <MapPin size={18} className="shrink-0" />
              <span>54, Chapel Road, Reclamation, Bandra West, Mumbai</span>
            </li>
            <li className="flex items-center space-x-3">
              <Phone size={18} />
              <span>+91 98765 43210</span>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm uppercase tracking-widest font-bold mb-6">Hours</h3>
          <ul className="space-y-4 text-sm opacity-70">
            <li>Monday – Sunday</li>
            <li>8:00 AM – 11:30 PM</li>
            <li className="pt-4">
              <a 
                href="https://www.google.com/maps/place/Mokai+Cafe/@19.0524517,72.8260149,17z/data=!3m1!4b1!4m6!3m5!1s0x3be7c9001fb6e177:0xa52f12f1036bb24e!8m2!3d19.0524466!4d72.8285898!16s%2Fg%2F11vwtj0822?entry=ttu&g_ep=EgoyMDI2MDEyOC4wIKXMDSoKLDEwMDc5MjA2N0gBUAM%3D"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-2 border border-[#E8E2D9] text-[10px] uppercase tracking-widest hover:bg-[#E8E2D9] hover:text-[#2D2A28] transition-all"
              >
                Get Directions
              </a>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 mt-20 pt-10 border-t border-white/10 text-center">
        <p className="text-[10px] uppercase tracking-[0.2em] opacity-40">
          © {new Date().getFullYear()} Mokai Specialty Coffee. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
