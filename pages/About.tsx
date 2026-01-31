
import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <div className="pt-32 pb-24">
      <div className="max-w-4xl mx-auto px-6">
        <header className="mb-20 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-8xl font-serif mb-8"
          >
            The Soul of Mokai
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-xl md:text-2xl font-serif italic text-gray-500 leading-relaxed"
          >
            "A bridge between the tradition of Uji and the modern spirit of Mumbai."
          </motion.p>
        </header>

        <div className="space-y-32">
          {/* Story 1 */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-serif">Origins of Grace</h2>
              <p className="text-gray-600 leading-loose">
                Mokai was born from a simple desire: to create a space where time feels different. Inspired by the meticulous tea ceremonies of Japan and the vibrant café culture of Europe, we've crafted a sanctuary in Bandra West for those who seek depth in their daily ritual.
              </p>
            </div>
            <div className="rounded-2xl overflow-hidden aspect-square shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1544787210-2213d84ad960?auto=format&fit=crop&q=80&w=600" 
                alt="Japanese Aesthetic" 
                className="w-full h-full object-cover"
              />
            </div>
          </section>

          {/* Story 2 */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="md:order-2 space-y-6">
              <h2 className="text-3xl font-serif">The Matcha Way</h2>
              <p className="text-gray-600 leading-loose">
                Our ceremonial grade matcha is sourced directly from Uji, Kyoto. Each bowl is whisked with precision, preserving the vibrant green hue and the smooth, umami-rich flavor that defines the highest quality matcha. It's not just a drink; it's a meditative practice.
              </p>
            </div>
            <div className="md:order-1 rounded-2xl overflow-hidden aspect-square shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1515696955266-4f67e13219e8?auto=format&fit=crop&q=80&w=600" 
                alt="Ceremonial Matcha" 
                className="w-full h-full object-cover"
              />
            </div>
          </section>

          {/* Story 3 */}
          <section className="bg-[#2D2A28] text-white p-12 md:p-20 rounded-[3rem] text-center space-y-8">
            <h2 className="text-4xl md:text-5xl font-serif">Crafted with Purpose</h2>
            <p className="max-w-2xl mx-auto opacity-80 leading-relaxed">
              From our keto-friendly desserts to our house-made cold brews, every item on our menu is chosen for its quality and character. We believe in slow café culture—where every interaction matters and every sip tells a story.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default About;
