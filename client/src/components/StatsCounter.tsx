import { useEffect, useRef, useState } from "react";
import { Users, CheckCircle, Heart } from "lucide-react";
import { createClient } from "@supabase/supabase-js";
import { trpc } from "@/lib/trpc";

interface StatItem {
  icon: React.ReactNode;
  label: string;
  value: number;
  suffix?: string;
  key: "clientes_satisfeitos" | "reservas_realizadas" | "taxa_satisfacao";
}

const fallbackCounters = {
  clientes_satisfeitos: 500,
  reservas_realizadas: 150,
  taxa_satisfacao: 98,
};

export function StatsCounter() {
  const [isVisible, setIsVisible] = useState(false);
  const [counterValues, setCounterValues] = useState(fallbackCounters);
  const [counts, setCounts] = useState({ clients: 0, reservations: 0, satisfaction: 0 });
  const ref = useRef<HTMLDivElement>(null);
  const countersQuery = trpc.supabase.counters.get.useQuery(undefined, {
    staleTime: 60_000,
  });

  useEffect(() => {
    if (!countersQuery.data) return;

    setCounterValues({
      clientes_satisfeitos: countersQuery.data.clientes_satisfeitos ?? fallbackCounters.clientes_satisfeitos,
      reservas_realizadas: countersQuery.data.reservas_realizadas ?? fallbackCounters.reservas_realizadas,
      taxa_satisfacao: countersQuery.data.taxa_satisfacao ?? fallbackCounters.taxa_satisfacao,
    });
  }, [countersQuery.data]);

  useEffect(() => {
    const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
    const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

    if (!supabaseUrl || !supabaseAnonKey) return;

    const supabase = createClient(supabaseUrl, supabaseAnonKey);
    const channel = supabase
      .channel("site_counters_changes")
      .on(
        "postgres_changes",
        { event: "*", schema: "public", table: "site_counters" },
        payload => {
          const newRecord = payload.new as { tipo?: string; valor?: number } | null;
          if (!newRecord?.tipo || typeof newRecord.valor !== "number") return;

          setCounterValues(current => ({
            ...current,
            [newRecord.tipo]: newRecord.valor,
          }));
        }
      )
      .subscribe();

    return () => {
      void supabase.removeChannel(channel);
    };
  }, []);

  const stats: StatItem[] = [
    {
      icon: <Users size={28} />,
      label: "Clientes Satisfeitos",
      value: counterValues.clientes_satisfeitos,
      suffix: "+",
      key: "clientes_satisfeitos",
    },
    {
      icon: <CheckCircle size={28} />,
      label: "Reservas Realizadas",
      value: counterValues.reservas_realizadas,
      suffix: "+",
      key: "reservas_realizadas",
    },
    {
      icon: <Heart size={28} />,
      label: "Taxa de Satisfação",
      value: counterValues.taxa_satisfacao,
      suffix: "%",
      key: "taxa_satisfacao",
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [isVisible]);

  // Animate counters when visible
  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000; // 2 seconds
    const startTime = Date.now();

    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);

      setCounts({
        clients: Math.floor(counterValues.clientes_satisfeitos * progress),
        reservations: Math.floor(counterValues.reservas_realizadas * progress),
        satisfaction: Math.floor(counterValues.taxa_satisfacao * progress),
      });

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [isVisible, counterValues]);

  return (
    <div
      ref={ref}
      className="py-12 px-4 bg-gradient-to-r from-[rgb(201_168_76)]/5 to-[rgb(154_122_46)]/5 border-y border-[rgb(201_168_76)]/20"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`flex flex-col items-center text-center transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{
                transitionDelay: isVisible ? `${index * 150}ms` : "0ms",
              }}
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[rgb(201_168_76)]/20 to-[rgb(154_122_46)]/20 border border-[rgb(201_168_76)]/30 flex items-center justify-center mb-4">
                <div className="text-[rgb(201_168_76)]">{stat.icon}</div>
              </div>

              {/* Counter */}
              <div className="mb-2">
                <span className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[rgb(201_168_76)] to-[rgb(232_208_138)] bg-clip-text text-transparent">
                  {index === 0
                    ? counts.clients
                    : index === 1
                      ? counts.reservations
                      : counts.satisfaction}
                  {stat.suffix}
                </span>
              </div>

              {/* Label */}
              <p className="text-sm md:text-base text-gray-400 font-medium">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
