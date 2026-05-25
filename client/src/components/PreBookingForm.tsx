import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Calendar, Users, Mail, Phone } from 'lucide-react';
import { trpc } from '@/lib/trpc';

export function PreBookingForm() {
  const { t, i18n } = useTranslation();
  const createPreBooking = trpc.supabase.prebooking.create.useMutation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    checkin: '',
    checkout: '',
    adults: '2',
    children: '0',
    message: '',
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  const calculateNights = () => {
    if (!formData.checkin || !formData.checkout) return 0;
    const checkin = new Date(formData.checkin);
    const checkout = new Date(formData.checkout);
    const nights = Math.floor((checkout.getTime() - checkin.getTime()) / (1000 * 60 * 60 * 24));
    return nights > 0 ? nights : 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage(null);

    try {
      // Validação básica
      if (!formData.name || !formData.email || !formData.phone || !formData.checkin || !formData.checkout) {
        setMessage({ type: 'error', text: 'Por favor, preencha todos os campos obrigatórios.' });
        setLoading(false);
        return;
      }

      const idioma = ['pt', 'es', 'en'].includes(i18n.language) ? (i18n.language as 'pt' | 'es' | 'en') : 'pt';

      await createPreBooking.mutateAsync({
        nome: formData.name,
        email: formData.email,
        telefone: formData.phone,
        check_in: formData.checkin,
        check_out: formData.checkout,
        adultos: parseInt(formData.adults, 10),
        criancas: parseInt(formData.children, 10),
        mensagem: formData.message || undefined,
        idioma,
      });

      setMessage({ type: 'success', text: t('prebooking.success') });
      setFormData({
        name: '',
        email: '',
        phone: '',
        checkin: '',
        checkout: '',
        adults: '2',
        children: '0',
        message: '',
      });
    } catch (error) {
      console.error('Error creating pre-booking:', error);
      setMessage({ type: 'error', text: t('prebooking.error') });
    } finally {
      setLoading(false);
    }
  };

  const nights = calculateNights();
  const minCheckout = formData.checkin ? new Date(new Date(formData.checkin).getTime() + 86400000).toISOString().split('T')[0] : '';
  const today = new Date().toISOString().split('T')[0];

  return (
    <section id="prebooking" className="py-20 px-4 bg-gradient-to-b from-black to-[rgb(22_22_22)] border-t border-[rgb(201_168_76)]/20">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-[rgb(201_168_76)] text-sm uppercase tracking-widest font-semibold mb-2">
            {t('prebooking.title')}
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-light text-white mb-4">
            {t('prebooking.title')}
          </h2>
          <p className="text-gray-400 text-lg">
            {t('prebooking.subtitle')}
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              {t('prebooking.name')} *
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="João Silva"
              className="w-full px-4 py-3 bg-[rgb(22_22_22)] border border-[rgb(201_168_76)]/20 rounded text-white placeholder-gray-600 focus:border-[rgb(201_168_76)]/60 focus:outline-none transition-all"
            />
          </div>

          {/* Email and Phone */}
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                <Mail size={16} className="inline mr-2" />
                {t('prebooking.email')} *
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="seu@email.com"
                className="w-full px-4 py-3 bg-[rgb(22_22_22)] border border-[rgb(201_168_76)]/20 rounded text-white placeholder-gray-600 focus:border-[rgb(201_168_76)]/60 focus:outline-none transition-all"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                <Phone size={16} className="inline mr-2" />
                {t('prebooking.phone')} *
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+55 47 99999-9999"
                className="w-full px-4 py-3 bg-[rgb(22_22_22)] border border-[rgb(201_168_76)]/20 rounded text-white placeholder-gray-600 focus:border-[rgb(201_168_76)]/60 focus:outline-none transition-all"
              />
            </div>
          </div>

          {/* Check-in and Check-out */}
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                <Calendar size={16} className="inline mr-2" />
                {t('prebooking.checkin')} *
              </label>
              <input
                type="date"
                name="checkin"
                value={formData.checkin}
                onChange={handleChange}
                min={today}
                className="w-full px-4 py-3 bg-[rgb(22_22_22)] border border-[rgb(201_168_76)]/20 rounded text-white focus:border-[rgb(201_168_76)]/60 focus:outline-none transition-all"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                <Calendar size={16} className="inline mr-2" />
                {t('prebooking.checkout')} *
              </label>
              <input
                type="date"
                name="checkout"
                value={formData.checkout}
                onChange={handleChange}
                min={minCheckout || today}
                className="w-full px-4 py-3 bg-[rgb(22_22_22)] border border-[rgb(201_168_76)]/20 rounded text-white focus:border-[rgb(201_168_76)]/60 focus:outline-none transition-all"
              />
            </div>
          </div>

          {/* Nights Display */}
          {nights > 0 && (
            <div className="p-4 bg-[rgb(201_168_76)]/10 border border-[rgb(201_168_76)]/30 rounded">
              <p className="text-[rgb(201_168_76)] font-semibold">
                {nights} {t('prebooking.nights')}
              </p>
            </div>
          )}

          {/* Adults and Children */}
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                <Users size={16} className="inline mr-2" />
                {t('prebooking.adults')} *
              </label>
              <select
                name="adults"
                value={formData.adults}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-[rgb(22_22_22)] border border-[rgb(201_168_76)]/20 rounded text-white focus:border-[rgb(201_168_76)]/60 focus:outline-none transition-all"
              >
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map(n => (
                  <option key={n} value={n}>{n}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                {t('prebooking.children')}
              </label>
              <select
                name="children"
                value={formData.children}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-[rgb(22_22_22)] border border-[rgb(201_168_76)]/20 rounded text-white focus:border-[rgb(201_168_76)]/60 focus:outline-none transition-all"
              >
                {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(n => (
                  <option key={n} value={n}>{n}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Message */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              {t('prebooking.message')}
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Conte-nos mais sobre suas preferências..."
              rows={4}
              className="w-full px-4 py-3 bg-[rgb(22_22_22)] border border-[rgb(201_168_76)]/20 rounded text-white placeholder-gray-600 focus:border-[rgb(201_168_76)]/60 focus:outline-none transition-all resize-none"
            />
          </div>

          {/* Message */}
          {message && (
            <div className={`p-4 rounded ${message.type === 'success' ? 'bg-green-900/20 border border-green-500/30 text-green-400' : 'bg-red-900/20 border border-red-500/30 text-red-400'}`}>
              {message.text}
            </div>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading || createPreBooking.isPending}
            className="w-full px-8 py-4 bg-gradient-to-r from-[rgb(201_168_76)] to-[rgb(154_122_46)] text-black font-bold rounded hover:shadow-lg hover:-translate-y-1 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
          >
              {loading || createPreBooking.isPending ? t('prebooking.loading') || 'Enviando...' : t('prebooking.submit')}
          </button>
        </form>
      </div>
    </section>
  );
}
