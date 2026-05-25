-- Tabela de pré-reservas
CREATE TABLE IF NOT EXISTS pre_bookings (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  nome TEXT NOT NULL,
  email TEXT NOT NULL,
  telefone TEXT NOT NULL,
  check_in DATE NOT NULL,
  check_out DATE NOT NULL,
  adultos INTEGER NOT NULL,
  criancas INTEGER DEFAULT 0,
  mensagem TEXT,
  idioma VARCHAR(5) DEFAULT 'pt',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Tabela de avaliações
CREATE TABLE IF NOT EXISTS reviews (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  nome TEXT NOT NULL,
  estrelas INTEGER NOT NULL CHECK (estrelas >= 1 AND estrelas <= 5),
  comentario TEXT NOT NULL,
  mes_estadia VARCHAR(20),
  idioma VARCHAR(5) DEFAULT 'pt',
  status VARCHAR(20) DEFAULT 'pendente' CHECK (status IN ('pendente', 'aprovado', 'rejeitado')),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Tabela de contadores
CREATE TABLE IF NOT EXISTS site_counters (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  tipo VARCHAR(50) NOT NULL UNIQUE,
  valor INTEGER DEFAULT 0,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Índices para performance
CREATE INDEX IF NOT EXISTS idx_pre_bookings_email ON pre_bookings(email);
CREATE INDEX IF NOT EXISTS idx_pre_bookings_created_at ON pre_bookings(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_reviews_status ON reviews(status);
CREATE INDEX IF NOT EXISTS idx_reviews_created_at ON reviews(created_at DESC);

-- RLS Policies
ALTER TABLE pre_bookings ENABLE ROW LEVEL SECURITY;
ALTER TABLE reviews ENABLE ROW LEVEL SECURITY;
ALTER TABLE site_counters ENABLE ROW LEVEL SECURITY;

-- Policy: Qualquer um pode inserir pré-reservas
CREATE POLICY "Allow insert pre_bookings" ON pre_bookings
  FOR INSERT WITH CHECK (true);

-- Policy: Qualquer um pode ver pré-reservas (para admin)
CREATE POLICY "Allow select pre_bookings" ON pre_bookings
  FOR SELECT USING (true);

-- Policy: Qualquer um pode inserir avaliações
CREATE POLICY "Allow insert reviews" ON reviews
  FOR INSERT WITH CHECK (true);

-- Policy: Qualquer um pode ver avaliações aprovadas
CREATE POLICY "Allow select approved reviews" ON reviews
  FOR SELECT USING (status = 'aprovado');

-- Policy: Qualquer um pode ver contadores
CREATE POLICY "Allow select counters" ON site_counters
  FOR SELECT USING (true);

-- Inserir valores iniciais de contadores
INSERT INTO site_counters (tipo, valor) VALUES
  ('clientes_satisfeitos', 500),
  ('reservas_realizadas', 150),
  ('taxa_satisfacao', 98)
ON CONFLICT (tipo) DO NOTHING;

-- Função para atualizar updated_at automaticamente
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Triggers para atualizar updated_at
CREATE TRIGGER update_pre_bookings_updated_at
  BEFORE UPDATE ON pre_bookings
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_reviews_updated_at
  BEFORE UPDATE ON reviews
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_site_counters_updated_at
  BEFORE UPDATE ON site_counters
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();
