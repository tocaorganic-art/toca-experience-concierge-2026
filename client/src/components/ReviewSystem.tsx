import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Star } from 'lucide-react';
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
    stars: 4,
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
    <section id="reviews" className="py-8 md:py-20 pb-20 md:pb-20 px-4 bg-black border-t border-[rgb(201_168_76)]/20">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-[rgb(201_168_76)] text-sm uppercase tracking-widest font-semibold mb-2">
            {t('reviews.title')}
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-light text-white mb-4">
            {t('reviews.title')}
          </h2>
          <p className="text-gray-400 text-lg">
            {t('reviews.subtitle')}
          </p>
        </div>

        {/* Average Rating */}
        <div className="text-center mb-12">
          <div className="inline-block">
            <div className="flex items-center justify-center gap-2 mb-2">
              <span className="text-5xl font-bold text-[rgb(201_168_76)]">{averageRating}</span>
              <div className="flex gap-1">
                {[1, 2, 3, 4, 5].map(i => (
                  <Star
                    key={i}
                    size={24}
                    className={i <= Math.round(parseFloat(averageRating as string)) ? 'fill-[rgb(201_168_76)] text-[rgb(201_168_76)]' : 'text-gray-600'}
                  />
                ))}
              </div>
            </div>
            <p className="text-gray-400">{t('reviews.average')}</p>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {reviews.map(review => (
            <div
              key={review.id}
              className="p-6 bg-gradient-to-br from-[rgb(22_22_22)] to-black border border-[rgb(201_168_76)]/20 rounded hover:border-[rgb(201_168_76)]/40 transition-all"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold text-white">{review.name}</h3>
                <div className="flex gap-1">
                  {[1, 2, 3, 4, 5].map(i => (
                    <Star
                      key={i}
                      size={16}
                      className={i <= review.stars ? 'fill-[rgb(201_168_76)] text-[rgb(201_168_76)]' : 'text-gray-600'}
                    />
                  ))}
                </div>
              </div>
              <p className="text-gray-300 mb-4">{review.comment}</p>
              <p className="text-sm text-gray-500">{review.stayMonth}</p>
            </div>
          ))}
        </div>

        {/* Disclaimer */}
        <div className="p-4 bg-[rgb(201_168_76)]/10 border border-[rgb(201_168_76)]/30 rounded mb-12">
                  <p className="text-sm text-gray-300">
                    {t('reviews.disclaimer')}
                  </p>
        </div>

        {/* Review Form */}
        <div className="max-w-2xl mx-auto">
          <h3 className="text-2xl font-serif font-light text-white mb-6">
            {t('reviews.leaveReview') || 'Deixe sua Avaliação'}
          </h3>
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                {t('reviews.form.name')} *
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Seu nome"
                className="w-full px-4 py-3 bg-[rgb(22_22_22)] border border-[rgb(201_168_76)]/20 rounded text-white placeholder-gray-600 focus:border-[rgb(201_168_76)]/60 focus:outline-none transition-all"
              />
            </div>

            {/* Stars */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                {t('reviews.form.stars')} *
              </label>
              <div className="flex gap-2">
                {[1, 2, 3, 4, 5].map(star => (
                  <button
                    key={star}
                    type="button"
                    onClick={() => setFormData(prev => ({ ...prev, stars: star }))}
                    className="transition-all"
                  >
                    <Star
                      size={32}
                      className={star <= formData.stars ? 'fill-[rgb(201_168_76)] text-[rgb(201_168_76)]' : 'text-gray-600 hover:text-[rgb(201_168_76)]'}
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Comment */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                {t('reviews.form.comment')} *
              </label>
              <textarea
                name="comment"
                value={formData.comment}
                onChange={handleChange}
                placeholder="Compartilhe sua experiência..."
                rows={4}
                className="w-full px-4 py-3 bg-[rgb(22_22_22)] border border-[rgb(201_168_76)]/20 rounded text-white placeholder-gray-600 focus:border-[rgb(201_168_76)]/60 focus:outline-none transition-all resize-none"
              />
            </div>

            {/* Stay Month */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                {t('reviews.form.stayMonth')} *
              </label>
              <input
                type="month"
                name="stayMonth"
                value={formData.stayMonth}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-[rgb(22_22_22)] border border-[rgb(201_168_76)]/20 rounded text-white focus:border-[rgb(201_168_76)]/60 focus:outline-none transition-all"
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
              disabled={loading || submitReview.isPending}
              className="w-full px-8 py-4 bg-gradient-to-r from-[rgb(201_168_76)] to-[rgb(154_122_46)] text-black font-bold rounded hover:shadow-lg hover:-translate-y-1 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading || submitReview.isPending ? 'Enviando...' : t('reviews.form.submit')}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
