# MOKAI - Premium Specialty Café Website

A modern, responsive web application for MOKAI, a premium specialty coffee and ceremonial matcha bar located in Bandra, Mumbai.

## Features

### 🏠 Home Page
- Hero section with stunning coffee imagery
- Bestsellers showcase with horizontal scroll
- About section with philosophy statement
- Visit CTA section

### ☕ Menu
- Comprehensive menu with 11+ categories
- Hot Coffee, Iced Coffee, Hot Chocolate
- Ceremonial Matcha Bar, Smoothie Bowls
- Cold Brew, Tea, Desserts, Healthy Shots
- Search functionality
- Category filtering
- One-click "Order Now" from menu items

### 📝 Order System
- Form-based ordering with customer details
- Address collection (Line 1, Line 2, City, Pincode)
- Multiple item support - add/remove items dynamically
- Real-time total calculation
- Cart persistence using localStorage
- WhatsApp integration - orders sent directly to WhatsApp
- Mobile-responsive order form

### 📍 Visit Page
- Location details with Google Maps embed
- Operating hours display
- Contact information
- Direct Google Maps navigation link
- WhatsApp order CTA

### 🖼️ Gallery
- Premium photo gallery
- Image showcase section

### 📖 About Page
- Brand story and philosophy
- Company history

### 🔗 Social & Contact
- Instagram link integration
- Google Maps location pin
- Phone contact information
- WhatsApp messaging

## Installation

1. **Clone/Extract the project**
```bash
cd mokai-–-premium-specialty-café
```

2. **Install dependencies**
```bash
npm install
```

3. **Run development server**
```bash
npm run dev
```

The app will start at `http://localhost:5173`

## Build for Production

```bash
npm run build
```

## Project Structure

```
├── pages/
│   ├── Home.tsx           # Landing page
│   ├── Menu.tsx           # Menu with filtering & search
│   ├── About.tsx          # About section
│   ├── Gallery.tsx        # Photo gallery
│   ├── Visit.tsx          # Location & directions
│   ├── Order.tsx          # Order form with cart
│   └── OrderThankYou.tsx  # Order confirmation
├── components/
│   ├── Navbar.tsx         # Navigation bar
│   └── Footer.tsx         # Footer with links
├── App.tsx                # Main app router
├── constants.tsx          # Menu data & configuration
├── types.ts               # TypeScript types
└── index.tsx              # Entry point
```

## Key Technologies

- **React 19** - UI framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **React Router** - Client-side routing
- **Lucide Icons** - Icon library
- **Vite** - Build tool

## Configuration

### Update WhatsApp Number
Edit `constants.tsx`:
```typescript
export const WHATSAPP_NUMBER = '918369725755'; // Update with your number
```

### Update Social Links
Edit `components/Footer.tsx`:
- Instagram: Line 18
- WhatsApp: Various locations

### Update Location
Edit `pages/Visit.tsx`:
- Google Maps embed coordinates
- Address details
- Opening hours

## Features in Detail

### Order System
1. Users can click "Order Now" on any menu item
2. Items are added to cart (stored in localStorage)
3. Users proceed to order form
4. Fill customer details and address
5. Add multiple items or continue from menu
6. Submit order → Opens WhatsApp with pre-filled details

### Responsive Design
- Mobile-first approach
- Fully responsive on all screen sizes
- Touch-friendly buttons
- Optimized navigation for mobile

### Navigation
- Sticky navbar with blur effect on scroll
- Mobile hamburger menu
- Quick links to all pages
- Direct order CTA in navbar

## Customization Tips

1. **Colors**: Edit color values in components or create Tailwind config
2. **Images**: Replace image URLs in components
3. **Text**: Update content directly in component files
4. **Menu Items**: Modify `MENU_DATA` in `constants.tsx`

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance

- Lazy loading for images
- Optimized animations with Framer Motion
- Efficient React rendering
- LocalStorage for cart persistence

## License

© 2026 Mokai Specialty Coffee. All rights reserved.

---

For questions or support, contact: +91 98765 43210 or visit our location at Chapel Road, Bandra West, Mumbai.
