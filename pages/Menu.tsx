
import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Star, Leaf } from 'lucide-react';
import { MENU_DATA, CATEGORIES } from '../constants';
import { Category, MenuItem } from '../types';
import { useNavigate } from 'react-router-dom';

const Menu: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<Category>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleOrderNow = (item: MenuItem) => {
    if (typeof window !== 'undefined') {
      const stored = window.localStorage.getItem('mokai-cart');
      let items: Array<{ name: string; quantity: string; price: string }> = [];

      if (stored) {
        try {
          const parsed = JSON.parse(stored);
          if (Array.isArray(parsed)) {
            items = parsed;
          }
        } catch {
          items = [];
        }
      }

      const price = String(item.price);
      const existing = items.find((entry) => entry.name === item.name && entry.price === price);
      if (existing) {
        const currentQty = Number(existing.quantity || '1');
        existing.quantity = String(currentQty + 1);
      } else {
        items.push({ name: item.name, quantity: '1', price });
      }

      window.localStorage.setItem('mokai-cart', JSON.stringify(items));
    }

    navigate('/order');
  };

  const filteredItems = useMemo(() => {
    return MENU_DATA.filter(item => {
      const matchesCategory = activeCategory === 'All' || item.category === activeCategory;
      const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <div className="pt-32 pb-24 bg-[#F6F3EF] min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <header className="text-center mb-16">
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-[#7BAA8D] uppercase tracking-widest text-sm font-bold block mb-4"
          >
            The Collection
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-serif mb-10"
          >
            Our Menu
          </motion.h1>
          
          {/* Search Bar */}
          <div className="relative max-w-xl mx-auto mb-12">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
            <input 
              type="text"
              placeholder="Search your favorite drink or dessert..."
              className="w-full pl-12 pr-6 py-4 rounded-full bg-white border-none shadow-sm focus:ring-2 focus:ring-[#7BAA8D] transition-all"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          {/* Categories */}
          <div className="flex overflow-x-auto space-x-4 pb-4 scrollbar-hide md:justify-center">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`whitespace-nowrap px-6 py-2 rounded-full text-xs uppercase tracking-widest font-bold transition-all ${
                  activeCategory === cat 
                    ? 'bg-[#2D2A28] text-white' 
                    : 'bg-white text-[#2D2A28] hover:bg-gray-100'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </header>

        {/* Menu Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                layout
                key={item.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="bg-white p-6 rounded-[2rem] shadow-sm hover:shadow-xl transition-all group border border-transparent hover:border-[#E8E2D9]"
              >
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4 mb-6">
                  <div className="space-y-1">
                    <div className="flex items-center space-x-2">
                      <h3 className="text-2xl font-serif group-hover:text-[#7BAA8D] transition-colors">
                        {item.name}
                      </h3>
                      {item.isVeg && <Leaf size={14} className="text-[#7BAA8D]" />}
                    </div>
                    <p className="text-[10px] uppercase tracking-widest text-gray-400 font-bold">{item.category}</p>
                  </div>
                  <span className="text-xl font-medium">₹{item.price}</span>
                </div>

                <div className="flex items-center space-x-3">
                  {item.isBestseller && (
                    <span className="inline-flex items-center space-x-1 px-3 py-1 bg-[#F6F3EF] text-[#7BAA8D] text-[10px] uppercase tracking-widest font-bold rounded-full">
                      <Star size={10} fill="#7BAA8D" />
                      <span>Bestseller</span>
                    </span>
                  )}
                  <button
                    type="button"
                    onClick={() => handleOrderNow(item)}
                    className="ml-auto opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-all text-[10px] uppercase tracking-widest font-bold text-[#2D2A28] border border-[#2D2A28] rounded-full px-3 py-1 md:border-0 md:rounded-none md:px-0 md:py-0 md:border-b md:pb-0.5"
                  >
                    Order Now
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
        
        {filteredItems.length === 0 && (
          <div className="text-center py-32">
            <p className="text-gray-400 font-serif italic text-xl">We couldn't find what you're looking for...</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Menu;
