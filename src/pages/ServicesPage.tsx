import { Link } from 'react-router-dom';
import { Car, Home, Heart, Users, Briefcase, Plane, Shield, CheckCircle, ArrowRight, Phone } from 'lucide-react';

const ServicesPage = () => {
  const services = [
    {
      icon: <Car className="w-12 h-12 text-[#0032A0]" />,
      title: 'Araç Sigortaları',
      subtitle: 'Kasko & Trafik Sigortası',
      description: 'Aracınızı her türlü riske karşı koruyun. Kapsamlı kasko ve zorunlu trafik sigortası seçenekleri.',
      features: [
        'Kasko Sigortası (Tam & Kısmi)',
        'Zorunlu Trafik Sigortası',
        'İMM (İhtiyari Mali Mesuliyet)',
        'Ferdi Kaza Sigortası',
        'Araç İçi Eşya Sigortası',
        '7/24 Yol Yardım Hizmeti'
      ],
      benefits: [
        'Hızlı hasar ödemesi',
        'Anlaşmalı servis ağı',
        'Ücretsiz ekspertiz hizmeti',
        'Online hasar takibi'
      ]
    },
    {
      icon: <Home className="w-12 h-12 text-[#0032A0]" />,
      title: 'Ev Sigortası',
      subtitle: 'Konut & Eşya Güvencesi',
      description: 'Evinizi ve değerli eşyalarınızı yangın, hırsızlık, doğal afetler ve daha fazlasına karşı koruyun.',
      features: [
        'Yangın ve Doğal Afet Teminatı',
        'Hırsızlık Güvencesi',
        'Cam Kırılması Teminatı',
        'Su Basması Koruması',
        'Elektrikli Cihaz Sigortası',
        'Kişisel Sorumluluk Teminatı'
      ],
      benefits: [
        'Eşya değerleme hizmeti',
        'Acil onarım desteği',
        'Geçici konaklama yardımı',
        'Kapsamlı teminat seçenekleri'
      ]
    },
    {
      icon: <Heart className="w-12 h-12 text-[#0032A0]" />,
      title: 'Sağlık Sigortası',
      subtitle: 'Tamamlayıcı & Özel Sağlık',
      description: 'Sağlığınız için en iyi tıbbi hizmetlere erişim. Özel hastane ve doktor seçenekleri.',
      features: [
        'Tamamlayıcı Sağlık Sigortası',
        'Özel Sağlık Sigortası',
        'Diş Tedavi Teminatı',
        'Check-up Paketi',
        'Yurtdışı Tedavi Desteği',
        'Online Randevu Sistemi'
      ],
      benefits: [
        'Geniş hastane ağı',
        'Hızlı ödeme sistemi',
        'Sağlık danışmanlığı',
        'Acil müdahale hizmeti'
      ]
    },
    {
      icon: <Users className="w-12 h-12 text-[#0032A0]" />,
      title: 'Hayat Sigortası',
      subtitle: 'Bireysel & Grup Hayat',
      description: 'Sevdiklerinizin geleceğini güvence altına alın. Vefat ve maluliyet durumlarında mali koruma.',
      features: [
        'Bireysel Hayat Sigortası',
        'Grup Hayat Sigortası',
        'Eğitim Sigortası',
        'Emeklilik Planı',
        'Maluliyet Teminatı',
        'Kritik Hastalık Sigortası'
      ],
      benefits: [
        'Esnek prim ödeme seçenekleri',
        'Kar payı imkanı',
        'Vergi avantajları',
        'Hızlı ödeme garantisi'
      ]
    },
    {
      icon: <Briefcase className="w-12 h-12 text-[#0032A0]" />,
      title: 'İşyeri Sigortası',
      subtitle: 'Ticari & Endüstriyel',
      description: 'İşyerinizi ve ticari faaliyetlerinizi koruyun. Kapsamlı işletme güvencesi.',
      features: [
        'İşyeri Yangın Sigortası',
        'Makine Kırılması Sigortası',
        'İşveren Mali Sorumluluk',
        'Cam Sigortası',
        'Hırsızlık Güvencesi',
        'İş Durması Sigortası'
      ],
      benefits: [
        'Sektörel uzmanlık',
        'Risk değerlendirmesi',
        'Hızlı hasar çözümü',
        'İşletme danışmanlığı'
      ]
    },
    {
      icon: <Plane className="w-12 h-12 text-[#0032A0]" />,
      title: 'Seyahat Sigortası',
      subtitle: 'Yurtdışı & Yurtiçi',
      description: 'Seyahatlerinizde güvende olun. Sağlık, bagaj ve iptal garantisi ile rahat yolculuk.',
      features: [
        'Sağlık Masrafları Teminatı',
        'Bagaj Güvencesi',
        'Seyahat İptal Sigortası',
        'Gecikme Tazminatı',
        'Kişisel Kaza Sigortası',
        '7/24 Acil Yardım'
      ],
      benefits: [
        'Dünya çapında geçerli',
        'Hızlı ödeme',
        'Çoklu dil desteği',
        'Acil tahliye hizmeti'
      ]
    }
  ];

  const slugify = (text: string) =>
    text
      .toLowerCase()
      .replace(/&/g, 'and')
      .replace(/[\s/]+/g, '-')
      .replace(/[ğüşöçı]/g, (char) => ({ 'ğ': 'g', 'ü': 'u', 'ş': 's', 'ö': 'o', 'ç': 'c', 'ı': 'i' }[char] || ''))
      .replace(/[^a-z0-9-]/g, '');

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-[#0032A0] to-blue-700 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6">Hizmetlerimiz</h1>
            <p className="text-xl max-w-3xl mx-auto leading-relaxed">
              Hayatınızın her alanında güvenlik sağlayan kapsamlı sigorta çözümlerimizi keşfedin.
            </p>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <img
              src="/insurance_services.png"
              alt="Sigorta Hizmetleri"
              className="mx-auto mb-8 max-w-2xl w-full h-auto"
            />
            <p className="text-lg text-gray-600 max-w-4xl mx-auto">
              Anadolu Sigorta'nın güvencesiyle, her türlü sigorta ihtiyacınız için 
              uzman kadromuzla en uygun çözümleri sunuyoruz.
            </p>
          </div>
        </div>
      </section>

      {/* Detailed Services */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="space-y-20">
            {services.map((service, index) => (
              <div key={index} id={slugify(service.title)} className="bg-white rounded-2xl shadow-xl overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  {/* Content */}
                  <div className="p-8 lg:p-12">
                    <div className="flex items-center mb-6">
                      <div className="bg-blue-50 rounded-full p-4 mr-4">
                        {service.icon}
                      </div>
                      <div>
                        <h3 className="text-3xl font-bold text-gray-900">
                          {service.title}
                        </h3>
                        <p className="text-[#0032A0] font-medium">
                          {service.subtitle}
                        </p>
                      </div>
                    </div>
                    
                    <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                      {service.description}
                    </p>

                    <div className="mb-8">
                      <h4 className="text-xl font-bold text-gray-900 mb-4">
                        Teminat Kapsamı:
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {service.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center">
                            <Shield className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                            <span className="text-gray-700 text-sm">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="border-t pt-6">
                      <Link
                        to="/iletisim"
                        className="bg-[#0032A0] text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-800 transition-colors inline-flex items-center"
                      >
                        Teklif Al
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </Link>
                    </div>
                  </div>

                  {/* Benefits */}
                  <div className="bg-gray-50 p-8 lg:p-12">
                    <h4 className="text-xl font-bold text-gray-900 mb-6">
                      Avantajlarımız:
                    </h4>
                    <div className="space-y-4">
                      {service.benefits.map((benefit, benefitIndex) => (
                        <div key={benefitIndex} className="flex items-center">
                          <CheckCircle className="w-5 h-5 text-[#0032A0] mr-3 flex-shrink-0" />
                          <span className="text-gray-700">{benefit}</span>
                        </div>
                      ))}
                    </div>

                    <div className="mt-8 p-6 bg-white rounded-lg border border-[#0032A0] border-opacity-20">
                      <h5 className="font-bold text-gray-900 mb-2">
                        Özel Avantaj
                      </h5>
                      <p className="text-gray-600 text-sm mb-4">
                        Gelecek Sigorta müşterilerine özel indirimli primler ve 
                        ek teminat seçenekleri.
                      </p>
                      <div className="text-[#0032A0] font-bold text-lg">
                        %20'ye kadar indirim!
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us for Insurance */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Neden Gelecek Sigorta?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Sigorta seçiminde doğru kararı vermek için bizimle çalışmanızın avantajları.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center bg-gray-50 rounded-xl p-8">
              <div className="bg-[#0032A0] rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Anadolu Sigorta Güvencesi
              </h3>
              <p className="text-gray-600">
                95 yıllık deneyimi olan Türkiye'nin en güvenilir sigorta şirketinin gücü.
              </p>
            </div>

            <div className="text-center bg-gray-50 rounded-xl p-8">
              <div className="bg-[#0032A0] rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Uzman Danışmanlık
              </h3>
              <p className="text-gray-600">
                15 yıllık deneyimli ekibimizle size en uygun sigortayı buluyoruz.
              </p>
            </div>

            <div className="text-center bg-gray-50 rounded-xl p-8">
              <div className="bg-[#0032A0] rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Hızlı Hizmet
              </h3>
              <p className="text-gray-600">
                Poliçe düzenleme ve hasar takiplerinde hızlı ve güvenilir hizmet.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#0032A0] text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Size En Uygun Sigortayı Bulalım
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Uzman ekibimizden ücretsiz danışmanlık alın ve sigorta ihtiyaçlarınız için 
            en avantajlı teklifleri karşılaştırın.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/iletisim"
              className="bg-yellow-400 text-blue-900 px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-300 transition-colors inline-flex items-center justify-center"
            >
              Ücretsiz Teklif Al
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

export default ServicesPage;
