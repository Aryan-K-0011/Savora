
import { MenuItem } from './types';

export const INITIAL_MENU: MenuItem[] = [
  {
    id: '1',
    name: 'Savora Signature Truffle Eggs',
    description: 'Organic poached eggs with shaved black truffles and gold-leaf garnish on sourdough.',
    price: 24,
    category: 'Breakfast',
    image: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&q=80&w=1200',
    featured: true
  },
  {
    id: '2',
    name: 'Wagyu Beef Wellington',
    description: 'Prime Grade-A Wagyu beef wrapped in artisanal puff pastry with duxelles.',
    price: 68,
    category: 'Main Course',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80&w=1200',
    featured: true
  },
  {
    id: '3',
    name: 'Madagascar Vanilla Bean Latte',
    description: 'Single-origin espresso infused with hand-scraped vanilla beans.',
    price: 12,
    category: 'Beverages',
    image: 'https://images.unsplash.com/photo-1541167760496-162955ed8a9f?auto=format&fit=crop&q=80&w=1200',
    featured: false
  },
  {
    id: '4',
    name: 'Golden Rose Cheesecake',
    description: 'Velvety cheesecake with damask rose essence and edible 24k gold flakes.',
    price: 18,
    category: 'Desserts',
    image: 'https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&q=80&w=1200',
    featured: true
  },
  {
    id: '5',
    name: 'Iced Matcha Ceremonial Grade',
    description: 'Uji ceremonial grade matcha whisked to perfection with oat milk.',
    price: 14,
    category: 'Beverages',
    image: 'https://images.unsplash.com/photo-1582733315328-84419921305f?auto=format&fit=crop&q=80&w=1200',
    featured: false
  },
  {
    id: '6',
    name: 'Mediterranean Sea Bass',
    description: 'Pan-seared sea bass with lemon-caper emulsion and roasted asparagus.',
    price: 42,
    category: 'Main Course',
    image: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&q=80&w=1200',
    featured: false
  }
];

export const CAFE_DETAILS = {
  address: '123 Luxury Lane, Mayfair, London, UK',
  phone: '+44 20 7946 0000',
  whatsapp: '442079460000',
  email: 'concierge@savora.com',
  hours: [
    { days: 'Mon - Fri', time: '08:00 AM - 10:00 PM' },
    { days: 'Sat - Sun', time: '09:00 AM - 11:00 PM' }
  ]
};
