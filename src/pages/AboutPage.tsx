import { CheckCircle, Award, Users, Target, Heart, Shield } from 'lucide-react';

const AboutPage = () => {
  const values = [
    {
      icon: <Shield className="w-8 h-8 text-[#0032A0]" />,
      title: 'Güvenilirlik',
      description: 'Müşterilerimizin güvenini kazanmak ve korumak önceliğimizdir.'
    },
    {
      icon: <Heart className="w-8 h-8 text-[#0032A0]" />,
      title: 'Müşteri Odaklılık',
      description: 'Her müşterimizi özel görür, bireysel ihtiyaçlarına özel çözümler sunarız.'
    },
    {
      icon: <Target className="w-8 h-8 text-[#0032A0]" />,
      title: 'Profesyonellik',
      description: 'Sektördeki deneyimimizle en profesyonel hizmeti veriyoruz.'
    },
    {
      icon: <Award className="w-8 h-8 text-[#0032A0]" />,
      title: 'Kalite',
      description: 'Sunduğumuz her hizmette kalite standartlarımızı koruyoruz.'
    }
  ];

  const achievements = [
    { number: '15+', text: 'Yıllık Deneyim' },
    { number: '5000+', text: 'Mutlu Müşteri' },
    { number: '98%', text: 'Müşteri Memnuniyeti' },
    { number: '24/7', text: 'Destek Hizmeti' }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-[#0032A0] to-blue-700 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6">Hakkımızda</h1>
            <p className="text-xl max-w-3xl mx-auto leading-relaxed">
              Anadolu Sigorta'nın Ankara'daki güvenilir iş ortağı olarak, 
              müşterilerimizin güvenliği ve geleceği için çalışıyoruz.
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Hikayemiz
              </h2>
              <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                <p>
                  Gelecek Sigorta, 2009 yılında Murat Öztürk tarafından kurularak 
                  sigorta sektöründe güvenilir bir marka haline gelmiştir. 
                  Anadolu Sigorta'nın Ankara'daki yetkili acentesi olarak, 
                  müşterilerimize en kaliteli hizmeti sunmayı amaçlıyoruz.
                </p>
                <p>
                  15 yıllık deneyimimiz boyunca, binlerce müşterinin sigorta 
                  ihtiyaçlarını karşılayarak onların güvenli bir gelecek kurmasına 
                  yardımcı olduk. Müşteri memnuniyeti odaklı yaklaşımımızla, 
                  sektörde saygın bir konuma ulaştık.
                </p>
                <p>
                  Günümüzde, uzman kadromuz ve geniş hizmet yelpazemizle 
                  Ankara'nın en güvenilir sigorta acentelerinden biri olmaktan gurur duyuyoruz.
                </p>
              </div>
            </div>
            <div>
              <img
                src="/office_interior.png"
                alt="Ofisimiz"
                className="rounded-lg shadow-xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Murat Öztürk */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Şirket Sahibimiz
            </h2>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg p-8 max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <div className="w-32 h-32 bg-[#0032A0] rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-16 h-16 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">Murat Öztürk</h3>
              <p className="text-xl text-[#0032A0] font-medium">Kurucu & Genel Müdür</p>
            </div>
            
            <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
              <p>
                Murat Öztürk, 15 yılı aşkın sigorta sektörü deneyimine sahip,
                alanında uzman bir sigorta profesyonelidir. Sektöre olan tutkusuyla
                genç yaşta başladığı kariyerine büyük sigorta şirketlerinde çalışarak
                adım atmıştır.
              </p>
              <p>
                2009 yılında Gelecek Sigorta'yı kurarak, müşteri odaklı hizmet 
                anlayışını sigorta sektörüne taşımıştır. Güvenilirlik, şeffaflık 
                ve kaliteli hizmet prensipleriyle hareket eden Murat Bey, 
                şirketini Ankara'nın en saygın sigorta acentelerinden biri haline getirmiştir.
              </p>
              <p>
                Sürekli eğitim ve gelişim odaklı yaklaşımıyla, sektördeki 
                yenilikleri takip ederek müşterilerine en güncel ve avantajlı 
                sigorta çözümlerini sunmaya devam etmektedir.
              </p>
            </div>
            
            <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-[#0032A0]">15+</div>
                <div className="text-sm text-gray-600">Yıl Deneyim</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-[#0032A0]">5000+</div>
                <div className="text-sm text-gray-600">Müşteri</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-[#0032A0]">98%</div>
                <div className="text-sm text-gray-600">Memnuniyet</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-[#0032A0]">1</div>
                <div className="text-sm text-gray-600">Numaralı Hizmet</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Değerlerimiz
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              İş yapış şeklimizi belirleyen temel değerlerimiz.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="text-center bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6 shadow-md">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Anadolu Sigorta Partnership */}
      <section className="py-20 bg-[#0032A0] text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-6">
              Anadolu Sigorta İle Ortaklığımız
            </h2>
            <p className="text-xl max-w-4xl mx-auto leading-relaxed">
              Türkiye'nin en köklü sigorta şirketlerinden Anadolu Sigorta'nın 
              yetkili acentesi olarak, müşterilerimize güçlü bir kurumsal güvence sunuyoruz.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-white bg-opacity-10 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                <Shield className="w-10 h-10" />
              </div>
              <h3 className="text-xl font-bold mb-3">Güçlü Güvence</h3>
              <p>Anadolu Sigorta'nın 95 yıllık deneyimi ve güçlü mali yapısı</p>
            </div>
            <div className="text-center">
              <div className="bg-white bg-opacity-10 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                <Award className="w-10 h-10" />
              </div>
              <h3 className="text-xl font-bold mb-3">Sektör Lideri</h3>
              <p>Türkiye'nin en büyük sigorta şirketlerinden birinin gücü</p>
            </div>
            <div className="text-center">
              <div className="bg-white bg-opacity-10 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-10 h-10" />
              </div>
              <h3 className="text-xl font-bold mb-3">Kalite Garantisi</h3>
              <p>ISO standartlarında hizmet kalitesi ve müşteri memnuniyeti</p>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Başarılarımız
            </h2>
            <p className="text-xl text-gray-600">
              Rakamlarla Gelecek Sigorta
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="text-center bg-white rounded-xl p-8 shadow-lg"
              >
                <div className="text-4xl md:text-5xl font-bold text-[#0032A0] mb-3">
                  {achievement.number}
                </div>
                <div className="text-gray-600 font-medium">
                  {achievement.text}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
