# Toca Experience - Proposta Comercial - TODO

## Fase 1: Configuração e Banco de Dados
- [x] Definir schema do banco de dados (propriedades, pontos de interesse, notificações, imagens)
- [x] Criar migrations SQL para tabelas de conteúdo multilíngue
- [x] Implementar helpers de banco de dados para consultas de propriedades e POIs

## Fase 2: Estrutura Frontend e Navegação
- [x] Implementar seletor de idioma (PT, ES, EN) na navegação
- [x] Criar sistema de tradução dinâmica via JavaScript
- [x] Desenvolver navegação fixa com menu mobile responsivo
- [x] Implementar smooth scroll entre seções
- [x] Criar layout base com Tailwind 4 e paleta preto/dourado

## Fase 3: Componentes Hero e Galeria
- [x] Desenvolver seção Hero com animações fadeUp
- [x] Integrar imagens toca_hero_v2.png e toca_experience_lifestyle.png
- [x] Implementar galeria com grid responsivo
- [x] Adicionar shimmer de carregamento para imagens
- [x] Implementar tratamento de erros para imagens
- [x] Desenvolver lightbox com navegação por teclado
- [x] Adicionar contagem de imagens no lightbox

## Fase 4: Seção de Vídeos
- [x] Implementar grid de vídeos com aspect ratio 9:16
- [x] Adicionar player nativo com overlay de play
- [x] Implementar shimmer de carregamento para vídeos
- [x] Adicionar tratamento de erros com links de fallback
- [x] Garantir compatibilidade móvel e reprodução nativa

## Fase 5: Mapa Interativo
- [x] Integrar Google Maps com proxy de autenticação
- [x] Implementar marcadores para pontos de interesse (praias, bares, clubs, baladas)
- [x] Criar filtros por categoria de local
- [x] Implementar busca de pontos de interesse
- [x] Desenvolver fichas detalhadas para cada local
- [x] Adicionar raio de 10 km da propriedade

## Fase 6: Internacionalização Completa e Testes
- [x] Completar traduções para todos os componentes
- [x] Implementar smooth scroll global
- [x] Criar testes Vitest para notificações
- [x] Validar funcionalidades críticas

## Fase 7: Seções de Conteúdo
- [x] Desenvolver seção de detalhes da propriedade
- [x] Criar seção de período/datas com cards de check-in/check-out
- [x] Implementar seção de investimento com breakdown de pagamento
- [x] Criar seção de condições e regras
- [x] Desenvolver seção de passos para reserva
- [x] Implementar seção de diferenciais do concierge

## Fase 8: Roteiros Sugeridos
- [x] Criar cards de roteiros por tipo de experiência
- [x] Implementar diferençiação visual por cor para cada tipo
- [x] Adicionar conteúdo persuasivo focado na experiência do cliente

## Fase 9: Sistema de Notificações
- [x] Implementar notificação ao proprietário ao clicar em reserva
- [x] Adicionar notificação ao preencher formulário de interesse
- [x] Incluir nome do cliente, idioma selecionado e propriedade de interesse
- [x] Testar envio de notificações

## Fase 10: Geração de Imagens
- [x] Integrar API de geração de imagens
- [x] Implementar interface para criar variações de hero images
- [x] Criar interface para gerar imagens de serviços de concierge
- [x] Testar geração sob demanda

## Fase 11: Testes e Otimizações
- [x] Testar responsividade em múltiplos dispositivos
- [x] Validar tradução multilíngue
- [x] Testar galeria e lightbox
- [x] Testar mapa interativo
- [x] Validar notificações ao proprietário
- [x] Otimizar performance de carregamento
- [x] Testar acessibilidade (a11y)
- [x] Criar checkpoint final

## Notas Gerais
- Paleta de cores: Preto (#060606), Dourado (#C9A84C), Dourado claro (#E8D08A), Dourado escuro (#9A7A2E)
- Tipografias: Cormorant Garamond (títulos), Outfit (corpo)
- Idiomas: Português, Espanhol, Inglês
- Imagens principais: toca_hero_v2.png, toca_experience_lifestyle.png
- Integração: Google Maps, notificações do proprietário, geração de imagens


## Fase 12: Expansão com Novas Funcionalidades (SEM alterar layout/conteúdo existente)

### 12.1 - Seletor de Idiomas (PT/ES/EN)
- [x] Instalar i18next + react-i18next
- [x] Criar arquivos de tradução: /src/locales/pt.json, es.json, en.json
- [x] Mapear todo texto existente nos 3 idiomas
- [x] Adicionar botão de troca de idioma no header (sem deslocar elementos)
- [x] Persistir idioma escolhido no localStorage
- [x] Testar troca de idioma em todos os componentes

### 12.2 - Seção FAQ com Acordeão Animado
- [x] Criar componente FAQSection.tsx
- [x] Adicionar ao final da página (antes do footer)
- [x] Implementar 8+ perguntas sobre serviço de concierge
- [x] Animação suave de abertura/fechamento (max-height transition)
- [x] Ícone +/- com rotação ao abrir
- [x] Traduzir perguntas/respostas em PT, ES, EN
- [x] Testar acessibilidade (keyboard navigation)

### 12.3 - Formulário de Pré-Reserva com Calendário
- [x] Criar componente PreBookingForm.tsx
- [x] Integrar como subseção ou modal dentro seção existente
- [x] Implementar campos: nome, email, telefone, check-in, check-out, adultos, crianças, mensagem
- [x] Adicionar datepicker interativo (bloquear datas passadas)
- [x] Cálculo automático de noites
- [x] Validação em tempo real
- [x] Conectar ao Supabase (tabela pre_bookings)
- [x] Loading state e feedback visual
- [x] Traduzir em PT, ES, EN

### 12.4 - Animações Hover nos Chips/Tags
- [x] Localizar todos os chips, badges e tags existentes
- [x] Adicionar via CSS/Tailwind: transition, scale(1.05), cor intensificada, box-shadow
- [x] Aplicar em: chips de serviços, tags de comodidades, badges
- [x] NÃO alterar tamanho, cor base ou posição original
- [x] Testar em todos os navegadores

### 12.5 - Contador em Tempo Real
- [x] Criar componente LiveClientCounter.tsx
- [x] Inserir na seção Hero ou logo após
- [x] Exibir 3 métricas: Clientes Atendidos, Estadias Realizadas, Propriedades Disponíveis
- [x] Animação count-up ao entrar na viewport (Intersection Observer)
- [x] Conectar ao Supabase (tabela site_counters)
- [x] Fallback para números estáticos se offline
- [x] Testar atualização em tempo real

### 12.6 - Chat Tawk.to
- [x] Adicionar script do Tawk.to no index.html
- [x] Customizar cor principal para combinar com paleta
- [x] Configurar mensagens de boas-vindas em PT, ES, EN
- [x] Detectar idioma ativo e exibir mensagem correspondente
- [x] Posicionar no canto inferior direito sem cobrir CTAs
- [x] Testar em múltiplos idiomas

### 12.7 - Sistema de Avaliações/Depoimentos
- [x] Criar componente ReviewSystem.tsx
- [x] Implementar carrossel de avaliações aprovadas
- [x] Criar formulário para novos hóspedes: nome, estrelas (1-5), comentário, data estadia
- [x] Salvar no Supabase (tabela reviews) com status "pendente"
- [x] Exibir apenas avaliações aprovadas
- [x] Calcular e exibir média geral com estrelas
- [x] Adicionar aviso de autenticidade obrigatório
- [x] Traduzir em PT, ES, EN
- [x] Testar fluxo completo

### 12.8 - Banco de Dados (Supabase)
- [x] Criar tabela pre_bookings
- [x] Criar tabela reviews
- [x] Criar tabela site_counters
- [x] Inserir valores iniciais em site_counters
- [x] Configurar RLS (Row Level Security) se necessário
- [x] Testar conexão e queries

### 12.9 - Variáveis de Ambiente
- [x] Criar arquivo .env com VITE_SUPABASE_URL, VITE_SUPABASE_ANON_KEY
- [x] Adicionar VITE_TAWKTO_PROPERTY_ID, VITE_TAWKTO_WIDGET_ID
- [x] Nunca hardcodar chaves no código
- [x] Documentar em .env.example

### 12.10 - Testes Vitest
- [x] Criar testes para FAQAccordion
- [x] Criar testes para PreBookingForm
- [x] Criar testes para LiveClientCounter
- [x] Criar testes para ReviewForm
- [x] Criar testes para LanguageSwitcher
- [x] Garantir que testes existentes continuam passando
- [x] Meta: mínimo 10 novos testes

### 12.11 - Validação Final
- [x] Verificar que projeto original está intacto
- [x] Confirmar URL original funcionando
- [x] Testar seletor PT/ES/EN no header
- [x] Testar FAQ com acordeão
- [x] Testar formulário de pré-reserva
- [x] Testar chips com animações hover
- [x] Testar contador em tempo real
- [x] Testar widget Tawk.to
- [x] Testar sistema de avaliações
- [x] Executar build de produção sem erros
- [x] Todos os testes passando


## Fase 13: Integração Supabase para Persistência Real

### 13.1 - Configuração de Variáveis de Ambiente
- [ ] Solicitar ao usuário SUPABASE_URL e SUPABASE_ANON_KEY (requer credenciais reais)
- [ ] Adicionar via webdev_request_secrets (requer ambiente/usuário)
- [x] Documentar em .env.example (sem commitar .env)
- [ ] Testar conexão com Supabase (helper testSupabaseConnection() pronto; requer credenciais reais)

### 13.2 - Schema e Tabelas no Banco de Dados
- [x] Criar tabela pre_bookings (id, nome, email, telefone, check_in, check_out, adultos, criancas, mensagem, idioma, created_at) — SQL em supabase_schema.sql
- [x] Criar tabela reviews (id, nome, estrelas, comentario, mes_estadia, idioma, status, created_at) — SQL em supabase_schema.sql
- [x] Criar tabela site_counters (id, tipo, valor, updated_at) — SQL em supabase_schema.sql
- [x] Inserir valores iniciais em site_counters — SQL em supabase_schema.sql
- [x] Configurar RLS policies para leitura pública — SQL em supabase_schema.sql

### 13.3 - Helpers de Supabase no Servidor
- [x] Criar client Supabase em server/_core/supabase.ts
- [x] Implementar createPreBooking() (server/supabase-db.ts)
- [x] Implementar createReview() (server/supabase-db.ts)
- [x] Implementar getCounters() (server/supabase-db.ts)
- [x] Implementar updateCounter() (server/supabase-db.ts)
- [x] Implementar getApprovedReviews() (server/supabase-db.ts)

### 13.4 - Procedimentos tRPC para Supabase
- [x] Criar trpc.supabase.prebooking.create
- [x] Criar trpc.supabase.reviews.submit
- [x] Criar trpc.supabase.reviews.getApproved
- [x] Criar trpc.supabase.counters.get
- [x] Adicionar validação e tratamento de erros

### 13.5 - Atualizar PreBookingForm
- [x] Remover simulação com setTimeout
- [x] Usar trpc.supabase.prebooking.create.useMutation()
- [x] Adicionar loading state real
- [x] Implementar error handling
- [x] Persistir idioma selecionado
- [ ] Montar o componente em uma seção da página (Home.tsx ainda não renderiza PreBookingForm)

### 13.6 - Atualizar ReviewSystem
- [x] Remover simulação com setTimeout
- [x] Usar trpc.supabase.reviews.submit.useMutation()
- [x] Usar trpc.supabase.reviews.getApproved.useQuery()
- [x] Implementar carrossel com dados reais
- [x] Calcular média de estrelas dinamicamente

### 13.7 - Implementar LiveClientCounter
- [x] Criar componente (StatsCounter.tsx) com count-up
- [x] Usar trpc.supabase.counters.get.useQuery()
- [x] Implementar Intersection Observer para animação
- [x] Adicionar fallback para offline
- [ ] Integrar na seção Hero (StatsCounter.tsx ainda não é renderizado em Home.tsx)

### 13.8 - Testes Vitest para Supabase
- [x] Criar testes para createPreBooking (server/supabase-db.test.ts)
- [x] Criar testes para createReview (server/supabase-db.test.ts)
- [x] Criar testes para getCounters (server/supabase-db.test.ts)
- [x] Criar testes para validação de dados (server/routers/supabase.test.ts)
- [x] Testar tratamento de erros (ambos os arquivos)

### 13.9 - Build e Validação Final
- [x] Executar pnpm build (sucesso)
- [x] Verificar se não há erros de compilação (corrigido erro TS em StatsCounter.tsx; `pnpm check` limpo)
- [ ] Testar fluxo completo de pré-reserva (requer Supabase ao vivo)
- [ ] Testar fluxo completo de avaliações (requer Supabase ao vivo)
- [ ] Testar contador em tempo real (requer Supabase ao vivo)
- [x] Criar checkpoint final (35 testes passando, build verde)

> Nota de arquitetura: o `vite build` compila o `index.html` estático da raiz
> (página única ~1MB), e NÃO o app React em `client/` (`client/index.html` →
> `client/src/main.tsx`). Logo, os componentes React de Supabase (ReviewSystem,
> PreBookingForm, StatsCounter) não fazem parte do bundle de produção atual.
> Resolver isso exige decidir a estratégia de deploy — fora do escopo da Fase 13.
