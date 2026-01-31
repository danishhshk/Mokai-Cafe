
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, ExternalLink } from 'lucide-react';
import { MENU_DATA } from '../constants';

const Home: React.FC = () => {
  const bestsellers = MENU_DATA.filter(item => item.isBestseller).slice(0, 5);

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        <div className="absolute inset-0">
          <img 
            src="https://lh3.googleusercontent.com/gps-cs-s/AHVAwerV0rdlK4uwzNpztF5CY7W18rzKnkBV6ENAMAW5Vx9JKOjFuL4GoeXTA-l5FDCPdWvEL43VSiU6CrCuW1B2-r9D4vAKiBRrlbjs9EQMUEx0nua5qM0hq3Z-2_UXZ9E1mjLOorzh9Q=s1360-w1360-h1020-rw" 
            alt="Mokai Coffee" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/30" />
        </div>
        
        <div className="relative z-10 text-center px-6">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-white text-5xl md:text-8xl font-serif italic mb-6"
          >
            Whisked. Brewed. Crafted.
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-white/90 text-sm md:text-lg uppercase tracking-[0.4em] mb-12 font-medium"
          >
            Specialty Coffee • Ceremonial Matcha • Artisan Desserts
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="flex flex-col md:flex-row items-center justify-center gap-6"
          >
            <Link to="/menu" className="w-full md:w-auto px-12 py-4 bg-white text-[#2D2A28] uppercase tracking-widest text-xs font-bold hover:bg-[#7BAA8D] hover:text-white transition-all">
              View Menu
            </Link>
            <Link to="/visit" className="w-full md:w-auto px-12 py-4 border border-white text-white uppercase tracking-widest text-xs font-bold hover:bg-white hover:text-[#2D2A28] transition-all">
              Visit Us
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Short About */}
      <section className="py-24 px-6 bg-[#F6F3EF]">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="aspect-[4/5] bg-gray-200 rounded-2xl overflow-hidden shadow-2xl"
          >
            <img 
              src="https://images.unsplash.com/photo-1515823064-d6e0c04616a7?auto=format&fit=crop&q=80&w=800" 
              alt="Matcha Preparation"
              className="w-full h-full object-cover"
            />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <span className="text-[#7BAA8D] uppercase tracking-widest text-sm font-bold">Our Philosophy</span>
            <h2 className="text-4xl md:text-5xl font-serif text-[#2D2A28] leading-tight">
              A sanctuary for the <br /> modern coffee connoisseur.
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed font-light">
              Located in the vibrant streets of Bandra, Mokai is more than just a café. We are a destination for those who appreciate the slower side of life. From our Uji-sourced ceremonial matcha to our meticulously roasted specialty beans, every cup is a testament to our artisanal craft.
            </p>
            <Link to="/about" className="inline-flex items-center space-x-2 text-[#2D2A28] font-bold uppercase tracking-widest text-xs hover:text-[#7BAA8D] transition-colors">
              <span>Read Our Story</span>
              <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Bestsellers Horizontal Scroll */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 mb-12 flex justify-between items-end">
          <div>
            <span className="text-[#7BAA8D] uppercase tracking-widest text-xs font-bold block mb-2">Popular Choice</span>
            <h2 className="text-4xl font-serif">The Bestsellers</h2>
          </div>
          <Link to="/menu" className="text-xs uppercase tracking-widest font-bold border-b border-[#2D2A28] pb-1 hover:text-[#7BAA8D] hover:border-[#7BAA8D] transition-all">
            Full Menu
          </Link>
        </div>
        
        <div className="flex overflow-x-auto gap-8 px-6 pb-12 scrollbar-hide">
          {bestsellers.map((item, idx) => (
            <motion.div 
              key={item.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="min-w-[300px] md:min-w-[350px] space-y-4 group cursor-pointer"
            >
              <div className="aspect-square bg-gray-100 rounded-3xl overflow-hidden relative">
                <img 
                  src={item.image || `https://images.unsplash.com/photo-1541167760496-162955ed8a9f?auto=format&fit=crop&q=80&w=400`} 
                  alt={item.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full flex items-center space-x-1 shadow-sm">
                  <Star size={12} className="text-[#7BAA8D] fill-[#7BAA8D]" />
                  <span className="text-[10px] uppercase font-bold tracking-widest">Bestseller</span>
                </div>
              </div>
              <div className="flex justify-between items-center px-2">
                <div>
                  <h3 className="text-xl font-serif">{item.name}</h3>
                  <p className="text-xs text-gray-500 uppercase tracking-widest mt-1">{item.category}</p>
                </div>
                <span className="text-lg font-medium text-[#2D2A28]">₹{item.price}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Mini Visit Us */}
      <section className="py-24 bg-[#E8E2D9] relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-10 relative z-10">
          <h2 className="text-4xl md:text-6xl font-serif">Visit Us in Bandra</h2>
          <p className="text-lg opacity-70 italic font-serif">
            "The perfect spot for your morning ritual or an afternoon escape."
          </p>
          <div className="flex flex-col md:flex-row justify-center items-center gap-12">
            <div className="text-center">
              <p className="text-xs uppercase tracking-[0.3em] font-bold mb-2">Address</p>
              <p className="text-sm font-medium">54, Chapel Road, Bandra West</p>
            </div>
            <div className="text-center">
              <p className="text-xs uppercase tracking-[0.3em] font-bold mb-2">Timing</p>
              <p className="text-sm font-medium">8:00 AM – 11:30 PM</p>
            </div>
          </div>
          <Link to="/visit" className="inline-block px-12 py-4 bg-[#2D2A28] text-white uppercase tracking-widest text-xs font-bold hover:bg-[#7BAA8D] transition-all">
            Get Directions
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
