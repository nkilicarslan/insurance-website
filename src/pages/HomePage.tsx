import { Link } from 'react-router-dom';
import { Shield, CheckCircle, Users, Award, Phone, ArrowRight } from 'lucide-react';

const HomePage = () => {
  const services = [
    {
      title: 'Araç Sigortaları',
      description: 'Aracınızı kaza, hırsızlık ve doğal afetlere karşı güvence altına alın.',
      icon: '🚗'
    },
    {
      title: 'Ev Sigortası',
      description: 'Evinizi ve eşyalarınızı kapsamlı koruma ile güvende tutun.',
      icon: '🏠'
    },
    {
      title: 'Sağlık Sigortası',
      description: 'Sağlığınız için en iyi tıbbi hizmetlere erişim sağlayın.',
      icon: '⚕️'
    },
    {
      title: 'Hayat Sigortası',
      description: 'Sevdiklerinizin geleceğini güvence altına alın.',
      icon: '👨‍👩‍👧‍👦'
    }
  ];

  const features = [
    {
      icon: <Shield className="w-12 h-12 text-[#0032A0]" />,
      title: 'Güvenilir Hizmet',
      description: 'Anadolu Sigorta güvencesiyle 15 yıllık deneyimimizle yanınızdayız.'
    },
    {
      icon: <CheckCircle className="w-12 h-12 text-[#0032A0]" />,
      title: 'Hızlı Çözüm',
      description: 'Hasar durumlarında en hızlı şekilde çözüm üretiyoruz.'
    },
    {
      icon: <Users className="w-12 h-12 text-[#0032A0]" />,
      title: 'Uzman Ekip',
      description: 'Deneyimli uzman kadromuzla size en uygun sigortayı sunuyoruz.'
    },
    {
      icon: <Award className="w-12 h-12 text-[#0032A0]" />,
      title: 'Kaliteli Hizmet',
      description: 'Müşteri memnuniyeti odaklı yaklaşımımızla kaliteli hizmet veriyoruz.'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section 
        className="relative h-screen bg-cover bg-center bg-no-repeat flex items-center"
        style={{
          backgroundImage: "linear-gradient(rgba(0, 50, 160, 0.7), rgba(0, 50, 160, 0.7)), url('/hero_image.png')"
        }}
      >
        <div className="max-w-7xl mx-auto px-4 text-white">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
              Geleceğinizi <br />
              <span className="text-yellow-300">Güvenle</span> İnşa Edin
            </h1>
            <p className="text-xl md:text-2xl mb-8 leading-relaxed">
              Anadolu Sigorta güvencesiyle, ailenizin ve varlıklarınızın güvenliği için 
              kapsamlı sigorta çözümleri sunuyoruz.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/iletisim"
                className="bg-yellow-400 text-blue-900 px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-300 transition-colors inline-flex items-center justify-center"
              >
                Hemen Teklif Al
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/hizmetlerimiz"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-blue-900 transition-colors inline-flex items-center justify-center"
              >
                Hizmetlerimizi Keşfet
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Sigorta Hizmetlerimiz
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Hayatınızın her alanında güvenlik sağlayan kapsamlı sigorta çözümlerimizi keşfedin.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300 border border-gray-100"
              >
                <div className="text-4xl mb-4 text-center">{service.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-center leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/hizmetlerimiz"
              className="bg-[#0032A0] text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-800 transition-colors inline-flex items-center"
            >
              Tüm Hizmetlerimizi Görün
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Neden Gelecek Sigorta?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Müşterilerimizin güvenini kazanmamızın ardındaki nedenler.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="text-center group"
              >
                <div className="bg-white rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="/office_interior.png"
                alt="Ofisimiz"
                className="rounded-lg shadow-xl w-full h-auto"
              />
            </div>
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                15 Yıllık Deneyim
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Anadolu Sigorta'nın Ankara'daki güvenilir acentesi olarak, 
                müşterilerimize en kaliteli hizmeti sunmak için çalışıyoruz. 
                Murat Öztürk önderliğindeki uzman ekibimizle, sigorta ihtiyaçlarınıza 
                en uygun çözümleri buluyoruz.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  <span>15 yıllık sektör deneyimi</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  <span>Anadolu Sigorta güvencesi</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  <span>Uzman danışmanlık hizmeti</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  <span>7/24 müşteri desteği</span>
                </li>
              </ul>
              <Link
                to="/hakkimizda"
                className="bg-[#0032A0] text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-800 transition-colors inline-flex items-center"
              >
                Hakkımızda Daha Fazla
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-[#0032A0] text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Sigorta İhtiyaçlarınız İçin Hemen İletişime Geçin
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Uzman ekibimizdan ücretsiz danışmanlık alın ve size en uygun sigorta planını keşfedin.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/iletisim"
              className="bg-yellow-400 text-blue-900 px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-300 transition-colors inline-flex items-center justify-center"
            >
              İletişim Formu
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <a
              href="tel:+903124420082"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-blue-900 transition-colors inline-flex items-center justify-center"
            >
              <Phone className="mr-2 w-5 h-5" />
              Hemen Ara
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
