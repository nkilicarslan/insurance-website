import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Mail } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Ana Sayfa', href: '/' },
    { name: 'Hakkımızda', href: '/hakkimizda' },
    { name: 'Hizmetlerimiz', href: '/hizmetlerimiz' },
    { name: 'İletişim', href: '/iletisim' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      {/* Top Bar */}
      <div className="bg-[#0032A0] text-white py-2 px-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-sm">
          <div className="flex items-center space-x-6">
            <a href="tel:+903124420082" className="flex items-center space-x-2 hover:text-blue-200 transition-colors">
              <Phone size={16} />
              <span>+90 312 442 00 82</span>
            </a>
            <a href="mailto:murat@geleceksigorta.com.tr" className="flex items-center space-x-2 hover:text-blue-200 transition-colors">
              <Mail size={16} />
              <span>murat@geleceksigorta.com.tr</span>
            </a>
          </div>
          <div className="hidden md:block">
            <span>Pazartesi-Cuma: 08:30-18:00 | Cumartesi: 08:30-14:00</span>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav id="main-navbar" className="bg-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center">
              <Link to="/" className="flex items-center">
                <img
                  src="/gelecek_sigorta_logo.png"
                  alt="Gelecek Sigorta"
                  className="h-12 w-auto"
                />
              </Link>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                      isActive(item.href)
                        ? 'text-[#0032A0] border-b-2 border-[#0032A0]'
                        : 'text-gray-700 hover:text-[#0032A0]'
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* CTA Button */}
            <div className="hidden md:block">
              <Link
                to="/iletisim"
                className="bg-[#0032A0] text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-800 transition-colors duration-200"
              >
                Teklif Al
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-gray-700 hover:text-[#0032A0] p-2"
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`block px-3 py-2 text-base font-medium ${
                    isActive(item.href)
                      ? 'text-[#0032A0] bg-blue-50'
                      : 'text-gray-700 hover:text-[#0032A0] hover:bg-gray-50'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                to="/iletisim"
                className="block px-3 py-2 text-base font-medium bg-[#0032A0] text-white rounded-lg mt-4 text-center"
                onClick={() => setIsOpen(false)}
              >
                Teklif Al
              </Link>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
