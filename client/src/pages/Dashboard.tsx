import DashboardLayout from "@/components/DashboardLayout";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { trpc } from "@/lib/trpc";
import { CalendarCheck, Check, Loader2, Star, Users, X } from "lucide-react";
import { toast } from "sonner";

function formatDate(value?: string | null) {
  if (!value) return "—";
  const d = new Date(value);
  return isNaN(d.getTime()) ? value : d.toLocaleDateString("pt-BR");
}

function StatCard({
  icon: Icon,
  label,
  value,
  loading,
}: {
  icon: typeof Star;
  label: string;
  value: string | number;
  loading?: boolean;
}) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium text-muted-foreground">
          {label}
        </CardTitle>
        <Icon className="size-4 text-primary" />
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">
          {loading ? <Loader2 className="size-5 animate-spin" /> : value}
        </div>
      </CardContent>
    </Card>
  );
}

type BookingsQuery = { data: { id: string; nome: string; email: string; telefone?: string | null; check_in?: string | null; check_out?: string | null; adultos: number; criancas?: number | null; created_at?: string | null }[] | undefined; isLoading: boolean };

function Overview({ bookings }: { bookings: BookingsQuery }) {
  const counters = trpc.supabase.counters.get.useQuery();
  const reviewStats = trpc.supabase.reviews.getStats.useQuery();

  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      <StatCard
        icon={CalendarCheck}
        label="Pré-reservas"
        value={bookings.data?.length ?? 0}
        loading={bookings.isLoading}
      />
      <StatCard
        icon={Star}
        label="Média de avaliações"
        value={reviewStats.data ? `${reviewStats.data.average} ★` : "—"}
        loading={reviewStats.isLoading}
      />
      <StatCard
        icon={Star}
        label="Avaliações aprovadas"
        value={reviewStats.data?.total ?? 0}
        loading={reviewStats.isLoading}
      />
      <StatCard
        icon={Users}
        label="Clientes satisfeitos"
        value={counters.data?.clientes_satisfeitos ?? 0}
        loading={counters.isLoading}
      />
    </div>
  );
}

function BookingsTab({ bookings }: { bookings: BookingsQuery }) {
  const { data, isLoading } = bookings;

  if (isLoading) {
    return (
      <div className="flex items-center justify-center py-12 text-muted-foreground">
        <Loader2 className="size-5 animate-spin" />
      </div>
    );
  }

  if (!data || data.length === 0) {
    return (
      <p className="py-12 text-center text-sm text-muted-foreground">
        Nenhuma pré-reserva ainda.
      </p>
    );
  }

  return (
    <div className="rounded-lg border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Nome</TableHead>
            <TableHead>Contato</TableHead>
            <TableHead>Check-in</TableHead>
            <TableHead>Check-out</TableHead>
            <TableHead className="text-center">Hóspedes</TableHead>
            <TableHead>Recebida</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((b) => (
            <TableRow key={b.id}>
              <TableCell className="font-medium">{b.nome}</TableCell>
              <TableCell className="text-sm">
                <div>{b.email}</div>
                <div className="text-muted-foreground">{b.telefone}</div>
              </TableCell>
              <TableCell>{formatDate(b.check_in)}</TableCell>
              <TableCell>{formatDate(b.check_out)}</TableCell>
              <TableCell className="text-center">
                {b.adultos + (b.criancas ?? 0)}
              </TableCell>
              <TableCell className="text-sm text-muted-foreground">
                {formatDate(b.created_at)}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

function ReviewsTab() {
  const utils = trpc.useUtils();
  const { data, isLoading } = trpc.supabase.reviews.getPending.useQuery();

  const updateStatus = trpc.supabase.reviews.updateStatus.useMutation({
    onSuccess: (res, vars) => {
      if (res.success) {
        toast.success(
          vars.status === "aprovado" ? "Avaliação aprovada" : "Avaliação rejeitada"
        );
        utils.supabase.reviews.getPending.invalidate();
        utils.supabase.reviews.getStats.invalidate();
        utils.supabase.reviews.getApproved.invalidate();
      } else {
        toast.error("Não foi possível atualizar a avaliação.");
      }
    },
    onError: () => toast.error("Erro ao atualizar avaliação."),
  });

  if (isLoading) {
    return (
      <div className="flex items-center justify-center py-12 text-muted-foreground">
        <Loader2 className="size-5 animate-spin" />
      </div>
    );
  }

  if (!data || data.length === 0) {
    return (
      <p className="py-12 text-center text-sm text-muted-foreground">
        Nenhuma avaliação pendente de moderação.
      </p>
    );
  }

  return (
    <div className="flex flex-col gap-3">
      {data.map((r) => {
        const pending =
          updateStatus.isPending && updateStatus.variables?.id === r.id;
        return (
          <Card key={r.id}>
            <CardHeader className="pb-2">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <CardTitle className="text-base">{r.nome}</CardTitle>
                  <CardDescription>
                    {formatDate(r.created_at)}
                    {r.mes_estadia ? ` · estadia em ${r.mes_estadia}` : ""}
                  </CardDescription>
                </div>
                <Badge variant="secondary" className="gap-1">
                  {r.estrelas} <Star className="size-3 fill-current" />
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="flex flex-col gap-3">
              <p className="text-sm">{r.comentario}</p>
              <div className="flex gap-2">
                <Button
                  size="sm"
                  disabled={pending}
                  onClick={() =>
                    updateStatus.mutate({ id: r.id, status: "aprovado" })
                  }
                >
                  {pending ? (
                    <Loader2 className="size-4 animate-spin" />
                  ) : (
                    <Check className="size-4" />
                  )}
                  Aprovar
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  disabled={pending}
                  onClick={() =>
                    updateStatus.mutate({ id: r.id, status: "rejeitado" })
                  }
                >
                  <X className="size-4" />
                  Rejeitar
                </Button>
              </div>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}

export default function Dashboard() {
  const bookings = trpc.supabase.prebooking.list.useQuery();

  return (
    <DashboardLayout>
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-6">
        <div>
          <h1 className="font-serif text-2xl font-bold tracking-tight">
            Painel Toca Experience
          </h1>
          <p className="text-sm text-muted-foreground">
            Gerencie pré-reservas e modere avaliações dos hóspedes.
          </p>
        </div>

        <Overview bookings={bookings} />

        <Tabs defaultValue="bookings">
          <TabsList>
            <TabsTrigger value="bookings">Pré-reservas</TabsTrigger>
            <TabsTrigger value="reviews">Avaliações</TabsTrigger>
          </TabsList>
          <TabsContent value="bookings" className="mt-4">
            <BookingsTab bookings={bookings} />
          </TabsContent>
          <TabsContent value="reviews" className="mt-4">
            <ReviewsTab />
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
}
