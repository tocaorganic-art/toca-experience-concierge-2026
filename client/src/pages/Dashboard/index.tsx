import DashboardLayout from "@/components/DashboardLayout";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { trpc } from "@/lib/trpc";
import { CalendarDays, Star, Users } from "lucide-react";

function PreBookingsPanel() {
  const { data: bookings, isLoading } = trpc.supabase.prebooking.list.useQuery();
  if (isLoading) return <div className="space-y-2">{[...Array(3)].map((_, i) => <Skeleton key={i} className="h-12 w-full" />)}</div>;
  if (!bookings?.length) return <p className="text-sm text-muted-foreground py-6 text-center">Nenhuma pré-reserva ainda.</p>;
  return (
    <div className="overflow-x-auto">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Nome</TableHead>
            <TableHead className="hidden sm:table-cell">Check-in</TableHead>
            <TableHead className="hidden sm:table-cell">Check-out</TableHead>
            <TableHead className="hidden md:table-cell">Adultos</TableHead>
            <TableHead className="hidden lg:table-cell">Email</TableHead>
            <TableHead className="hidden lg:table-cell">Telefone</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {bookings.map((b: any) => (
            <TableRow key={b.id}>
              <TableCell className="font-medium">{b.nome}</TableCell>
              <TableCell className="hidden sm:table-cell">{b.check_in ? new Date(b.check_in).toLocaleDateString("pt-BR") : "—"}</TableCell>
              <TableCell className="hidden sm:table-cell">{b.check_out ? new Date(b.check_out).toLocaleDateString("pt-BR") : "—"}</TableCell>
              <TableCell className="hidden md:table-cell">{b.adultos}</TableCell>
              <TableCell className="hidden lg:table-cell text-muted-foreground text-xs">{b.email}</TableCell>
              <TableCell className="hidden lg:table-cell text-muted-foreground text-xs">{b.telefone}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

function ReviewsPanel() {
  const { data: reviews, isLoading } = trpc.supabase.reviews.getApproved.useQuery();
  const { data: stats } = trpc.supabase.reviews.getStats.useQuery();
  if (isLoading) return <div className="space-y-2">{[...Array(3)].map((_, i) => <Skeleton key={i} className="h-12 w-full" />)}</div>;
  if (!reviews?.length) return <p className="text-sm text-muted-foreground py-6 text-center">Nenhuma avaliação aprovada ainda.</p>;
  return (
    <div className="space-y-3">
      {stats && (
        <div className="flex items-center gap-2 text-sm text-muted-foreground pb-2 border-b">
          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
          <span className="font-semibold text-foreground">{Number(stats.average).toFixed(1)}</span>
          <span>({stats.total} avaliações)</span>
        </div>
      )}
      {reviews.slice(0, 10).map((r: any) => (
        <div key={r.id} className="flex items-start gap-3 p-3 rounded-lg bg-muted/40">
          <div className="flex gap-0.5 shrink-0 mt-0.5">
            {[...Array(5)].map((_, i) => <Star key={i} className={`h-3 w-3 ${i < r.estrelas ? "fill-yellow-400 text-yellow-400" : "text-muted-foreground/30"}`} />)}
          </div>
          <div className="min-w-0 flex-1">
            <p className="text-sm font-medium leading-none mb-1">{r.nome}</p>
            <p className="text-xs text-muted-foreground line-clamp-2">{r.comentario}</p>
          </div>
          <Badge variant="secondary" className="text-xs shrink-0">{r.mes_estadia || "—"}</Badge>
        </div>
      ))}
    </div>
  );
}

function StatsCards() {
  const { data: counters, isLoading } = trpc.supabase.counters.get.useQuery();
  const { data: bookings } = trpc.supabase.prebooking.list.useQuery();
  const { data: reviewStats } = trpc.supabase.reviews.getStats.useQuery();
  const cards = [
    { title: "Pré-reservas", value: isLoading ? "..." : (bookings?.length ?? 0), icon: CalendarDays, description: "total recebidas" },
    { title: "Clientes Satisfeitos", value: isLoading ? "..." : (counters?.clientes_satisfeitos ?? 0), icon: Users, description: "acumulado" },
    { title: "Nota Média", value: reviewStats ? `${Number(reviewStats.average).toFixed(1)} ★` : "—", icon: Star, description: `${reviewStats?.total ?? 0} avaliações` },
  ];
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
      {cards.map((card) => (
        <Card key={card.title}>
          <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
            <CardTitle className="text-sm font-medium text-muted-foreground">{card.title}</CardTitle>
            <card.icon className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{card.value}</div>
            <p className="text-xs text-muted-foreground mt-1">{card.description}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

export default function Dashboard() {
  return (
    <DashboardLayout>
      <div className="space-y-6 max-w-6xl mx-auto">
        <div>
          <h1 className="text-xl font-semibold tracking-tight">Dashboard</h1>
          <p className="text-sm text-muted-foreground">Toca Experience Concierge — painel de controle</p>
        </div>
        <StatsCards />
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <div>
              <CardTitle className="text-base">Pré-reservas</CardTitle>
              <p className="text-sm text-muted-foreground mt-0.5">Solicitações recebidas pelo site</p>
            </div>
            <Button variant="outline" size="sm" onClick={() => window.location.reload()}>Atualizar</Button>
          </CardHeader>
          <CardContent><PreBookingsPanel /></CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="text-base">Avaliações Aprovadas</CardTitle>
            <p className="text-sm text-muted-foreground mt-0.5">Reviews publicados no site</p>
          </CardHeader>
          <CardContent><ReviewsPanel /></CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}
