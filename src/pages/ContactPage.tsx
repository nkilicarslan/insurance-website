import { useState } from 'react';
import { GoogleMap, LoadScript, Marker, InfoWindow } from '@react-google-maps/api';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from 'lucide-react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [formStatus, setFormStatus] = useState('');
  const [showInfoWindow, setShowInfoWindow] = useState(false);

  const mapCenter = {
    lat: 39.9208, // Çankaya, Ankara koordinatları
    lng: 32.8597
  };

  const mapStyles = {
    width: '100%',
    height: '400px'
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('sending');
    
    // Form submission simulation
    setTimeout(() => {
      setFormStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
      
      setTimeout(() => {
        setFormStatus('');
      }, 5000);
    }, 1500);
  };

  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6 text-[#0032A0]" />,
      title: 'Telefon',
      content: '+90 312 442 00 82',
      link: 'tel:+903124420082'
    },
    {
      icon: <Mail className="w-6 h-6 text-[#0032A0]" />,
      title: 'E-posta',
      content: 'murat@geleceksigorta.com',
      link: 'mailto:murat@geleceksigorta.com'
    },
    {
      icon: <MapPin className="w-6 h-6 text-[#0032A0]" />,
      title: 'Adres',
      content: 'Güzeltepe Mah., Fuar Cad., No:9, Çankaya, Ankara, Fikret Eren Apartmanı, -3',
      link: 'https://maps.google.com/?q=Güzeltepe+Mah.+Fuar+Cad.+No:9+Çankaya+Ankara'
    },
    {
      icon: <Clock className="w-6 h-6 text-[#0032A0]" />,
      title: 'Çalışma Saatleri',
      content: 'Pazartesi-Cuma: 08:30-18:00\nCumartesi: 08:30-14:00\nPazar: Kapalı',
      link: null
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-[#0032A0] to-blue-700 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6">İletişim</h1>
            <p className="text-xl max-w-3xl mx-auto leading-relaxed">
              Sigorta danışmanlığı ve teklif için bizimle iletişime geçin. 
              Uzman ekibimiz size yardımcı olmaktan mutluluk duyar.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-xl p-8 text-center hover:shadow-lg transition-shadow duration-300"
              >
                <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6 shadow-md">
                  {info.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {info.title}
                </h3>
                {info.link ? (
                  <a
                    href={info.link}
                    className="text-gray-600 hover:text-[#0032A0] transition-colors"
                    target={info.link.startsWith('http') ? '_blank' : undefined}
                    rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                  >
                    {info.content}
                  </a>
                ) : (
                  <p className="text-gray-600 whitespace-pre-line">
                    {info.content}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                İletişim Formu
              </h2>
              <p className="text-gray-600 mb-8">
                Aşağıdaki formu doldurarak bize ulaşabilirsiniz. 
                En kısa sürede size geri dönüş yapacağız.
              </p>

              {formStatus === 'success' && (
                <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6 flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  <span className="text-green-700">
                    Mesajınız başarıyla gönderildi! En kısa sürede size dönüş yapacağız.
                  </span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Ad Soyad *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0032A0] focus:border-transparent"
                      placeholder="Adınız ve soyadınız"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Telefon *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0032A0] focus:border-transparent"
                      placeholder="0555 123 45 67"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    E-posta *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0032A0] focus:border-transparent"
                    placeholder="ornek@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Konu *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0032A0] focus:border-transparent"
                  >
                    <option value="">Konu seçiniz</option>
                    <option value="arac-sigortasi">Araç Sigortası</option>
                    <option value="ev-sigortasi">Ev Sigortası</option>
                    <option value="saglik-sigortasi">Sağlık Sigortası</option>
                    <option value="hayat-sigortasi">Hayat Sigortası</option>
                    <option value="isyeri-sigortasi">İşyeri Sigortası</option>
                    <option value="seyahat-sigortasi">Seyahat Sigortası</option>
                    <option value="genel-bilgi">Genel Bilgi</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Mesaj *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0032A0] focus:border-transparent"
                    placeholder="Lütfen detaylı bilgi veriniz..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={formStatus === 'sending'}
                  className="w-full bg-[#0032A0] text-white py-4 px-6 rounded-lg font-medium hover:bg-blue-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                >
                  {formStatus === 'sending' ? (
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                  ) : (
                    <Send className="w-5 h-5 mr-2" />
                  )}
                  {formStatus === 'sending' ? 'Gönderiliyor...' : 'Mesaj Gönder'}
                </button>
              </form>
            </div>

            {/* Map */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="p-8 border-b">
                <h2 className="text-3xl font-bold text-gray-900 mb-2">
                  Ofisimizi Ziyaret Edin
                </h2>
                <p className="text-gray-600">
                  Güzeltepe Mahallesi'ndeki ofisimizde yüz yüze görüşme yapabilirsiniz.
                </p>
              </div>
              
              <LoadScript googleMapsApiKey="AIzaSyCO0kKndUNlmQi3B5mxy4dblg_8WYcuKuk">
                <GoogleMap
                  mapContainerStyle={mapStyles}
                  center={mapCenter}
                  zoom={15}
                  options={{
                    zoomControl: true,
                    streetViewControl: false,
                    mapTypeControl: false,
                    fullscreenControl: true,
                  }}
                >
                  <Marker
                    position={mapCenter}
                    onClick={() => setShowInfoWindow(true)}
                  >
                    {showInfoWindow && (
                      <InfoWindow
                        onCloseClick={() => setShowInfoWindow(false)}
                      >
                        <div className="p-2">
                          <h3 className="font-bold text-gray-900 mb-1">
                            Gelecek Sigorta
                          </h3>
                          <p className="text-sm text-gray-600 mb-2">
                            Güzeltepe Mah., Fuar Cad., No:9<br />
                            Çankaya, Ankara
                          </p>
                          <p className="text-sm text-[#0032A0] font-medium">
                            +90 312 442 00 82
                          </p>
                        </div>
                      </InfoWindow>
                    )}
                  </Marker>
                </GoogleMap>
              </LoadScript>

              <div className="p-6 bg-gray-50">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-bold text-gray-900">Randevu Alın</h3>
                    <p className="text-sm text-gray-600">
                      Önceden randevu alarak bekleme sürenizi azaltın.
                    </p>
                  </div>
                  <a
                    href="tel:+903124420082"
                    className="bg-[#0032A0] text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-800 transition-colors"
                  >
                    Ara
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Contact */}
      <section className="py-20 bg-[#0032A0] text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Acil Durumlarda 7/24 Ulaşabilirsiniz
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Hasar ihbarı ve acil durumlar için 24 saat kesintisiz hizmet veriyoruz.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+903124420082"
              className="bg-yellow-400 text-blue-900 px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-300 transition-colors inline-flex items-center justify-center"
            >
              <Phone className="mr-2 w-5 h-5" />
              Hemen Ara
            </a>
            <a
              href="mailto:murat@geleceksigorta.com"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-blue-900 transition-colors inline-flex items-center justify-center"
            >
              <Mail className="mr-2 w-5 h-5" />
              E-posta Gönder
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
