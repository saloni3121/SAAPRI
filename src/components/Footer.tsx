import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin, Heart } from 'lucide-react';

const Footer = () => {
  const footerLinks = {
    About: [
      { name: 'Our Mission', href: '#' },
      { name: 'Leadership Team', href: '#' },
      { name: 'Board of Directors', href: '#' },
      { name: 'Annual Reports', href: '#' },
      { name: 'Careers', href: '#' }
    ],
    'Our Work': [
      { name: 'Access to Justice', href: '#' },
      { name: 'Civic Action', href: '#' },
      { name: 'Health Equity', href: '#' },
      { name: 'Education Access', href: '#' },
      { name: 'Economic Justice', href: '#' }
    ],
    Resources: [
      { name: 'Policy Reports', href: '#' },
      { name: 'Community Toolkit', href: '#' },
      { name: 'Media Kit', href: '#' },
      { name: 'Research Library', href: '#' },
      { name: 'FAQs', href: '#' }
    ],
    'Get Involved': [
      { name: 'Volunteer', href: '#' },
      { name: 'Donate', href: '#' },
      { name: 'Events', href: '#' },
      { name: 'Newsletter', href: '#' },
      { name: 'Partner with Us', href: '#' }
    ]
  };

  return (
    <footer className="bg-[#222222] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Brand & Contact */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-[#9b1b01] rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">S</span>
              </div>
              <span className="text-2xl font-bold">SAAPRI</span>
            </div>
            
            <p className="text-gray-300 mb-6 leading-relaxed">
              South Asian American Policy Research Institute - Advancing equity and justice 
              through research, advocacy, and community engagement.
            </p>
            
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-[#9b1b01]" />
                <span className="text-gray-300">123 Policy Ave, Washington, DC 20001</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-[#9b1b01]" />
                <span className="text-gray-300">(202) 555-SAAPRI</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-[#9b1b01]" />
                <span className="text-gray-300">info@saapri.org</span>
              </div>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-lg font-semibold mb-4 text-[#9b1b01]">{category}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-gray-300 hover:text-white transition-colors duration-200"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Social Media & Newsletter */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
            <div className="flex items-center space-x-6">
              <span className="text-gray-300">Follow us:</span>
              <div className="flex space-x-4">
                {[
                  { icon: Facebook, href: '#', label: 'Facebook' },
                  { icon: Twitter, href: '#', label: 'Twitter' },
                  { icon: Instagram, href: '#', label: 'Instagram' },
                  { icon: Linkedin, href: '#', label: 'LinkedIn' }
                ].map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-[#9b1b01] transition-colors duration-200"
                    aria-label={label}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <button className="bg-[#9b1b01] text-white px-6 py-2 rounded-lg font-medium hover:bg-[#7a1501] transition-colors duration-200 flex items-center space-x-2">
                <Heart className="w-4 h-4" />
                <span>Donate Now</span>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6 text-sm text-gray-400">
              <span>© 2024 South Asian American Policy Research Institute. All rights reserved.</span>
            </div>
            
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors">Accessibility</a>
            </div>
          </div>
          
          <div className="text-center mt-6 text-sm text-gray-400">
            <p>SAAPRI is a 501(c)(3) nonprofit organization. Tax ID: 12-3456789</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;