'use client';

import { MenuIcon, XIcon } from 'lucide-react';
import { useState } from 'react';

interface HeaderProps {
  onCTAClick?: () => void;
}

const Header: React.FC<HeaderProps> = ({ onCTAClick }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleCTAClick = () => {
    if (onCTAClick) {
      onCTAClick();
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/" className="flex items-center">
              <div className="text-2xl font-bold text-primary-600">
                UltimateQA
              </div>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <div className="relative group">
              <button className="text-gray-700 hover:text-primary-600 px-3 py-2 text-sm font-medium transition-colors">
                Services
              </button>
              <div className="absolute top-full left-0 mt-1 w-64 bg-white rounded-lg shadow-lg border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="p-2">
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-primary-50 hover:text-primary-600 rounded-md">
                    AI Development
                  </a>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-primary-50 hover:text-primary-600 rounded-md">
                    Web Development
                  </a>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-primary-50 hover:text-primary-600 rounded-md">
                    Automated Testing
                  </a>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-primary-50 hover:text-primary-600 rounded-md">
                    Software Consulting
                  </a>
                </div>
              </div>
            </div>
            
            <a href="#" className="text-gray-700 hover:text-primary-600 px-3 py-2 text-sm font-medium transition-colors">
              About
            </a>
            
            <a href="#" className="text-gray-700 hover:text-primary-600 px-3 py-2 text-sm font-medium transition-colors">
              Blog
            </a>
            
            <a href="#" className="text-gray-700 hover:text-primary-600 px-3 py-2 text-sm font-medium transition-colors">
              Newsletter
            </a>
            
            <div className="relative group">
              <button className="text-gray-700 hover:text-primary-600 px-3 py-2 text-sm font-medium transition-colors">
                Education
              </button>
              <div className="absolute top-full left-0 mt-1 w-56 bg-white rounded-lg shadow-lg border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="p-2">
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-primary-50 hover:text-primary-600 rounded-md">
                    Free Courses
                  </a>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-primary-50 hover:text-primary-600 rounded-md">
                    Selenium Java
                  </a>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-primary-50 hover:text-primary-600 rounded-md">
                    Selenium C#
                  </a>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-primary-50 hover:text-primary-600 rounded-md">
                    Selenium Resources
                  </a>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-primary-50 hover:text-primary-600 rounded-md">
                    Automation Exercises
                  </a>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-primary-50 hover:text-primary-600 rounded-md">
                    Java SDET Academy
                  </a>
                </div>
              </div>
            </div>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center">
            <button
              onClick={handleCTAClick}
              className="bg-primary-600 text-white px-6 py-2 rounded-lg text-sm font-semibold hover:bg-primary-700 transition-colors shadow-md hover:shadow-lg"
            >
              Get Free Discovery Session
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-primary-600 p-2"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <XIcon className="h-6 w-6" />
              ) : (
                <MenuIcon className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-4 py-6 space-y-4">
            <div>
              <div className="text-sm font-semibold text-gray-900 mb-2">Services</div>
              <div className="pl-4 space-y-2">
                <a href="#" className="block text-sm text-gray-600 hover:text-primary-600">AI Development</a>
                <a href="#" className="block text-sm text-gray-600 hover:text-primary-600">Web Development</a>
                <a href="#" className="block text-sm text-gray-600 hover:text-primary-600">Automated Testing</a>
                <a href="#" className="block text-sm text-gray-600 hover:text-primary-600">Software Consulting</a>
              </div>
            </div>
            
            <a href="#" className="block text-sm text-gray-700 hover:text-primary-600">About</a>
            <a href="#" className="block text-sm text-gray-700 hover:text-primary-600">Blog</a>
            <a href="#" className="block text-sm text-gray-700 hover:text-primary-600">Newsletter</a>
            
            <div>
              <div className="text-sm font-semibold text-gray-900 mb-2">Education</div>
              <div className="pl-4 space-y-2">
                <a href="#" className="block text-sm text-gray-600 hover:text-primary-600">Free Courses</a>
                <a href="#" className="block text-sm text-gray-600 hover:text-primary-600">Selenium Java</a>
                <a href="#" className="block text-sm text-gray-600 hover:text-primary-600">Selenium C#</a>
                <a href="#" className="block text-sm text-gray-600 hover:text-primary-600">Selenium Resources</a>
                <a href="#" className="block text-sm text-gray-600 hover:text-primary-600">Automation Exercises</a>
                <a href="#" className="block text-sm text-gray-600 hover:text-primary-600">Java SDET Academy</a>
              </div>
            </div>
            
            <button
              onClick={handleCTAClick}
              className="w-full bg-primary-600 text-white px-6 py-3 rounded-lg text-sm font-semibold hover:bg-primary-700 transition-colors mt-4"
            >
              Get Free Discovery Session
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header; 