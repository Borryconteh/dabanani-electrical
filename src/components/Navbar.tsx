import { useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Projects', href: '#projects' },
    { name: 'Team', href: '#team' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="fixed w-full z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">

          {/* Logo */}
          <div className="flex items-center gap-3">
            <img
              src="/images/Picture1.png"
              alt="Dabanani Electrical Company Ltd"
              className="h-9 w-auto"
            />
            <div className="leading-tight hidden sm:block">
              <div className="font-display font-bold text-xl tracking-tight text-dabanani-red">DABANANI</div>
              <div className="text-xs text-dabanani-green font-medium -mt-1">ELECTRICAL CO. LTD</div>
            </div>
            {/* Short name on very small phones */}
            <div className="sm:hidden font-display font-bold text-lg tracking-tight text-dabanani-red">D.E.C.L</div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-8 text-sm font-medium">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-700 hover:text-dabanani-red transition-colors"
              >
                {link.name}
              </a>
            ))}

            <a
              href="tel:+2205302032"
              className="flex items-center gap-2 bg-dabanani-green text-white px-6 py-3 rounded-2xl hover:bg-dabanani-green/90 transition-all font-medium"
            >
              <Phone className="h-4 w-4" aria-hidden="true" />
              Call Us
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-gray-700 hover:text-dabanani-red"
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
          >
            {isOpen ? <X size={28} aria-hidden="true" /> : <Menu size={28} aria-hidden="true" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div id="mobile-menu" className="mobile-menu lg:hidden bg-white border-t shadow-lg">
          <div className="px-4 py-6 space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block py-3 text-lg font-medium text-gray-700 hover:text-dabanani-red"
              >
                {link.name}
              </a>
            ))}

            <a
              href="tel:+2204377304"
              onClick={() => setIsOpen(false)}
              className="block w-full text-center bg-dabanani-green text-white py-4 rounded-xl font-semibold mt-4"
            >
              Call +220 437 7304
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
