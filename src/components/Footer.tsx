import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-4">
              <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                <img
                  src="/gelecek_sigorta_logo.png"
                  alt="Gelecek Sigorta"
                  className="h-12 w-auto filter"
                />
              </a>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Anadolu Sigorta'nın Ankara'daki başarılı acentesi olarak, 
              müşterilerimize güvenilir ve kapsamlı sigorta çözümleri sunuyoruz.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.linkedin.com/in/murat-%C3%B6zt%C3%BCrk-62455a60/" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Hızlı Bağlantılar</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white transition-colors">
                  Ana Sayfa
                </Link>
              </li>
              <li>
                <Link to="/hakkimizda" className="text-gray-300 hover:text-white transition-colors">
                  Hakkımızda
                </Link>
              </li>
              <li>
                <Link to="/hizmetlerimiz" className="text-gray-300 hover:text-white transition-colors">
                  Hizmetlerimiz
                </Link>
              </li>
              <li>
                <Link to="/iletisim" className="text-gray-300 hover:text-white transition-colors">
                  İletişim
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Hizmetlerimiz</h3>
            <ul className="space-y-2">
              {[
                'Araç Sigortaları',
                'Ev Sigortası',
                'İşyeri Sigortası',
                'Sağlık Sigortası',
                'Hayat Sigortası',
                'Seyahat Sigortası',
              ].map((service) => {
                const slugify = (text: string) =>
                  text
                    .toLowerCase()
                    .replace(/&/g, 'and')
                    .replace(/[\s/]+/g, '-')
                    .replace(/[ğüşöçı]/g, (char) => ({ 'ğ': 'g', 'ü': 'u', 'ş': 's', 'ö': 'o', 'ç': 'c', 'ı': 'i' }[char] || ''))
                    .replace(/[^a-z0-9-]/g, '');

                return (
                  <li key={service}>
                    <Link
                      to={`/hizmetlerimiz#${slugify(service)}`}
                      className="text-gray-300 hover:text-white transition-colors"
                    >
                      {service}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">İletişim</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin size={20} className="text-[#0032A0] mt-0.5 flex-shrink-0" />
                <span className="text-gray-300 text-sm">
                  Güzeltepe Mah., Fuar Cad., No:9, Çankaya, Ankara, 
                  Fikret Eren Apartmanı, -3
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={20} className="text-[#0032A0]" />
                <span className="text-gray-300">+90 312 442 00 82</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={20} className="text-[#0032A0]" />
                <span className="text-gray-300">murat@geleceksigorta.com.tr</span>
              </div>
              <div className="flex items-start space-x-3">
                <Clock size={20} className="text-[#0032A0] mt-0.5" />
                <div className="text-gray-300 text-sm">
                  <div>Pazartesi-Cuma: 08:30-18:00</div>
                  <div>Cumartesi: 08:30-14:00</div>
                  <div>Pazar: Kapalı</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 Gelecek Sigorta. Tüm hakları saklıdır.
            </p>
            <p className="text-gray-400 text-sm mt-2 md:mt-0">
              Anadolu Sigorta A.Ş. Yetkili Acentesi
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
