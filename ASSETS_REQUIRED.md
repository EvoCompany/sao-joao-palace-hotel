# Imagens Necessárias — Acordes Apart Hotel

Todos os arquivos devem ser colocados em `public/images/hotel/`.

Formato preferido: `.webp` para melhor performance.

| Arquivo | Proporção | Uso | Seção |
|---|---|---|---|
| `hero.webp` | 16:9 (mínimo 1920×1080) | Hero principal (desktop) | Hero |
| `hero-mobile.webp` | 4:5 (mínimo 800×1000) | Hero principal (mobile) | Hero |
| `standard-01.webp` | 4:3 (mínimo 1200×900) | Quarto Standard — imagem principal | Acomodações |
| `standard-02.webp` | 4:3 (mínimo 1200×900) | Quarto Standard — imagem secundária | Acomodações |
| `superluxo-01.webp` | 4:3 (mínimo 1200×900) | Quarto Superluxo — imagem principal | Acomodações |
| `superluxo-02.webp` | 4:3 (mínimo 1200×900) | Quarto Superluxo — imagem secundária | Acomodações |
| `reception.webp` | 4:5 (mínimo 900×1125) | Recepção / área comum | Sobre |
| `breakfast.webp` | 3:2 (mínimo 1200×800) | Café da manhã | Café da manhã |
| `facade.webp` | 16:9 (mínimo 1920×1080) | Fachada do hotel — fundo do CTA final | Final CTA |
| `long-stay.webp` | 4:3 (mínimo 1200×900) | Quarto para estadia prolongada | Estadias Prolongadas |

## Notas

- Sem imagens, o site exibe placeholders com fundo bege (cor `#d6cfc4`) com label do arquivo.
- O build funciona mesmo sem as imagens — não há erros em produção.
- As imagens são carregadas com `unoptimized={true}` no componente `HotelImage`, portanto não passam pelo otimizador do Next.js. Remova essa flag após subir as imagens reais se quiser otimização automática.
