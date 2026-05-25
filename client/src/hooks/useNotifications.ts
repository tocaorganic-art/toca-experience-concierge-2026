import { trpc } from "@/lib/trpc";
import { toast } from "sonner";

export function useNotifications() {
  const logReservationClick = trpc.notifications.logReservationClick.useMutation({
    onSuccess: () => {
      toast.success("Solicitação enviada! Entraremos em contato em breve.");
    },
    onError: (error) => {
      console.error("Error logging reservation click:", error);
      toast.error("Erro ao enviar solicitação. Tente novamente.");
    },
  });

  const logInterestForm = trpc.notifications.logInterestForm.useMutation({
    onSuccess: () => {
      toast.success("Formulário enviado com sucesso!");
    },
    onError: (error) => {
      console.error("Error logging interest form:", error);
      toast.error("Erro ao enviar formulário. Tente novamente.");
    },
  });

  const handleReservationClick = async (
    clientName: string,
    clientEmail: string | undefined,
    clientPhone: string | undefined,
    language: "pt" | "es" | "en"
  ) => {
    try {
      await logReservationClick.mutateAsync({
        clientName,
        clientEmail,
        clientPhone,
        language,
        propertyId: 1, // TODO: Replace with actual property ID
      });
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleInterestForm = async (
    clientName: string,
    clientEmail: string,
    clientPhone: string,
    language: "pt" | "es" | "en",
    message?: string
  ) => {
    try {
      await logInterestForm.mutateAsync({
        clientName,
        clientEmail,
        clientPhone,
        language,
        propertyId: 1, // TODO: Replace with actual property ID
        message,
      });
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return {
    handleReservationClick,
    handleInterestForm,
    isLoading: logReservationClick.isPending || logInterestForm.isPending,
  };
}
