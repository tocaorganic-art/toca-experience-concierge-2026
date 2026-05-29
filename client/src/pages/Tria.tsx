import { AIChatBox, type Message } from "@/components/AIChatBox";
import { trpc } from "@/lib/trpc";
import { useLanguage } from "@/hooks/useLanguage";
import { Sparkles, ArrowLeft } from "lucide-react";
import { useState } from "react";
import { Link } from "wouter";

type Lang = "pt" | "es" | "en";

const COPY: Record<
  Lang,
  {
    title: string;
    subtitle: string;
    back: string;
    placeholder: string;
    empty: string;
    prompts: string[];
  }
> = {
  pt: {
    title: "Toca TrIA",
    subtitle: "Sua concierge virtual — tire dúvidas sobre a casa, roteiros e reservas.",
    back: "Voltar ao site",
    placeholder: "Pergunte algo à Toca TrIA...",
    empty: "Olá! Sou a Toca TrIA. Como posso tornar sua estadia inesquecível?",
    prompts: [
      "Quais experiências vocês recomendam por perto?",
      "Como funciona a pré-reserva?",
      "A casa é boa para grupos grandes?",
    ],
  },
  es: {
    title: "Toca TrIA",
    subtitle: "Tu concierge virtual — consulta sobre la casa, itinerarios y reservas.",
    back: "Volver al sitio",
    placeholder: "Pregúntale algo a Toca TrIA...",
    empty: "¡Hola! Soy Toca TrIA. ¿Cómo puedo hacer tu estadía inolvidable?",
    prompts: [
      "¿Qué experiencias recomiendan cerca?",
      "¿Cómo funciona la pre-reserva?",
      "¿La casa es buena para grupos grandes?",
    ],
  },
  en: {
    title: "Toca TrIA",
    subtitle: "Your virtual concierge — ask about the house, itineraries and bookings.",
    back: "Back to site",
    placeholder: "Ask Toca TrIA something...",
    empty: "Hi! I'm Toca TrIA. How can I make your stay unforgettable?",
    prompts: [
      "What experiences do you recommend nearby?",
      "How does the pre-booking work?",
      "Is the house good for large groups?",
    ],
  },
};

export default function Tria() {
  const { language } = useLanguage();
  const lang = (["pt", "es", "en"].includes(language) ? language : "pt") as Lang;
  const copy = COPY[lang];

  const [messages, setMessages] = useState<Message[]>([]);

  const chatMutation = trpc.tria.chat.useMutation({
    onSuccess: (data) => {
      setMessages((prev) => [...prev, { role: "assistant", content: data.reply }]);
    },
    onError: (error) => {
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: `⚠️ ${error.message}` },
      ]);
    },
  });

  const handleSend = (content: string) => {
    const next: Message[] = [...messages, { role: "user", content }];
    setMessages(next);
    chatMutation.mutate({
      idioma: lang,
      messages: next
        .filter((m) => m.role === "user" || m.role === "assistant")
        .map((m) => ({ role: m.role as "user" | "assistant", content: m.content })),
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto flex max-w-3xl flex-col gap-6 px-4 py-8">
        <header className="flex flex-col gap-4">
          <Link
            href="/"
            className="inline-flex w-fit items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="size-4" />
            {copy.back}
          </Link>
          <div className="flex items-center gap-3">
            <div className="flex size-11 items-center justify-center rounded-full bg-primary/10">
              <Sparkles className="size-5 text-primary" />
            </div>
            <div>
              <h1 className="font-serif text-2xl font-bold tracking-tight">
                {copy.title}
              </h1>
              <p className="text-sm text-muted-foreground">{copy.subtitle}</p>
            </div>
          </div>
        </header>

        <AIChatBox
          messages={messages}
          onSendMessage={handleSend}
          isLoading={chatMutation.isPending}
          placeholder={copy.placeholder}
          emptyStateMessage={copy.empty}
          suggestedPrompts={copy.prompts}
          height="min(70vh, 640px)"
        />
      </div>
    </div>
  );
}
