import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Star, Quote } from 'lucide-react';
import { trpc } from '@/lib/trpc';

interface Review {
  id: string;
  name: string;
  stars: number;
  comment: string;
  stayMonth: string;
}

const fallbackReviews: Review[] = [
  {
    id: '1',
    name: 'Marina Silva',
    stars: 5,
    comment: 'Experiência absolutamente memorável! A equipe de concierge foi impecável em cada detalhe.',
    stayMonth: 'Novembro 2024',
  },
  {
    id: '2',
    name: 'Carlos Santos',
    stars: 5,
    comment: 'O melhor serviço de concierge que já experienciei. Recomendo fortemente!',
    stayMonth: 'Outubro 2024',
  },
  {
    id: '3',
    name: 'Ana Costa',
    stars: 5,
    comment: 'Ótima experiência, equipe atenciosa e propriedade linda. Voltaremos com certeza!',
    stayMonth: 'Setembro 2024',
  },
];

export function ReviewSystem() {
  const { t, i18n } = useTranslation();
  const utils = trpc.useUtils();
  const approvedReviewsQuery = trpc.supabase.reviews.getApproved.useQuery(undefined, {
    staleTime: 60_000,
  });
  const submitReview = trpc.supabase.reviews.submit.useMutation({
    onSuccess: async () => {
      await Promise.all([
        utils.supabase.reviews.getApproved.invalidate(),
        utils.supabase.reviews.getStats.invalidate(),
      ]);
    },
  });

  const approvedReviews: Review[] = (approvedReviewsQuery.data || []).map(review => ({
    id: review.id,
    name: review.nome,
    stars: review.estrelas,
    comment: review.comentario,
    stayMonth: review.mes_estadia || '',
  }));

  const reviews = approvedReviews.length > 0 ? approvedReviews : fallbackReviews;

  const [formData, setFormData] = useState({
    name: '',
    stars: 5,
    comment: '',
    stayMonth: '',
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  const averageRating = reviews.length > 0
    ? (reviews.reduce((sum, r) => sum + r.stars, 0) / reviews.length).toFixed(1)
    : 0;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: name === 'stars' ? parseInt(value) : value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage(null);

    try {
      if (!formData.name || !formData.comment || !formData.stayMonth) {
        setMessage({ type: 'error', text: 'Por favor, preencha todos os campos.' });
        setLoading(false);
        return;
      }

      const idioma = ['pt', 'es', 'en'].includes(i18n.language) ? (i18n.language as 'pt' | 'es' | 'en') : 'pt';

      await submitReview.mutateAsync({
        nome: formData.name,
        estrelas: formData.stars,
        comentario: formData.comment,
        mes_estadia: formData.stayMonth,
        idioma,
      });

      setMessage({ type: 'success', text: 'Avaliação enviada com sucesso! Obrigado pelo feedback.' });
      setFormData({
        name: '',
        stars: 5,
        comment: '',
        stayMonth: '',
      });
    } catch (error) {
      console.error('Error submitting review:', error);
      setMessage({ type: 'error', text: 'Erro ao enviar avaliação. Tente novamente.' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="reviews" className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <span className="section-label">{t('reviews.title')}</span>
          <h2 className="section-title">{t('reviews.title')}</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            {t('reviews.subtitle')}
          </p>
        </div>

        {/* Average Rating */}
        <div className="flex flex-col items-center mb-20 p-10 rounded-[2.5rem] bg-[#F8F5F0] border border-gray-100 max-w-lg mx-auto shadow-sm">
          <div className="text-6xl font-serif font-bold text-[#1D3557] mb-4">{averageRating}</div>
          <div className="flex gap-1 mb-4">
            {[1, 2, 3, 4, 5].map(i => (
              <Star
                key={i}
                size={28}
                className={i <= Math.round(parseFloat(averageRating as string)) ? 'fill-[#A8924A] text-[#A8924A]' : 'text-gray-300'}
              />
            ))}
          </div>
          <p className="text-sm font-bold uppercase tracking-widest text-gray-400">{t('reviews.average')}</p>
        </div>

        {/* Reviews Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {reviews.map(review => (
            <div
              key={review.id}
              className="p-10 bg-white border border-gray-100 rounded-[2rem] hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 relative group"
            >
              <Quote className="w-10 h-10 text-[#A8924A]/10 absolute top-8 right-8 group-hover:text-[#A8924A]/20 transition-colors" />
              <div className="flex gap-1 mb-6">
                {[1, 2, 3, 4, 5].map(i => (
                  <Star
                    key={i}
                    size={16}
                    className={i <= review.stars ? 'fill-[#A8924A] text-[#A8924A]' : 'text-gray-200'}
                  />
                ))}
              </div>
              <p className="text-gray-600 mb-8 leading-relaxed italic">"{review.comment}"</p>
              <div className="pt-6 border-t border-gray-50">
                <h4 className="font-bold text-[#1D3557]">{review.name}</h4>
                <p className="text-xs font-bold uppercase tracking-widest text-[#A8924A] mt-1">{review.stayMonth}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Review Form */}
        <div className="max-w-3xl mx-auto bg-[#1D3557] rounded-[3rem] p-8 md:p-16 text-white shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none" />
          
          <div className="relative z-10">
            <h3 className="text-3xl font-bold mb-8 text-center">
              {t('reviews.leaveReview')}
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-gray-400">
                    {t('reviews.form.name')}
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-6 py-4 bg-white/10 border border-white/10 rounded-2xl text-white placeholder-white/30 focus:border-[#A8924A] focus:outline-none transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-gray-400">
                    {t('reviews.form.stayMonth')}
                  </label>
                  <input
                    type="month"
                    name="stayMonth"
                    value={formData.stayMonth}
                    onChange={handleChange}
                    className="w-full px-6 py-4 bg-white/10 border border-white/10 rounded-2xl text-white focus:border-[#A8924A] focus:outline-none transition-all"
                  />
                </div>
              </div>

              <div className="space-y-2 text-center">
                <label className="text-xs font-bold uppercase tracking-widest text-gray-400 block mb-4">
                  {t('reviews.form.stars')}
                </label>
                <div className="flex justify-center gap-4">
                  {[1, 2, 3, 4, 5].map(star => (
                    <button
                      key={star}
                      type="button"
                      onClick={() => setFormData(prev => ({ ...prev, stars: star }))}
                      className="transition-all hover:scale-110"
                    >
                      <Star
                        size={40}
                        className={star <= formData.stars ? 'fill-[#A8924A] text-[#A8924A]' : 'text-white/20 hover:text-[#A8924A]/50'}
                      />
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-gray-400">
                  {t('reviews.form.comment')}
                </label>
                <textarea
                  name="comment"
                  value={formData.comment}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-6 py-4 bg-white/10 border border-white/10 rounded-2xl text-white placeholder-white/30 focus:border-[#A8924A] focus:outline-none transition-all resize-none"
                />
              </div>

              {message && (
                <div className={`p-6 rounded-2xl text-center font-bold ${message.type === 'success' ? 'bg-green-500/20 text-green-400 border border-green-500/30' : 'bg-red-500/20 text-red-400 border border-red-500/30'}`}>
                  {message.text}
                </div>
              )}

              <button
                type="submit"
                disabled={loading || submitReview.isPending}
                className="w-full py-5 bg-[#A8924A] text-white font-bold rounded-2xl hover:bg-[#A8924A]/90 transition-all shadow-xl shadow-[#A8924A]/20 disabled:opacity-50"
              >
                {loading || submitReview.isPending ? '...' : t('reviews.form.submit')}
              </button>
            </form>

            <p className="mt-10 text-center text-xs text-white/40 leading-relaxed">
              {t('reviews.disclaimer')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
