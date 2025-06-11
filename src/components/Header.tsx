import React, { useState } from 'react';
import { Search, Menu, X, Heart } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    'About',
    'Our Work', 
    'Events',
    'News',
    'Resources',
    'Get Involved',
    'Contact'
  ];

  return (
    <header className="fixed top-0 w-full bg-white/100 backdrop-blur-md border-b border-gray-200 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/" className="flex items-center">
              <img
                src="https://saapri.org/content/wp-content/uploads/2017/12/SAAPRI-Logo1-1.png"
                alt="SAAPRI - South Asian American Policy Research Institute"
                className="h-12 w-auto"
              />
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {menuItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(' ', '-')}`}
                className="text-[#666666] hover:text-[#9b1b01] transition-all duration-300 font-semibold relative group py-2"
              >
                {item}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#9b1b01] group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
          </nav>

          {/* Search and Donate */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="p-3 text-[#666666] hover:text-[#9b1b01] transition-colors hover:bg-[#9b1b01]/10 rounded-full">
              <Search className="w-6 h-6" />
            </button>
            <button className="bg-[#9b1b01] text-white px-8 py-3 rounded-xl font-bold hover:bg-[#7a1501] transition-all duration-300 transform hover:scale-105 flex items-center space-x-2">
              <Heart className="w-5 h-5" />
              <span>Donate</span>
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-[#666666] hover:text-[#9b1b01] transition-colors"
            >
              {isMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-6 space-y-1 bg-white/95 backdrop-blur-md border-t border-gray-200 rounded-b-2xl shadow-xl">
              {menuItems.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase().replace(' ', '-')}`}
                  className="block px-4 py-3 text-[#666666] hover:text-[#9b1b01] hover:bg-[#9b1b01]/10 transition-all duration-300 font-semibold rounded-lg"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
              <div className="flex items-center space-x-4 px-4 py-3">
                <button className="p-3 text-[#666666] hover:text-[#9b1b01] transition-colors hover:bg-[#9b1b01]/10 rounded-full">
                  <Search className="w-6 h-6" />
                </button>
                <button className="bg-[#9b1b01] text-white px-8 py-3 rounded-xl font-bold hover:bg-[#7a1501] transition-all duration-300 flex items-center space-x-2">
                  <Heart className="w-5 h-5" />
                  <span>Donate</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;