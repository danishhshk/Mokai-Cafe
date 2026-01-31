
import { MenuItem, Category } from './types';

export const COLORS = {
  cream: '#F6F3EF',
  beige: '#E8E2D9',
  matcha: '#7BAA8D',
  espresso: '#2D2A28',
  grey: '#8B8B8B',
};

export const WHATSAPP_NUMBER = '918369725755';

export const MENU_DATA: MenuItem[] = [
  // Hot Coffee
  { id: 'hc1', name: 'Cafe Latte', price: 270, category: 'Hot Coffee', isVeg: true },
  { id: 'hc2', name: 'Cappuccino', price: 270, category: 'Hot Coffee', isVeg: true },
  { id: 'hc3', name: 'Cortado', price: 250, category: 'Hot Coffee', isVeg: true },
  { id: 'hc4', name: 'Macchiato', price: 180, category: 'Hot Coffee', isVeg: true },
  { id: 'hc5', name: 'Espresso', price: 180, category: 'Hot Coffee', isVeg: true },

  // Iced Coffee
  { id: 'ic1', name: 'Spanish Latte', price: 320, category: 'Iced Coffee', isBestseller: true, isVeg: true, image: 'https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&q=80&w=400' },
  { id: 'ic2', name: 'Iced Cortado', price: 250, category: 'Iced Coffee', isVeg: true },
  { id: 'ic3', name: 'Malaysian Iced Latte', price: 320, category: 'Iced Coffee', isVeg: true },
  { id: 'ic4', name: 'Pistachio Tiramisu Iced Latte', price: 375, category: 'Iced Coffee', isVeg: true },
  { id: 'ic5', name: 'Tiramisu Iced Latte', price: 375, category: 'Iced Coffee', isBestseller: true, isVeg: true, image: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&q=80&w=400' },

  // Hot Chocolate
  { id: 'hch1', name: 'Espresso Hot Chocolate', price: 375, category: 'Hot Chocolate', isVeg: true },
  { id: 'hch2', name: '5 Spice Hot Chocolate', price: 370, category: 'Hot Chocolate', isVeg: true },
  { id: 'hch3', name: 'Dark 70%', price: 380, category: 'Hot Chocolate', isVeg: true },
  { id: 'hch4', name: 'Classic 55%', price: 370, category: 'Hot Chocolate', isVeg: true },
  { id: 'hch5', name: 'Tiramisu Espresso Hot Chocolate', price: 395, category: 'Hot Chocolate', isVeg: true },

  // Ceremonial Matcha
  { id: 'm1', name: 'Vanilla Matcha', price: 350, category: 'Ceremonial Matcha Bar', isVeg: true },
  { id: 'm2', name: 'Dirty Matcha Latte', price: 370, category: 'Ceremonial Matcha Bar', isVeg: true },
  { id: 'm3', name: 'Matcha Misu', price: 390, category: 'Ceremonial Matcha Bar', isVeg: true },
  { id: 'm4', name: 'Taro Matcha', price: 375, category: 'Ceremonial Matcha Bar', isBestseller: true, isVeg: true, image: 'https://images.unsplash.com/photo-1515823064-d6e0c04616a7?auto=format&fit=crop&q=80&w=400' },
  { id: 'm5', name: 'Blueberry Matcha', price: 390, category: 'Ceremonial Matcha Bar', isVeg: true },

  // Smoothie Bowls
  { id: 'sb1', name: 'Berry Good Acai Bowl', price: 620, category: 'Smoothie Bowls', isVeg: true },
  { id: 'sb2', name: 'Cacao Smoothie Bowl', price: 620, category: 'Smoothie Bowls', isBestseller: true, isVeg: true, image: 'https://images.unsplash.com/photo-1590301157890-4810ed352733?auto=format&fit=crop&q=80&w=400' },

  // Smoothies
  { id: 's1', name: 'Peanut Butter & Cacao', price: 395, category: 'Smoothies', isVeg: true },
  { id: 's2', name: 'Mango Blueberry', price: 420, category: 'Smoothies', isVeg: true },
  { id: 's3', name: 'Banana Cinnamon', price: 350, category: 'Smoothies', isVeg: true },
  { id: 's4', name: 'Espresso Cacao', price: 350, category: 'Smoothies', isVeg: true },

  // Cold Brew
  { id: 'cb1', name: 'Sparkling Cold Brew', price: 320, category: 'Cold Brew', isVeg: true },
  { id: 'cb2', name: 'Coconut Malai Cold Brew', price: 330, category: 'Cold Brew', isVeg: true },
  { id: 'cb3', name: 'Watermelon Cold Brew', price: 330, category: 'Cold Brew', isVeg: true },
  { id: 'cb4', name: 'Almond Cold Brew', price: 320, category: 'Cold Brew', isVeg: true },
  { id: 'cb5', name: 'Orange Cold Brew', price: 330, category: 'Cold Brew', isVeg: true },

  // Tea
  { id: 't1', name: 'Chamomile Green Tea', price: 200, category: 'Tea', isVeg: true },
  { id: 't2', name: 'Jasmine Green Tea', price: 200, category: 'Tea', isVeg: true },
  { id: 't3', name: 'Masala Chai', price: 250, category: 'Tea', isVeg: true },
  { id: 't4', name: 'Teh Tarik Malaysia', price: 250, category: 'Tea', isVeg: true },

  // Desserts
  { id: 'd1', name: 'Orange Almond Cake', price: 240, category: 'Desserts', isVeg: true },
  { id: 'd2', name: 'Raspberry Brownie', price: 300, category: 'Desserts', isVeg: true },
  { id: 'd3', name: 'Flourless Chocolate Cake', price: 425, category: 'Desserts', isVeg: true },
  { id: 'd4', name: 'Triple Chocolate Cookie (Keto)', price: 295, category: 'Desserts', isBestseller: true, isVeg: true, image: 'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?auto=format&fit=crop&q=80&w=400' },
  { id: 'd5', name: 'Chocolate Crunch Cake', price: 450, category: 'Desserts', isVeg: true },

  // Healthy Shots
  { id: 'hs1', name: 'Aloe Vera', price: 70, category: 'Healthy Shots', isVeg: true },
  { id: 'hs2', name: 'Ginger Lime Honey', price: 70, category: 'Healthy Shots', isVeg: true },
  { id: 'hs3', name: 'Turmeric Ginger Honey', price: 70, category: 'Healthy Shots', isVeg: true },
];

export const CATEGORIES: Category[] = [
  'All',
  'Hot Coffee',
  'Iced Coffee',
  'Hot Chocolate',
  'Ceremonial Matcha Bar',
  'Smoothie Bowls',
  'Smoothies',
  'Cold Brew',
  'Tea',
  'Desserts',
  'Healthy Shots'
];
