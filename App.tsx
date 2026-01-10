
import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { 
  Menu as MenuIcon, 
  X, 
  Phone, 
  Instagram, 
  Facebook, 
  MessageCircle,
  Settings,
  ShieldCheck,
  User as UserIcon,
  MapPin
} from 'lucide-react';
import Home from './pages/Home';
import About from './pages/About';
import MenuPage from './pages/MenuPage';
import BookATable from './pages/BookATable';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import Admin from './pages/Admin';
import { MenuItem, Booking } from './types';
import { INITIAL_MENU, CAFE_DETAILS } from './constants';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const isAdminPath = location.pathname.startsWith('/admin');

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Menu', path: '/menu' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact', path: '/contact' },
    { name: 'Book a Table', path: '/book', highlight: true },
  ];

  if (isAdminPath) {
    return (
      <header className="fixed w-full z-50 bg-stone-950 text-white border-b border-stone-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="flex items-center gap-2 text-xl font-bold italic serif tracking-tighter text-gold">
              SAVORA <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-stone-500 not-italic">Console</span>
            </Link>
            <div className="flex items-center gap-6">
              <span className="text-[10px] font-black tracking-widest text-stone-500">ADMIN MODE</span>
              <Link to="/" className="text-xs font-bold tracking-widest hover:text-gold transition-colors flex items-center gap-2">
                <UserIcon size={14} /> VIEW SITE
              </Link>
            </div>
          </div>
        </div>
      </header>
    );
  }

  return (
    <header className="fixed w-full z-50 transition-all duration-300 bg-cream/90 backdrop-blur-md border-b border-stone-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="text-3xl font-bold tracking-tighter text-gold italic serif">
            SAVORA
          </Link>

          <nav className="hidden md:flex space-x-8 items-center">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-bold tracking-[0.1em] transition-all duration-300 ${
                  link.highlight 
                    ? 'bg-stone-900 text-white px-8 py-2.5 rounded-full hover:bg-gold hover:shadow-lg' 
                    : location.pathname === link.path 
                      ? 'text-gold' 
                      : 'text-stone-600 hover:text-gold'
                }`}
              >
                {link.name.toUpperCase()}
              </Link>
            ))}
            <div className="h-6 w-[1px] bg-stone-200 mx-2"></div>
            <Link to="/admin" className="text-stone-400 hover:text-stone-900 transition-colors" title="Management Console">
              <Settings size={20} />
            </Link>
          </nav>

          <div className="md:hidden flex items-center gap-4">
            <Link to="/admin" className="text-stone-400 hover:text-stone-900">
              <Settings size={20} />
            </Link>
            <button onClick={() => setIsOpen(!isOpen)} className="text-stone-900">
              {isOpen ? <X size={28} /> : <MenuIcon size={28} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-cream border-b border-stone-200 animate-in slide-in-from-top duration-300">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 text-center">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-6 text-xl font-bold serif italic ${
                  location.pathname === link.path ? 'text-gold' : 'text-stone-600'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

const Footer = () => {
  const location = useLocation();
  if (location.pathname.startsWith('/admin')) return null;

  return (
    <footer className="bg-stone-950 text-stone-300 pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-16">
        <div className="space-y-8">
          <h3 className="text-white text-4xl italic serif font-bold tracking-tighter">SAVORA</h3>
          <p className="text-sm leading-relaxed text-stone-500 font-light">
            Crafting moments of quiet luxury through artisanal gastronomy and timeless ambience in the heart of Mayfair.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-stone-600 hover:text-gold transition-colors"><Instagram size={24} /></a>
            <a href="#" className="text-stone-600 hover:text-gold transition-colors"><Facebook size={24} /></a>
            <a href={`https://wa.me/${CAFE_DETAILS.whatsapp}`} className="text-stone-600 hover:text-gold transition-colors"><MessageCircle size={24} /></a>
          </div>
        </div>
        
        <div>
          <h4 className="text-white font-bold mb-8 uppercase tracking-[0.3em] text-[10px]">Navigation</h4>
          <ul className="space-y-4 text-sm font-medium">
            <li><Link to="/" className="hover:text-gold transition-colors">The Experience</Link></li>
            <li><Link to="/about" className="hover:text-gold transition-colors">Our History</Link></li>
            <li><Link to="/menu" className="hover:text-gold transition-colors">The Menu</Link></li>
            <li><Link to="/gallery" className="hover:text-gold transition-colors">Visual Gallery</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold mb-8 uppercase tracking-[0.3em] text-[10px]">Concierge Hours</h4>
          <div className="space-y-4 text-sm font-medium">
            {CAFE_DETAILS.hours.map((h, i) => (
              <div key={i}>
                <p className="text-stone-500 text-xs mb-1">{h.days}</p>
                <p className="text-white">{h.time}</p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-white font-bold mb-8 uppercase tracking-[0.3em] text-[10px]">Inquiries</h4>
          <div className="space-y-6 text-sm font-medium">
            <p className="flex items-start gap-3">
              <MapPin size={20} className="text-gold shrink-0" />
              <span className="leading-relaxed">{CAFE_DETAILS.address}</span>
            </p>
            <p className="flex items-center gap-3">
              <Phone size={20} className="text-gold shrink-0" />
              <span>{CAFE_DETAILS.phone}</span>
            </p>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24 pt-12 border-t border-stone-900 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] font-bold tracking-widest text-stone-600 uppercase">
        <p>&copy; {new Date().getFullYear()} Savora Global. All rights reserved.</p>
        <div className="flex gap-8">
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

const WhatsAppButton = () => {
  const location = useLocation();
  if (location.pathname.startsWith('/admin')) return null;

  return (
    <a 
      href={`https://wa.me/${CAFE_DETAILS.whatsapp}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-10 right-10 z-40 bg-white text-stone-900 p-5 rounded-full shadow-2xl hover:bg-gold hover:text-white transition-all duration-500 hover:scale-110 active:scale-95 group"
      aria-label="Contact on WhatsApp"
    >
      <MessageCircle size={24} />
      <span className="absolute right-full mr-4 bg-white text-stone-900 px-4 py-2 rounded-xl text-[10px] font-black tracking-widest whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity shadow-lg">WHATSAPP CONCIERGE</span>
    </a>
  );
};

function App() {
  const [menuItems, setMenuItems] = useState<MenuItem[]>(() => {
    const saved = localStorage.getItem('savora_menu');
    return saved ? JSON.parse(saved) : INITIAL_MENU;
  });

  const [bookings, setBookings] = useState<Booking[]>(() => {
    const saved = localStorage.getItem('savora_bookings');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem('savora_menu', JSON.stringify(menuItems));
  }, [menuItems]);

  useEffect(() => {
    localStorage.setItem('savora_bookings', JSON.stringify(bookings));
  }, [bookings]);

  return (
    <Router>
      <Header />
      <main className="">
        <Routes>
          <Route path="/" element={<Home menu={menuItems} />} />
          <Route path="/about" element={<About />} />
          <Route path="/menu" element={<MenuPage menu={menuItems} />} />
          <Route path="/book" element={<BookATable onBook={(b) => setBookings([...bookings, b])} />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
          <Route 
            path="/admin/*" 
            element={
              <Admin 
                menu={menuItems} 
                setMenu={setMenuItems} 
                bookings={bookings} 
                setBookings={setBookings} 
              />
            } 
          />
        </Routes>
      </main>
      <Footer />
      <WhatsAppButton />
    </Router>
  );
}

export default App;
