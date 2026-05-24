import { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Link, useLocation } from 'react-router-dom';
import logoImage from '../assets/images/regenerated_image_1779547172789.jpg';

const navItems = [
  { name: 'Home', href: '/' },
  { 
    name: 'About', 
    href: '/about',
    submenu: [
      { name: 'Mission & Vision', href: '/about/mission' },
      { name: 'Message', href: '/about/message' },
      { name: 'Committee', href: '/committee' },
      { name: 'Members', href: '/members' },
    ]
  },
  { name: 'Events', href: '/news-events' },
  { 
    name: 'Gallery', 
    href: '/gallery',
    submenu: [
      { name: 'Photo', href: '/gallery/photo' },
      { name: 'Video', href: '/gallery/video' },
      { name: 'Honors', href: '/gallery/honors' },
      { name: 'Publication', href: '/gallery/publication' },
    ]
  },
  { 
    name: 'Get Involved', 
    href: '/get-involved',
    submenu: [
      { name: 'Volunteers', href: '/get-involved/volunteers' },
      { name: 'Membership', href: '/get-involved/membership' },
      { name: 'Scholarship', href: '/get-involved/scholarship' },

    ]
  },
  { name: 'News', href: '/news' },
  { name: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white shadow-md py-3 border-b-2 border-saffron-500'
          : 'bg-white py-5 shadow-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center w-full">
          {/* Left: Logo */}
          <div className="flex flex-1 justify-start">
            <Link to="/" className="flex items-center gap-3 shrink-0">
              <img src={logoImage} alt="GBSPF Logo" className="h-[58px] w-auto object-contain rounded" />
              <div className="flex flex-col">
                <span className="font-serif text-[15px] font-bold leading-tight text-maroon-900 w-[150px]">
                  Gulshan-Banani Sarbajanin Puja<br className="hidden md:block" />Foundation
                </span>
              </div>
            </Link>
          </div>

          {/* Center: Desktop Nav */}
          <nav className="hidden lg:flex flex-none items-center gap-4 xl:gap-6 justify-center">
            {navItems.map((item) => {
              const isActive = item.href === '/news-events'
                ? location.pathname === '/news-events'
                : item.href === '/news'
                  ? location.pathname === '/news'
                  : location.pathname === item.href || (item.href !== '/' && location.pathname.startsWith(item.href));
              return (
                <div key={item.name} className="relative group">
                  <div className="flex items-center gap-1 cursor-pointer py-4 relative">
                    <Link
                      to={item.href}
                      className={`text-[10px] xl:text-xs font-bold uppercase tracking-widest transition-colors hover:text-saffron-600 ${isActive ? 'text-saffron-600' : 'text-maroon-800'}`}
                    >
                      {item.name}
                    </Link>
                    {item.submenu && (
                      <ChevronDown size={14} className={`transition-colors group-hover:text-saffron-600 ${isActive ? 'text-saffron-600' : 'text-maroon-800'}`} />
                    )}
                  </div>
                  
                  {item.submenu && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 w-48 bg-white shadow-xl rounded-md border border-saffron-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 overflow-hidden transform origin-top translate-y-2 group-hover:translate-y-0 text-center">
                    <div className="py-2">
                      {item.submenu.map((sub) => (
                        <Link
                          key={sub.name}
                          to={sub.href}
                          className="block px-4 py-2 text-xs font-bold uppercase tracking-widest text-maroon-800 hover:bg-saffron-50 hover:text-saffron-600 transition-colors"
                        >
                          {sub.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
          </nav>

          {/* Right: Actions */}
          <div className="flex flex-1 justify-end items-center gap-2">
            <button className="text-xs font-bold uppercase tracking-widest transition-colors text-maroon-800 textbackground-black-800 hover:text-saffron-600">
              En
            </button>

<button className="text-xs font-bold uppercase tracking-widest transition-colors text-gray-300 hover:text-saffron-600">
              | বাং
            </button>

            <Link
              to="/donate"
              className="hidden lg:block px-5 py-2 rounded-full bg-[#e68522] text-white text-xs font-bold uppercase tracking-widest shadow-md hover:bg-maroon-800 transition-colors shrink-0"
            >
              Support Us
            </Link>
            {/* Mobile Menu Toggle */}
            <button
              className="lg:hidden p-2 rounded-md text-maroon-900"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-saffron-50 border-t border-saffron-200 mt-2 overflow-hidden shadow-lg"
          >
            <div className="flex flex-col px-4 py-6 space-y-4 max-h-[75vh] overflow-y-auto">
              {navItems.map((item) => (
                <div key={item.name} className="border-b border-saffron-200/50 pb-2">
                  <div className="flex justify-between items-center">
                    <Link
                      to={item.href}
                      className={`font-bold uppercase tracking-widest text-sm hover:text-saffron-600 block py-2 ${(location.pathname === item.href || (item.href !== '/' && location.pathname.startsWith(item.href))) ? 'text-saffron-600' : 'text-maroon-900'}`}
                      onClick={() => !item.submenu && setIsMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                    {item.submenu && (
                      <button 
                        onClick={() => setActiveSubmenu(activeSubmenu === item.name ? null : item.name)}
                        className="p-2 text-maroon-900"
                      >
                        <ChevronDown size={20} className={`transform transition-transform ${activeSubmenu === item.name ? 'rotate-180' : ''}`} />
                      </button>
                    )}
                  </div>
                  
                  {item.submenu && (
                    <AnimatePresence>
                      {activeSubmenu === item.name && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="overflow-hidden"
                        >
                          <div className="pl-4 py-2 flex flex-col space-y-3">
                            {item.submenu.map((sub) => (
                              <Link
                                key={sub.name}
                                to={sub.href}
                                className="text-gray-600 font-medium text-sm hover:text-saffron-600 block"
                                onClick={() => setIsMobileMenuOpen(false)}
                              >
                                {sub.name}
                              </Link>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  )}
                </div>
              ))}
              <Link
                to="/donate"
                className="w-full text-center mt-4 px-4 py-3 rounded-md bg-saffron-600 hover:bg-saffron-700 text-white font-bold tracking-widest uppercase transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Support Us
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
