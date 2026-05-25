import { useState } from "react";
import { useLanguage } from "@/hooks/useLanguage";
import { useNotifications } from "@/hooks/useNotifications";
import { X } from "lucide-react";

interface InterestFormProps {
  isOpen: boolean;
  onClose: () => void;
}

export function InterestForm({ isOpen, onClose }: InterestFormProps) {
  const { language, t } = useLanguage();
  const { handleInterestForm, isLoading } = useNotifications();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.phone) {
      alert("Por favor, preencha todos os campos obrigatórios");
      return;
    }

    await handleInterestForm(
      formData.name,
      formData.email,
      formData.phone,
      language,
      formData.message
    );

    setFormData({ name: "", email: "", phone: "", message: "" });
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4">
      <div className="relative max-w-md w-full bg-[rgb(22_22_22)] rounded border border-[rgb(201_168_76)]/20 p-6">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-[rgb(201_168_76)]"
        >
          <X size={24} />
        </button>

        <h3 className="text-2xl font-serif text-white mb-6">Formulário de Interesse</h3>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2">
              Nome Completo *
            </label>
            <input
              type="text"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-4 py-2 rounded bg-[rgb(30_30_30)] border border-[rgb(201_168_76)]/20 text-white focus:outline-none focus:border-[rgb(201_168_76)]"
              placeholder="Seu nome"
            />
          </div>

          <div>
            <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2">
              Email *
            </label>
            <input
              type="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full px-4 py-2 rounded bg-[rgb(30_30_30)] border border-[rgb(201_168_76)]/20 text-white focus:outline-none focus:border-[rgb(201_168_76)]"
              placeholder="seu@email.com"
            />
          </div>

          <div>
            <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2">
              Telefone / WhatsApp *
            </label>
            <input
              type="tel"
              required
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="w-full px-4 py-2 rounded bg-[rgb(30_30_30)] border border-[rgb(201_168_76)]/20 text-white focus:outline-none focus:border-[rgb(201_168_76)]"
              placeholder="+55 (47) 99999-9999"
            />
          </div>

          <div>
            <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2">
              Mensagem
            </label>
            <textarea
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full px-4 py-2 rounded bg-[rgb(30_30_30)] border border-[rgb(201_168_76)]/20 text-white focus:outline-none focus:border-[rgb(201_168_76)] resize-none"
              placeholder="Conte-nos mais sobre sua experiência desejada..."
              rows={4}
            />
          </div>

          <div className="flex gap-3 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 px-4 py-2 rounded border border-[rgb(201_168_76)]/40 text-[rgb(201_168_76)] hover:bg-[rgb(201_168_76)]/10 transition-all"
            >
              Cancelar
            </button>
            <button
              type="submit"
              disabled={isLoading}
              className="flex-1 px-4 py-2 bg-gradient-to-r from-[rgb(201_168_76)] to-[rgb(154_122_46)] text-black font-semibold rounded hover:shadow-lg transition-all disabled:opacity-50"
            >
              {isLoading ? "Enviando..." : "Enviar"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
