
import React from 'react';
import { MapPin, Clock, Phone, Navigation, MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const Visit: React.FC = () => {
  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        <header className="mb-20">
          <motion.h1 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-6xl font-serif mb-4"
          >
            Visit Us
          </motion.h1>
          <p className="text-xl font-serif italic text-gray-500">Find your way to the heart of Bandra.</p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Details */}
          <div className="space-y-12">
            <div className="space-y-8">
              <div className="flex items-start space-x-6">
                <div className="bg-[#7BAA8D]/10 p-4 rounded-2xl">
                  <MapPin className="text-[#7BAA8D]" size={28} />
                </div>
                <div>
                  <h3 className="text-xl font-serif mb-2">Location</h3>
                  <p className="text-gray-600 leading-relaxed">
                    54, Chapel Road, Reclamation, <br />
                    Bandra West, Mumbai, <br />
                    Maharashtra 400050
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-6">
                <div className="bg-[#7BAA8D]/10 p-4 rounded-2xl">
                  <Clock className="text-[#7BAA8D]" size={28} />
                </div>
                <div>
                  <h3 className="text-xl font-serif mb-2">Operating Hours</h3>
                  <p className="text-gray-600">Monday – Sunday</p>
                  <p className="text-gray-600 font-bold">8:00 AM – 11:30 PM</p>
                </div>
              </div>

              <div className="flex items-start space-x-6">
                <div className="bg-[#7BAA8D]/10 p-4 rounded-2xl">
                  <Phone className="text-[#7BAA8D]" size={28} />
                </div>
                <div>
                  <h3 className="text-xl font-serif mb-2">Connect</h3>
                  <p className="text-gray-600">+91 98765 43210</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="https://www.google.com/maps/place/Mokai+Cafe/@19.0524517,72.8260149,17z/data=!3m1!4b1!4m6!3m5!1s0x3be7c9001fb6e177:0xa52f12f1036bb24e!8m2!3d19.0524466!4d72.8285898!16s%2Fg%2F11vwtj0822?entry=ttu&g_ep=EgoyMDI2MDEyOC4wIKXMDSoKLDEwMDc5MjA2N0gBUAM%3D"
                target="_blank" 
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center space-x-3 bg-[#2D2A28] text-white py-5 rounded-2xl font-bold uppercase tracking-widest text-xs hover:bg-[#7BAA8D] transition-all"
              >
                <Navigation size={16} />
                <span>Get Directions</span>
              </a>
              <a 
                href="https://wa.me/919999999999" 
                className="flex-1 flex items-center justify-center space-x-3 bg-white border border-[#2D2A28] text-[#2D2A28] py-5 rounded-2xl font-bold uppercase tracking-widest text-xs hover:bg-[#2D2A28] hover:text-white transition-all"
              >
                <MessageCircle size={16} />
                <span>Order on WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Map Embed Placeholder */}
          <div className="rounded-[3rem] overflow-hidden bg-gray-200 aspect-video lg:aspect-square shadow-2xl relative">
            <iframe
              title="Mokai Bandra Location"
              width="100%"
              height="100%"
              frameBorder="0"
              style={{ border: 0 }}
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.3289!2d72.82601!3d19.052452!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c9001fb6e177%3A0xa52f12f1036bb24e!2sMokai%20Cafe!5e0!3m2!1sen!2sin!4v1706707800000"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Visit;
