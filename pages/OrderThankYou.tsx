
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const OrderThankYou: React.FC = () => {
  return (
    <div className="bg-white min-h-screen pt-32 pb-24">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <p className="text-xs uppercase tracking-[0.4em] text-[#7BAA8D] font-bold">Order Sent</p>
          <h1 className="text-4xl md:text-6xl font-serif text-[#2D2A28]">Thank you for your order</h1>
          <p className="text-sm md:text-base text-gray-600 max-w-2xl mx-auto">
            We have received your request on WhatsApp. Our team will confirm the final price and delivery time shortly.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center pt-4">
            <Link
              to="/menu"
              className="px-10 py-4 border border-[#2D2A28] text-[#2D2A28] uppercase tracking-widest text-xs font-bold hover:bg-[#2D2A28] hover:text-white transition-all"
            >
              Browse Menu
            </Link>
            <Link
              to="/"
              className="px-10 py-4 bg-[#7BAA8D] text-white uppercase tracking-widest text-xs font-bold hover:bg-[#2D2A28] transition-all"
            >
              Back to Home
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default OrderThankYou;
