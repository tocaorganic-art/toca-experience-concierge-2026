// @ts-nocheck
import { getSupabaseClient } from './_core/supabase';

// Types
export interface PreBooking {
  id: string;
  nome: string;
  email: string;
  telefone: string;
  check_in: string;
  check_out: string;
  adultos: number;
  criancas: number;
  mensagem?: string;
  idioma: string;
  created_at: string;
  updated_at: string;
}

export interface Review {
  id: string;
  nome: string;
  estrelas: number;
  comentario: string;
  mes_estadia?: string;
  idioma: string;
  status: 'pendente' | 'aprovado' | 'rejeitado';
  created_at: string;
  updated_at: string;
}

export interface SiteCounter {
  id: string;
  tipo: string;
  valor: number;
  updated_at: string;
}

// Pre-bookings
export async function createPreBooking(data: {
  nome: string;
  email: string;
  telefone: string;
  check_in: string;
  check_out: string;
  adultos: number;
  criancas: number;
  mensagem?: string;
  idioma: string;
}): Promise<PreBooking | null> {
  try {
    const client = getSupabaseClient();
    if (!client) throw new Error('Supabase client not initialized');

    const { data: result, error } = await client
      .from('pre_bookings')
      .insert([data])
      .select()
      .single();

    if (error) {
      console.error('[Supabase] Error creating pre-booking:', error);
      return null;
    }

    return result as PreBooking;
  } catch (error) {
    console.error('[Supabase] Exception creating pre-booking:', error);
    return null;
  }
}

export async function getPreBookings(): Promise<PreBooking[]> {
  try {
    const client = getSupabaseClient();
    if (!client) throw new Error('Supabase client not initialized');

    const { data, error } = await client
      .from('pre_bookings')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      console.error('[Supabase] Error fetching pre-bookings:', error);
      return [];
    }

    return (data || []) as PreBooking[];
  } catch (error) {
    console.error('[Supabase] Exception fetching pre-bookings:', error);
    return [];
  }
}

// Reviews
export async function createReview(data: {
  nome: string;
  estrelas: number;
  comentario: string;
  mes_estadia?: string;
  idioma: string;
}): Promise<Review | null> {
  try {
    const client = getSupabaseClient();
    if (!client) throw new Error('Supabase client not initialized');

    const { data: result, error } = await client
      .from('reviews')
      .insert([{ ...data, status: 'pendente' }])
      .select()
      .single();

    if (error) {
      console.error('[Supabase] Error creating review:', error);
      return null;
    }

    return result as Review;
  } catch (error) {
    console.error('[Supabase] Exception creating review:', error);
    return null;
  }
}

export async function getApprovedReviews(): Promise<Review[]> {
  try {
    const client = getSupabaseClient();
    if (!client) throw new Error('Supabase client not initialized');

    const { data, error } = await client
      .from('reviews')
      .select('*')
      .eq('status', 'aprovado')
      .order('created_at', { ascending: false });

    if (error) {
      console.error('[Supabase] Error fetching approved reviews:', error);
      return [];
    }

    return (data || []) as Review[];
  } catch (error) {
    console.error('[Supabase] Exception fetching approved reviews:', error);
    return [];
  }
}

export async function getPendingReviews(): Promise<Review[]> {
  try {
    const client = getSupabaseClient();
    if (!client) throw new Error('Supabase client not initialized');

    const { data, error } = await client
      .from('reviews')
      .select('*')
      .eq('status', 'pendente')
      .order('created_at', { ascending: false });

    if (error) {
      console.error('[Supabase] Error fetching pending reviews:', error);
      return [];
    }

    return (data || []) as Review[];
  } catch (error) {
    console.error('[Supabase] Exception fetching pending reviews:', error);
    return [];
  }
}

export async function updateReviewStatus(
  id: string,
  status: 'aprovado' | 'rejeitado'
): Promise<boolean> {
  try {
    const client = getSupabaseClient();
    if (!client) throw new Error('Supabase client not initialized');

    const { error, count } = await client
      .from('reviews')
      .update({ status })
      .eq('id', id)
      .select('id', { count: 'exact', head: true });

    if (error || count === 0) {
      console.error('[Supabase] Error updating review status:', error ?? 'Row not found');
      return false;
    }

    return true;
  } catch (error) {
    console.error('[Supabase] Exception updating review status:', error);
    return false;
  }
}

export async function getReviewStats(): Promise<{
  average: number;
  total: number;
}> {
  try {
    const client = getSupabaseClient();
    if (!client) throw new Error('Supabase client not initialized');

    const { data, error } = await client
      .from('reviews')
      .select('estrelas')
      .eq('status', 'aprovado');

    if (error) {
      console.error('[Supabase] Error fetching review stats:', error);
      return { average: 0, total: 0 };
    }

    const reviews = (data || []) as { estrelas: number }[];
    if (reviews.length === 0) return { average: 0, total: 0 };

    const sum = reviews.reduce((acc, r) => acc + r.estrelas, 0);
    const average = sum / reviews.length;

    return { average: Math.round(average * 10) / 10, total: reviews.length };
  } catch (error) {
    console.error('[Supabase] Exception fetching review stats:', error);
    return { average: 0, total: 0 };
  }
}

// Site Counters
export async function getCounters(): Promise<Record<string, number>> {
  try {
    const client = getSupabaseClient();
    if (!client) throw new Error('Supabase client not initialized');

    const { data, error } = await client
      .from('site_counters')
      .select('tipo, valor');

    if (error) {
      console.error('[Supabase] Error fetching counters:', error);
      return {};
    }

    const counters: Record<string, number> = {};
    (data || []).forEach((counter: any) => {
      counters[counter.tipo] = counter.valor;
    });

    return counters;
  } catch (error) {
    console.error('[Supabase] Exception fetching counters:', error);
    return {};
  }
}

export async function updateCounter(tipo: string, valor: number): Promise<boolean> {
  try {
    const client = getSupabaseClient();
    if (!client) throw new Error('Supabase client not initialized');

    const { error } = await client
      .from('site_counters')
      .update({ valor })
      .eq('tipo', tipo);

    if (error) {
      console.error('[Supabase] Error updating counter:', error);
      return false;
    }

    return true;
  } catch (error) {
    console.error('[Supabase] Exception updating counter:', error);
    return false;
  }
}

export async function incrementCounter(tipo: string): Promise<boolean> {
  try {
    const client = getSupabaseClient();
    if (!client) throw new Error('Supabase client not initialized');

    const { data: current } = await client
      .from('site_counters')
      .select('valor')
      .eq('tipo', tipo)
      .single();

    const newValue = ((current as any)?.valor || 0) + 1;
    return updateCounter(tipo, newValue);
  } catch (error) {
    console.error('[Supabase] Exception incrementing counter:', error);
    return false;
  }
}
