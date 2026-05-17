# CloudFlared

Landing page web hosting Indonesia yang dibangun dengan React 19, TypeScript, Tailwind CSS 4, dan Framer Motion. Dirancang untuk mengkonversi pengunjung menjadi pelanggan hosting melalui tampilan yang cepat, aman, dan terpercaya.

---

## Features

- **Announcement bar** — strip promosi di atas halaman dengan live status dot dan tombol dismiss
- **Sticky header** — transparan di atas hero, berubah menjadi frosted glass saat scroll dengan transisi smooth
- **Active nav indicator** — garis oranye yang meluncur antar link navigasi menggunakan spring physics (Framer Motion `layoutId`)
- **Domain finder** — input pencarian domain dengan TLD picker (`.com`, `.id`, `.co.id`, `.net`, `.org`) langsung di hero
- **Hero floating chips** — tiga chip SSL/uptime/lokasi yang melayang di sekitar ilustrasi server
- **Pricing toggle** — animasi pill sliding antara Bulanan dan Tahunan, harga flip vertikal saat berganti siklus
- **Feature section** — satu hero card besar (NVMe + LiteSpeed dengan SpeedMeter visual) dan tiga secondary card horizontal
- **Infrastructure section** — ilustrasi cloud globe dengan animasi floating
- **FAQ accordion** — enam pertanyaan umum pasar Indonesia dengan animasi height collapse
- **CTA section** — orange card yang membelah seam antara section putih dan footer navy
- **Responsive** — mobile-first, breakpoint sm/lg/xl
- **Aksesibilitas** — ARIA attributes, keyboard navigation, `prefers-reduced-motion` support penuh

---

## Tech Stack

| Kategori | Teknologi |
|---|---|
| Framework | React 19 |
| Language | TypeScript 6 |
| Build Tool | Vite 8 |
| Styling | Tailwind CSS 4 (Vite plugin) |
| Animation | Framer Motion 12 |
| Icons | Lucide React |
| Font | Plus Jakarta Sans (`@fontsource`) |
| Linting | ESLint 10 + typescript-eslint + react-hooks |
| Package Manager | npm |

---

## Project Structure

```
src/
├── App.tsx                          # Orchestrator (49 baris)
├── index.css                        # Global resets + Tailwind theme tokens
├── main.tsx                         # Entry point
│
├── assets/                          # Gambar dan ilustrasi
│
├── components/
│   ├── layout/
│   │   ├── AnnouncementBar.tsx      # Strip promosi atas halaman
│   │   ├── Header.tsx               # Fixed sticky header dengan scroll detection
│   │   ├── MobileMenu.tsx           # Dropdown mobile dengan AnimatePresence
│   │   ├── Footer.tsx               # Footer dengan newsletter form
│   │   └── Footer.css               # Background pattern footer (co-located)
│   │
│   ├── sections/
│   │   ├── HeroSection/
│   │   │   ├── index.tsx            # Section hero utama
│   │   │   ├── DomainFinder.tsx     # Form pencarian domain + TLD picker
│   │   │   ├── HeroFloatingChips.tsx # Chip SSL/uptime/lokasi floating
│   │   │   ├── HeroStats.tsx        # Stats strip 4-kolom
│   │   │   └── Hero.css             # bg-cloud-hero, hero-grid, stat-divider
│   │   ├── PricingSection/
│   │   │   ├── index.tsx            # Section harga (owns billingCycle state)
│   │   │   ├── BillingToggle.tsx    # Toggle Bulanan/Tahunan dengan layoutId
│   │   │   └── PricingCard.tsx      # Kartu paket dengan price flip animation
│   │   ├── FeatureSection/
│   │   │   ├── index.tsx            # Section fitur
│   │   │   ├── HeroFeatureCard.tsx  # Card besar NVMe + LiteSpeed
│   │   │   └── SpeedMeterVisual.tsx # Visual benchmark dengan SVG sparkline
│   │   ├── InfrastructureSection.tsx
│   │   ├── TestimonialsSection.tsx
│   │   ├── FaqSection.tsx
│   │   └── CtaSection/
│   │       ├── index.tsx
│   │       └── Cta.css              # Background pattern CTA (co-located)
│   │
│   └── ui/
│       ├── Container.tsx            # Page-level container component
│       ├── container.styles.ts      # containerClass string
│       ├── SectionLabel.tsx         # Pill eyebrow label
│       └── IconBadge.tsx            # Icon circle badge (chip/surface/soft)
│
├── data/                            # Semua konten statis, terpisah dari UI
│   ├── types.ts                     # Shared TypeScript types
│   ├── nav.ts                       # Navigation links
│   ├── pricing.ts                   # Paket harga + cycle helpers
│   ├── features.ts                  # Hero feature, features, stats, trust badges
│   ├── infrastructure.ts            # Infrastructure benefits
│   ├── testimonials.ts              # Testimonial data
│   ├── faq.ts                       # FAQ items
│   └── footer.ts                    # Footer columns
│
├── hooks/
│   ├── useScrollSpy.ts              # IntersectionObserver active section
│   ├── useScrollPosition.ts         # Scroll threshold boolean
│   ├── useEscapeKey.ts              # Escape key handler
│   └── useOutsideClick.ts           # Outside click handler (multi-ref)
│
└── lib/
    ├── motion.ts                    # Animation factories + spring presets
    └── format.ts                    # formatRupiah (Intl.NumberFormat id-ID)
```

---

## Installation

### Prerequisites

- Node.js 18+
- npm 9+

### Setup

```bash
# Clone repository
git clone https://github.com/nazxf/cloudflared.git
cd cloudflared

# Install dependencies
npm install

# Jalankan development server
npm run dev
```

Buka [http://localhost:5173](http://localhost:5173) di browser.

---

## Available Scripts

| Script | Deskripsi |
|---|---|
| `npm run dev` | Jalankan Vite dev server dengan HMR |
| `npm run build` | Type-check dengan `tsc -b`, lalu bundle production ke `dist/` |
| `npm run lint` | Jalankan ESLint di seluruh project |
| `npm run preview` | Serve hasil build production secara lokal |

---

## Animation System

Semua konfigurasi animasi terpusat di `src/lib/motion.ts`:

```ts
// Easing curves
export const softEase: Ease = [0.16, 1, 0.3, 1]
export const floatEase: Ease = [0.45, 0, 0.55, 1]

// Spring presets
export const springs = {
  snappy: { type: 'spring', stiffness: 420, damping: 34, mass: 0.7 },
  fluid:  { type: 'spring', stiffness: 380, damping: 32 },
  fast:   { type: 'spring', stiffness: 500, damping: 36, mass: 0.6 },
}

// Factory functions (respects prefers-reduced-motion)
createFadeUp(reduceMotion)     // whileInView reveal untuk sections
createHeroFade(reduceMotion)   // animate-on-mount untuk hero
createFloatingMotion(reduceMotion) // infinite float loop
```

Semua animasi menghormati `prefers-reduced-motion` — durasi di-set ke `0` dan jarak ke `0` saat user mengaktifkan reduced motion di OS.

---

## Design System

Warna, tipografi, dan shadow token didefinisikan di `src/index.css` via Tailwind `@theme`:

```css
@theme {
  --color-cloud-orange: #ff5f00;
  --color-cloud-orange-2: #ff7a1a;
  --color-cloud-navy: #0f1830;
  --color-cloud-muted: #647084;
  --color-cloud-line: #e7ebf3;
  --shadow-cloud-card: 0 22px 60px rgba(15, 24, 48, 0.08);
  --shadow-cloud-orange: 0 18px 44px rgba(255, 95, 0, 0.24);
}
```

Font: **Plus Jakarta Sans** (weight 400–800) via `@fontsource/plus-jakarta-sans`.

---

## Content Management

Semua konten halaman (copy, harga, FAQ, testimoni) ada di `src/data/` sebagai TypeScript statis. Untuk mengubah konten tanpa menyentuh komponen:

| File | Konten |
|---|---|
| `src/data/pricing.ts` | Nama paket, harga, fitur, diskon tahunan |
| `src/data/faq.ts` | Pertanyaan dan jawaban FAQ |
| `src/data/testimonials.ts` | Kutipan, nama, role pelanggan |
| `src/data/features.ts` | Fitur unggulan, stats hero, trust badges |
| `src/data/nav.ts` | Link navigasi |
| `src/data/footer.ts` | Kolom footer |

---

## Deployment

Project ini adalah static site — output `dist/` bisa di-deploy ke platform manapun yang mendukung static hosting.

### Vercel

```bash
npm run build
# Deploy folder dist/ ke Vercel
```

Atau connect repository ke Vercel dan set build command:

```
Build Command:  npm run build
Output Dir:     dist
```

### Netlify

```bash
npm run build
# Deploy folder dist/ ke Netlify
```

### Cloudflare Pages

```
Build Command:  npm run build
Build Output:   dist
```

### Manual / VPS

```bash
npm run build
# Upload isi folder dist/ ke web server (nginx/apache)
```

---

## Path Alias

Project menggunakan `@/` sebagai alias untuk `src/`:

```ts
// Sebelum
import { Header } from '../../../components/layout/Header'

// Sesudah
import { Header } from '@/components/layout/Header'
```

Dikonfigurasi di `tsconfig.app.json` dan `vite.config.ts`.

---

## Contributing

1. Fork repository ini
2. Buat branch baru: `git checkout -b feature/nama-fitur`
3. Commit perubahan: `git commit -m 'feat: tambah fitur X'`
4. Push ke branch: `git push origin feature/nama-fitur`
5. Buat Pull Request ke `main`

### Panduan

- Jalankan `npm run lint` sebelum commit — PR dengan lint error tidak akan di-merge
- Jalankan `npm run build` untuk memastikan tidak ada TypeScript error
- Konten halaman diubah di `src/data/`, bukan di dalam komponen
- Animasi baru menggunakan preset dari `src/lib/motion.ts`
- CSS section-specific di-co-locate di folder section masing-masing (bukan di `index.css`)

---

## License

MIT License — lihat file [LICENSE](LICENSE) untuk detail.
