import React, { useState, useEffect } from 'react';

const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#education-experience', label: 'Experience' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
];

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }
  }, [isMenuOpen]);

  return (
    <>
      <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled || isMenuOpen ? 'py-4 bg-black/50 backdrop-blur-lg border-b border-cyan-400/20' : 'py-6'}`}>
        <nav className="max-w-5xl mx-auto px-4 sm:px-6 flex justify-between items-center">
          <a href="#home" className="text-2xl font-bold text-white hover:text-cyan-400 transition-colors" onClick={() => setIsMenuOpen(false)}>
            <span className="text-cyan-400">&lt;</span>A.Shafi<span className="text-cyan-400">/&gt;</span>
          </a>
          
          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a 
                  href={link.href} 
                  className="text-gray-300 hover:text-cyan-400 transition-colors relative group"
                  aria-label={`Scroll to ${link.label} section`}
                >
                  {link.label}
                  <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-cyan-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center"></span>
                </a>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden z-50"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            <div className="w-6 h-6 flex flex-col justify-between items-center">
              <span className={`block w-full h-0.5 bg-white transition-transform duration-300 ${isMenuOpen ? 'rotate-45 translate-y-[5px]' : ''}`}></span>
              <span className={`block w-full h-0.5 bg-white transition-opacity duration-300 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
              <span className={`block w-full h-0.5 bg-white transition-transform duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-[5px]' : ''}`}></span>
            </div>
          </button>
        </nav>
      </header>

      {/* Mobile Menu Sidebar */}
      <div 
        className={`md:hidden fixed inset-0 z-40 transition-opacity duration-300 ease-in-out ${isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
      >
        {/* Backdrop */}
        <div 
          className="absolute inset-0 bg-black/60 backdrop-blur-md"
          onClick={() => setIsMenuOpen(false)}
          aria-hidden="true"
        ></div>

        {/* Sidebar Panel */}
        <div 
          className={`fixed top-0 right-0 h-full w-3/4 max-w-xs bg-gray-900/80 backdrop-blur-xl shadow-2xl border-l border-white/10 flex flex-col transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
        >
          <div className="p-8 pt-24">
            <ul className="flex flex-col items-start space-y-8">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a 
                    href={link.href} 
                    onClick={() => setIsMenuOpen(false)}
                    className="text-2xl text-gray-200 hover:text-cyan-400 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;