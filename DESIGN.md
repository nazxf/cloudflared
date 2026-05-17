---
name: CloudFlared
description: Fast, secure Indonesian web hosting landing page with a bright orange cloud identity.
colors:
  cloud-orange: "#ff5f00"
  cloud-orange-soft: "#ff7a1a"
  cloud-navy: "#0f1830"
  cloud-muted: "#647084"
  cloud-line: "#e7ebf3"
  cloud-warm-bg: "#fff8f0"
  cloud-white: "#ffffff"
typography:
  display:
    fontFamily: "Plus Jakarta Sans, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(2.625rem, 5vw, 4.375rem)"
    fontWeight: 900
    lineHeight: 1.06
    letterSpacing: "0"
  headline:
    fontFamily: "Plus Jakarta Sans, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(2rem, 3.4vw, 2.75rem)"
    fontWeight: 900
    lineHeight: 1.15
    letterSpacing: "0"
  body:
    fontFamily: "Plus Jakarta Sans, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 500
    lineHeight: 1.75
  label:
    fontFamily: "Plus Jakarta Sans, ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 800
    lineHeight: 1.3
rounded:
  sm: "6px"
  md: "8px"
  full: "999px"
spacing:
  xs: "8px"
  sm: "12px"
  md: "20px"
  lg: "32px"
  xl: "48px"
components:
  button-primary:
    backgroundColor: "{colors.cloud-orange}"
    textColor: "{colors.cloud-white}"
    rounded: "{rounded.md}"
    padding: "0 28px"
    height: "54px"
  button-secondary:
    backgroundColor: "{colors.cloud-white}"
    textColor: "{colors.cloud-navy}"
    rounded: "{rounded.md}"
    padding: "0 28px"
    height: "54px"
  badge:
    backgroundColor: "{colors.cloud-white}"
    textColor: "{colors.cloud-orange}"
    rounded: "{rounded.full}"
    padding: "8px 16px"
---

# Design System: CloudFlared

## 1. Overview

**Creative North Star: "Friendly Infrastructure Console"**

CloudFlared should feel like hosting infrastructure made approachable: bright enough to signal speed, structured enough to signal reliability, and calm enough to make security feel credible. The interface uses white technical space, orange energy, navy authority, and polished 3D cloud/server imagery.

The system rejects generic SaaS decoration. No purple gradients, no dark hacker mood, no random floating cards, no overstuffed feature grids. Every visual element should help visitors believe the service is fast, secure, and ready for business.

**Key Characteristics:**
- White and warm off-white surfaces with orange action points.
- Large, heavy sans-serif headings with concise Indonesian copy.
- Rounded 8px controls, soft shadows, and visible trust markers.
- Cloud, server, lock, shield, uptime, and support motifs as product evidence.

## 2. Colors

The palette is a committed orange-and-navy system: orange creates momentum, navy anchors trust, and warm white keeps the page clean.

### Primary
- **CloudFlared Orange** (#ff5f00): Primary CTA, active navigation, brand emphasis, icon accents, and high-value badges.
- **Warm Orange Lift** (#ff7a1a): Hover states, glow, gradients inside orange surfaces, and subtle dimensional highlights.

### Neutral
- **Infrastructure Navy** (#0f1830): Headings, stat numbers, high-emphasis labels, and icon strokes.
- **Operational Muted Slate** (#647084): Body text, supporting labels, and secondary descriptions.
- **Soft Interface Line** (#e7ebf3): Borders, dividers, and card separation.
- **Warm Hosting Surface** (#fff8f0): Section transitions, hero warmth, and pricing area background.
- **Clean Service White** (#ffffff): Main surfaces, cards, controls, and open hero space.

### Named Rules

**The Orange Means Action Rule.** Use orange for conversion, brand emphasis, and trust icons. Do not scatter it randomly across body copy.

**The Navy Holds Trust Rule.** Important claims, prices, and headings should use navy rather than black.

## 3. Typography

**Display Font:** Plus Jakarta Sans with system sans fallback  
**Body Font:** Plus Jakarta Sans with system sans fallback  
**Label/Mono Font:** Plus Jakarta Sans; do not introduce monospace unless a real technical code surface appears.

**Character:** The type is rounded, compact, and friendly, matching a modern Indonesian tech service. Use strong weight contrast instead of decorative font switching.

### Hierarchy
- **Display** (900, clamp(2.625rem, 5vw, 4.375rem), 1.06): Hero headline and first-screen selling proposition.
- **Headline** (900, clamp(2rem, 3.4vw, 2.75rem), 1.15): Section headings and major conversion blocks.
- **Title** (800-900, 1.125rem-1.5rem, 1.25): Pricing cards, feature names, trust badges, and stats.
- **Body** (500-600, 1rem, 1.75): Supporting copy, descriptions, and explanatory text. Keep lines below 75ch.
- **Label** (800, 0.75rem-0.875rem, 1.3): Navigation, badges, small CTAs, and compact metadata.

### Named Rules

**No Tiny UI Soup.** If text appears in a badge, pricing card, or stat strip, it must remain legible at mobile widths.

## 4. Elevation

Elevation is soft and ambient, used to separate conversion surfaces without making the page feel card-heavy. Shadows should feel like studio light on white hardware, not floating glass panels.

- **Card Shadow:** `0 22px 60px rgba(15, 24, 48, 0.08)` for pricing, stats, and important white panels.
- **Orange Action Shadow:** `0 18px 44px rgba(255, 95, 0, 0.24)` for primary CTA.
- **Hero Image Shadow:** large soft drop shadows are acceptable on generated 3D infrastructure assets.

## 5. Components

**Header:** Absolute top header on the landing page. Logo left, compact nav center, login and primary CTA right. Mobile collapses to a single square menu button.

**Primary Button:** Orange fill, white text, 8px radius, strong weight, icon on the right. Use for "Mulai Sekarang" and high-confidence actions.

**Secondary Button:** White fill, navy text, thin line border, 8px radius, icon on the right. Use for package browsing or lower-commitment actions.

**Trust Badge:** Small icon plus title and description. Use to make uptime, SSL, and support visible without creating a full card grid.

**Stats Strip:** Horizontal white panel with four scan-friendly metrics. Use separators sparingly and remove them on narrow screens.

**Pricing Card:** White card with clear package name, price, feature checklist, and CTA. The featured plan can use orange top treatment, but avoid making every card equally loud.

## 6. Do's and Don'ts

**Do:**
- Use cloud/server/security imagery as the main visual language.
- Keep the first fold conversion-focused.
- Make CTAs large enough for touch and easy scanning.
- Use warm white backgrounds instead of harsh pure-gray sections.
- Keep Indonesian copy direct and benefit-led.

**Don't:**
- Do not use purple-blue gradients or generic SaaS blobs.
- Do not use gradient text.
- Do not nest cards inside cards.
- Do not make icon grids the whole design.
- Do not rely on long paragraphs to explain hosting value.
