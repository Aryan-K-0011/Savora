
import React, { useState, useEffect } from 'react';
import { 
  Plus, 
  Trash2, 
  Check, 
  X, 
  Coffee, 
  Users, 
  DollarSign, 
  Calendar as CalendarIcon,
  Search,
  BookOpen,
  Info,
  Clock,
  ArrowRight,
  ShieldCheck,
  Lock,
  Key,
  Star
} from 'lucide-react';
import { MenuItem, Booking, Category } from '../types';

interface AdminProps {
  menu: MenuItem[];
  setMenu: React.Dispatch<React.SetStateAction<MenuItem[]>>;
  bookings: Booking[];
  setBookings: React.Dispatch<React.SetStateAction<Booking[]>>;
}

const ADMIN_ACCESS_KEY = "SAVORA2024"; // In a real app, this would be validated via a backend

const Admin: React.FC<AdminProps> = ({ menu, setMenu, bookings, setBookings }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(() => {
    return sessionStorage.getItem('savora_admin_auth') === 'true';
  });
  const [inputKey, setInputKey] = useState('');
  const [error, setError] = useState('');
  
  const [activeTab, setActiveTab] = useState<'bookings' | 'menu' | 'guide'>('bookings');
  const [search, setSearch] = useState('');
  const [isAddingItem, setIsAddingItem] = useState(false);
  const [newItem, setNewItem] = useState<Partial<MenuItem>>({
    name: '',
    description: '',
    price: 0,
    category: 'Breakfast',
    image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&q=80&w=800',
    featured: false
  });

  const [blockedSlots, setBlockedSlots] = useState<string[]>(() => {
    const saved = localStorage.getItem('savora_blocked_slots');
    return saved ? JSON.parse(saved) : ['2023-12-25', '2023-12-31'];
  });

  useEffect(() => {
    localStorage.setItem('savora_blocked_slots', JSON.stringify(blockedSlots));
  }, [blockedSlots]);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputKey === ADMIN_ACCESS_KEY) {
      setIsAuthenticated(true);
      sessionStorage.setItem('savora_admin_auth', 'true');
      setError('');
    } else {
      setError('Invalid Access Key. Please contact the system administrator.');
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    sessionStorage.removeItem('savora_admin_auth');
  };

  const handleAddMenuItem = () => {
    if (newItem.name && newItem.price) {
      const item: MenuItem = {
        id: Math.random().toString(36).substr(2, 9),
        name: newItem.name || '',
        description: newItem.description || '',
        price: Number(newItem.price),
        category: (newItem.category as Category) || 'Breakfast',
        image: newItem.image || 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&q=80&w=800',
        featured: !!newItem.featured
      };
      setMenu([...menu, item]);
      setIsAddingItem(false);
      setNewItem({ name: '', description: '', price: 0, category: 'Breakfast', image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&q=80&w=800', featured: false });
    }
  };

  const toggleFeatured = (id: string) => {
    setMenu(menu.map(m => m.id === id ? { ...m, featured: !m.featured } : m));
  };

  const deleteMenuItem = (id: string) => {
    if (confirm('Permanently remove this item?')) {
      setMenu(menu.filter(m => m.id !== id));
    }
  };

  const updateBookingStatus = (id: string, status: Booking['status']) => {
    setBookings(bookings.map(b => b.id === id ? { ...b, status } : b));
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-stone-950 flex items-center justify-center p-6 pt-24">
        <div className="max-w-md w-full space-y-12 text-center animate-in fade-in zoom-in-95 duration-700">
          <div className="space-y-4">
            <div className="w-20 h-20 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-6 border border-gold/20">
              <ShieldCheck className="text-gold" size={40} />
            </div>
            <h1 className="text-4xl font-bold serif italic text-white tracking-tight">Access Restricted</h1>
            <p className="text-stone-500 font-light text-sm tracking-widest uppercase">Management Console Gateway</p>
          </div>

          <form onSubmit={handleLogin} className="bg-white/5 p-10 rounded-[40px] border border-white/10 backdrop-blur-xl space-y-8">
            <div className="space-y-3">
              <label className="text-[10px] font-black uppercase tracking-[0.4em] text-gold block text-left ml-2">Admin Key</label>
              <div className="relative">
                <Lock className="absolute left-5 top-1/2 -translate-y-1/2 text-stone-600" size={18} />
                <input 
                  type="password" 
                  value={inputKey}
                  onChange={(e) => setInputKey(e.target.value)}
                  placeholder="••••••••••••"
                  className="w-full bg-white/5 border border-white/10 rounded-2xl py-5 pl-14 pr-6 text-white placeholder:text-stone-700 focus:ring-2 focus:ring-gold outline-none transition-all"
                />
              </div>
              {error && <p className="text-red-400 text-xs font-medium mt-4 animate-pulse">{error}</p>}
            </div>

            <button 
              type="submit" 
              className="w-full bg-gold text-white py-5 rounded-2xl font-black text-xs tracking-[0.3em] hover:bg-white hover:text-stone-900 transition-all duration-500 flex items-center justify-center gap-3 shadow-2xl shadow-gold/20"
            >
              AUTHENTICATE <ArrowRight size={16} />
            </button>
          </form>

          <p className="text-stone-600 text-[10px] tracking-[0.2em] uppercase">Authorized Personnel Only • IP Logged</p>
        </div>
      </div>
    );
  }

  const filteredBookings = bookings.filter(b => 
    b.name.toLowerCase().includes(search.toLowerCase()) || 
    b.email.toLowerCase().includes(search.toLowerCase())
  ).sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());

  const filteredMenu = menu.filter(m => 
    m.name.toLowerCase().includes(search.toLowerCase()) ||
    m.category.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-stone-50 pb-20 pt-16">
      {/* Header */}
      <div className="bg-stone-900 text-white py-12 px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-8">
          <div>
            <div className="flex items-center gap-4 mb-2">
              <span className="w-12 h-12 bg-gold rounded-2xl flex items-center justify-center shadow-lg shadow-gold/20">
                <BookOpen size={24} className="text-white" />
              </span>
              <div>
                <h1 className="text-3xl font-bold serif italic text-gold">Management Console</h1>
                <p className="text-stone-500 text-[10px] font-black tracking-widest uppercase">Admin Verified • Welcome Back</p>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap gap-2 bg-stone-800 p-2 rounded-2xl">
            <button 
              onClick={() => setActiveTab('bookings')}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl text-[10px] font-black tracking-widest transition-all ${activeTab === 'bookings' ? 'bg-gold text-white shadow-lg shadow-gold/20' : 'text-stone-400 hover:text-white'}`}
            >
              RESERVATIONS
            </button>
            <button 
              onClick={() => setActiveTab('menu')}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl text-[10px] font-black tracking-widest transition-all ${activeTab === 'menu' ? 'bg-gold text-white shadow-lg shadow-gold/20' : 'text-stone-400 hover:text-white'}`}
            >
              MENU CONTROL
            </button>
            <button 
              onClick={() => setActiveTab('guide')}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl text-[10px] font-black tracking-widest transition-all ${activeTab === 'guide' ? 'bg-gold text-white shadow-lg shadow-gold/20' : 'text-stone-400 hover:text-white'}`}
            >
              HANDOVER GUIDE
            </button>
            <button 
              onClick={handleLogout}
              className="flex items-center gap-2 px-6 py-3 rounded-xl text-[10px] font-black tracking-widest text-red-400 hover:bg-red-400/10 transition-all border border-red-400/20"
            >
              LOGOUT
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 -mt-8">
        {activeTab !== 'guide' && (
          <div className="bg-white p-4 rounded-3xl shadow-sm border border-stone-100 flex flex-col sm:flex-row gap-4 justify-between items-center mb-10">
            <div className="relative w-full sm:w-96">
              <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-stone-300" size={18} />
              <input 
                type="text" 
                placeholder={`Search ${activeTab}...`}
                className="w-full pl-14 pr-6 py-4 bg-stone-50 border-none rounded-2xl focus:ring-2 focus:ring-gold outline-none text-sm font-medium"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
            {activeTab === 'menu' && (
              <button 
                onClick={() => setIsAddingItem(true)}
                className="w-full sm:w-auto flex items-center justify-center gap-3 bg-stone-900 text-white px-10 py-4 rounded-2xl hover:bg-gold transition-colors text-[10px] font-black tracking-widest"
              >
                <Plus size={18} /> ADD NEW DISH
              </button>
            )}
          </div>
        )}

        {activeTab === 'bookings' && (
          <div className="space-y-6">
            {filteredBookings.length === 0 ? (
              <div className="bg-white p-32 text-center rounded-[50px] border border-stone-100 shadow-sm">
                <CalendarIcon className="mx-auto text-stone-100 mb-8" size={80} />
                <p className="text-stone-400 italic serif text-3xl">The concierge awaits your first guest.</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 gap-6">
                {filteredBookings.map((b) => (
                  <div key={b.id} className="bg-white p-8 rounded-[32px] shadow-sm border border-stone-100 flex flex-col md:flex-row justify-between items-start md:items-center gap-8 group hover:border-gold/30 transition-all">
                    <div className="flex items-center gap-8">
                      <div className="w-16 h-16 bg-stone-50 text-stone-900 rounded-2xl flex items-center justify-center font-bold text-2xl serif italic border border-stone-100 group-hover:bg-gold group-hover:text-white transition-all shadow-sm">
                        {b.name.charAt(0)}
                      </div>
                      <div>
                        <h4 className="font-bold text-xl text-stone-900 mb-1">{b.name}</h4>
                        <p className="text-xs text-stone-400 font-light tracking-widest uppercase">{b.email} • {b.phone}</p>
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-12 items-center">
                      <div className="space-y-2">
                        <p className="text-[10px] font-black uppercase tracking-widest text-stone-300">Schedule</p>
                        <p className="text-sm font-bold text-stone-700 flex items-center gap-3">
                          <CalendarIcon size={16} className="text-gold" /> {b.date}
                          <Clock size={16} className="text-gold ml-2" /> {b.time}
                        </p>
                      </div>
                      <div className="space-y-2">
                        <p className="text-[10px] font-black uppercase tracking-widest text-stone-300">Guests</p>
                        <p className="text-sm font-bold text-stone-700 flex items-center gap-3">
                          <Users size={16} className="text-gold" /> {b.guests} Persons
                        </p>
                      </div>
                      <div>
                        <span className={`px-5 py-2 rounded-full text-[10px] font-black tracking-widest uppercase ${
                          b.status === 'Confirmed' ? 'bg-green-50 text-green-600' : 
                          b.status === 'Cancelled' ? 'bg-red-50 text-red-600' : 
                          'bg-amber-50 text-amber-600'
                        }`}>
                          {b.status}
                        </span>
                      </div>
                    </div>

                    <div className="flex gap-3">
                      {b.status === 'Pending' && (
                        <>
                          <button onClick={() => updateBookingStatus(b.id, 'Confirmed')} className="p-4 bg-green-50 text-green-600 rounded-2xl hover:bg-green-600 hover:text-white transition-all shadow-sm"><Check size={20} /></button>
                          <button onClick={() => updateBookingStatus(b.id, 'Cancelled')} className="p-4 bg-red-50 text-red-600 rounded-2xl hover:bg-red-600 hover:text-white transition-all shadow-sm"><X size={20} /></button>
                        </>
                      )}
                      <button onClick={() => setBookings(bookings.filter(x => x.id !== b.id))} className="p-4 bg-stone-50 text-stone-400 rounded-2xl hover:bg-stone-900 hover:text-white transition-all"><Trash2 size={20} /></button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Menu Tab */}
        {activeTab === 'menu' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {isAddingItem && (
              <div className="bg-white p-10 rounded-[48px] shadow-2xl border-2 border-dashed border-gold animate-in zoom-in-95">
                <div className="flex items-center gap-3 mb-8 text-gold">
                  <Coffee size={24} />
                  <h4 className="font-bold serif italic text-2xl">New Creation</h4>
                </div>
                <div className="space-y-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-stone-400 ml-2">Dish Name</label>
                    <input type="text" placeholder="e.g. Saffron Risotto" className="w-full px-6 py-4 bg-stone-50 border-none rounded-2xl outline-none text-sm font-medium focus:ring-2 focus:ring-gold transition-all" value={newItem.name} onChange={(e) => setNewItem({...newItem, name: e.target.value})} />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-stone-400 ml-2">Category</label>
                    <select className="w-full px-6 py-4 bg-stone-50 border-none rounded-2xl outline-none text-sm font-medium focus:ring-2 focus:ring-gold transition-all appearance-none" value={newItem.category} onChange={(e) => setNewItem({...newItem, category: e.target.value as Category})}>
                      <option value="Breakfast">Breakfast</option>
                      <option value="Main Course">Main Course</option>
                      <option value="Beverages">Beverages</option>
                      <option value="Desserts">Desserts</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-stone-400 ml-2">Price ($)</label>
                    <div className="relative">
                      <DollarSign className="absolute left-6 top-1/2 -translate-y-1/2 text-gold" size={16} />
                      <input type="number" placeholder="0.00" className="w-full pl-12 pr-6 py-4 bg-stone-50 border-none rounded-2xl outline-none text-sm font-medium focus:ring-2 focus:ring-gold transition-all" value={newItem.price} onChange={(e) => setNewItem({...newItem, price: Number(e.target.value)})} />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-stone-400 ml-2">Description</label>
                    <textarea placeholder="Ingredients, origin, pairing..." rows={4} className="w-full px-6 py-4 bg-stone-50 border-none rounded-2xl outline-none text-sm font-medium resize-none focus:ring-2 focus:ring-gold transition-all" value={newItem.description} onChange={(e) => setNewItem({...newItem, description: e.target.value})}></textarea>
                  </div>
                  <div className="flex gap-4 pt-4">
                    <button onClick={handleAddMenuItem} className="flex-grow bg-stone-900 text-white py-5 rounded-2xl font-black text-xs tracking-widest hover:bg-gold transition-colors shadow-lg">CREATE ITEM</button>
                    <button onClick={() => setIsAddingItem(false)} className="px-6 bg-stone-100 text-stone-400 py-5 rounded-2xl hover:bg-stone-200 transition-all"><X size={24} /></button>
                  </div>
                </div>
              </div>
            )}
            {filteredMenu.map((item) => (
              <div key={item.id} className="bg-white rounded-[48px] shadow-sm border border-stone-100 overflow-hidden group hover:shadow-2xl transition-all duration-700">
                <div className="h-64 relative overflow-hidden">
                  <img src={item.image} alt={item.name} className="w-full h-full object-cover grayscale-[0.4] group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000" />
                  <div className="absolute top-6 right-6 flex gap-3 opacity-0 group-hover:opacity-100 transition-opacity translate-y-2 group-hover:translate-y-0 duration-500">
                    <button onClick={() => toggleFeatured(item.id)} className={`p-3 rounded-xl shadow-2xl backdrop-blur-md transition-all ${item.featured ? 'bg-gold text-white' : 'bg-white/80 text-stone-400 hover:text-gold'}`} title="Feature Item"><Check size={20} /></button>
                    <button onClick={() => deleteMenuItem(item.id)} className="p-3 bg-white/80 text-red-500 rounded-xl shadow-2xl backdrop-blur-md hover:bg-red-500 hover:text-white transition-all"><Trash2 size={20} /></button>
                  </div>
                  <div className="absolute bottom-6 left-6">
                     <span className="text-[10px] font-black uppercase tracking-[0.2em] bg-stone-900/80 backdrop-blur-md text-white px-5 py-2 rounded-full border border-white/10">{item.category}</span>
                  </div>
                </div>
                <div className="p-10">
                  <div className="flex justify-between items-start mb-6">
                    <h4 className="text-2xl font-bold serif italic text-stone-900">{item.name}</h4>
                    <span className="text-gold font-bold text-2xl">${item.price}</span>
                  </div>
                  <p className="text-sm text-stone-500 font-light leading-relaxed mb-8 line-clamp-3 italic">"{item.description}"</p>
                  <div className="flex items-center gap-4">
                    {item.featured && <span className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-gold"><Star size={14} className="fill-gold" /> Chef's Signature</span>}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'guide' && (
          <div className="max-w-4xl mx-auto space-y-12 pb-32">
            <div className="bg-white p-16 rounded-[60px] shadow-sm border border-stone-100">
              <h2 className="text-5xl font-bold serif italic mb-12 flex items-center gap-6 text-stone-900">
                <ShieldCheck className="text-gold" size={40} /> Handover Protocol
              </h2>
              <div className="space-y-16">
                <section className="space-y-6">
                  <h3 className="text-2xl font-bold serif italic text-gold border-b border-stone-50 pb-4">1. Security Management</h3>
                  <p className="text-stone-500 font-light leading-relaxed">
                    The Management Console is protected by a static Access Key (<span className="text-stone-900 font-bold">{ADMIN_ACCESS_KEY}</span>). Always log out when finished to clear the session.
                  </p>
                </section>

                <section className="space-y-6">
                  <h3 className="text-2xl font-bold serif italic text-gold border-b border-stone-50 pb-4">2. Reservations</h3>
                  <p className="text-stone-500 font-light leading-relaxed">
                    Check daily for new <span className="text-amber-600 font-medium italic">Pending</span> status bookings. Confirming a booking sends an automated (simulated) confirmation.
                  </p>
                  <div className="bg-stone-50 p-8 rounded-3xl border border-stone-100">
                    <h4 className="text-xs font-black uppercase tracking-widest text-stone-400 mb-4">Capacity Control</h4>
                    <p className="text-sm text-stone-600 font-light leading-relaxed">Current max capacity is set to 8 guests per online booking. Larger parties must be handled manually via phone.</p>
                  </div>
                </section>

                <section className="space-y-6">
                  <h3 className="text-2xl font-bold serif italic text-gold border-b border-stone-50 pb-4">3. Menu Architecture</h3>
                  <p className="text-stone-500 font-light leading-relaxed">Changes to the menu are instant and global. Use high-resolution image URLs for best results.</p>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-stone-900 text-white p-6 rounded-2xl">
                       <h5 className="text-[10px] font-black uppercase tracking-widest text-gold mb-2">Featured Items</h5>
                       <p className="text-xs text-stone-400 font-light">These appear on the Home page Hero section under "Signatures".</p>
                    </div>
                    <div className="bg-gold text-white p-6 rounded-2xl">
                       <h5 className="text-[10px] font-black uppercase tracking-widest text-stone-900 mb-2">Price Points</h5>
                       <p className="text-xs text-white/80 font-light">Ensure prices are consistent with current Mayfair market standards.</p>
                    </div>
                  </div>
                </section>
              </div>
            </div>

            <div className="bg-stone-900 text-white p-16 rounded-[60px] shadow-2xl flex flex-col md:flex-row justify-between items-center gap-12 border border-white/5">
              <div className="max-w-md text-center md:text-left space-y-4">
                <h3 className="text-4xl font-bold serif italic text-gold">Elite Support</h3>
                <p className="font-light text-stone-400 leading-relaxed text-lg">
                  For architectural changes or security audits, contact the development concierge.
                </p>
              </div>
              <a href="mailto:support@savora.com" className="bg-white text-stone-900 px-12 py-5 rounded-full font-black text-xs tracking-[0.3em] hover:bg-gold hover:text-white transition-all flex items-center gap-3">
                SECURE CHANNEL <Key size={18} />
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Admin;
