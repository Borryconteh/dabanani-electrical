import { Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About Us', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Our Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="bg-deep-navy text-white pt-16 pb-8 border-t border-dabanani-yellow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <img
                src="/images/Picture1.png"
                alt="Dabanani Electrical"
                className="h-10 w-auto"
              />
              <span className="font-display font-bold text-xl tracking-tight leading-tight flex flex-col">
                <span className="text-dabanani-red uppercase">Dabanani</span>
                <span className="text-dabanani-green uppercase">Electrical Co. Ltd</span>
              </span>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed text-sm">
              Powering The Gambia's future through reliable electrical engineering, consultancy, and contracting services since 2001.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-bold text-white text-lg mb-6 border-b border-white/10 pb-2">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-dabanani-yellow transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display font-bold text-white text-lg mb-6 border-b border-white/10 pb-2">Our Services</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li>Electrical System Design</li>
              <li>Power Distribution</li>
              <li>Project Management</li>
              <li>Metering Solutions</li>
              <li>Renewable Energy</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-bold text-white text-lg mb-6 border-b border-white/10 pb-2">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-gray-400 text-sm">
                <MapPin className="w-5 h-5 text-dabanani-yellow shrink-0" aria-hidden="true" />
                <span>Mamadi Manjang Highway, Kanifing,<br/>P.O. Box 2390, Serrekunda</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400 text-sm">
                <Phone className="w-5 h-5 text-dabanani-yellow shrink-0" aria-hidden="true" />
                <span>+220 4377304 / 2290222</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400 text-sm">
                <Mail className="w-5 h-5 text-dabanani-yellow shrink-0" aria-hidden="true" />
                <a href="mailto:aefconteh@gmail.com" className="hover:text-white transition-colors">aefconteh@gmail.com</a>
              </li>
            </ul>
          </div>

        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © {currentYear} Dabanani Electrical Company Ltd. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-gray-500">
            <span className="hover:text-white transition-colors cursor-pointer">Privacy Policy</span>
            <span className="hover:text-white transition-colors cursor-pointer">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
