---
version: alpha
name: Editorial Ledger
description: Warm-light editorial design system for jamesrmccarthy.ai — operator credibility, Braemont-scale whitespace, typography-only hero.
status: final
updated: 2026-06-19
colors:
  canvas: '#faf8f4'
  canvas-dim: '#f0ece4'
  surface: '#ffffff'
  ink: '#1a1917'
  ink-muted: '#6b6560'
  ink-subtle: '#9a948c'
  rule: '#e8e4dc'
  rule-strong: '#d9d4cb'
  accent: '#245656'
  accent-hover: '#1a4242'
  accent-muted: '#3d6b6b'
  accent-on: '#faf8f4'
  focus-ring: '#245656'
  focus-ring-offset: '#faf8f4'
typography:
  display-hero:
    fontFamily: Libre Caslon Text
    fontSize: 88px
    fontWeight: '400'
    lineHeight: '0.95'
    letterSpacing: -0.025em
  display-hero-mobile:
    fontFamily: Libre Caslon Text
    fontSize: 52px
    fontWeight: '400'
    lineHeight: '0.98'
    letterSpacing: -0.02em
  display-name:
    fontFamily: Libre Caslon Text
    fontSize: 56px
    fontWeight: '400'
    lineHeight: '1.05'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Libre Caslon Text
    fontSize: 36px
    fontWeight: '400'
    lineHeight: '1.15'
    letterSpacing: -0.015em
  headline-md:
    fontFamily: Libre Caslon Text
    fontSize: 28px
    fontWeight: '400'
    lineHeight: '1.2'
  headline-sm:
    fontFamily: Libre Caslon Text
    fontSize: 22px
    fontWeight: '400'
    lineHeight: '1.3'
  body-lg:
    fontFamily: DM Sans
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.7'
    letterSpacing: 0.01em
  body-md:
    fontFamily: DM Sans
    fontSize: 17px
    fontWeight: '400'
    lineHeight: '1.68'
  body-sm:
    fontFamily: DM Sans
    fontSize: 15px
    fontWeight: '400'
    lineHeight: '1.6'
  thesis:
    fontFamily: Libre Caslon Text
    fontSize: 24px
    fontWeight: '400'
    lineHeight: '1.42'
    letterSpacing: -0.01em
  thesis-mobile:
    fontFamily: Libre Caslon Text
    fontSize: 20px
    fontWeight: '400'
    lineHeight: '1.45'
  label-legal:
    fontFamily: DM Sans
    fontSize: 14px
    fontWeight: '400'
    lineHeight: '1.4'
    letterSpacing: 0.04em
  label-kicker:
    fontFamily: Libre Caslon Text
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.4'
    letterSpacing: 0
  caption:
    fontFamily: DM Sans
    fontSize: 13px
    fontWeight: '400'
    lineHeight: '1.45'
  nav:
    fontFamily: DM Sans
    fontSize: 15px
    fontWeight: '400'
    lineHeight: '1.4'
  proof-number:
    fontFamily: Libre Caslon Text
    fontSize: 40px
    fontWeight: '400'
    lineHeight: '1'
  proof-number-mobile:
    fontFamily: Libre Caslon Text
    fontSize: 32px
    fontWeight: '400'
    lineHeight: '1'
  proof-headline:
    fontFamily: Libre Caslon Text
    fontSize: 20px
    fontWeight: '400'
    lineHeight: '1.35'
  article-h1:
    fontFamily: Libre Caslon Text
    fontSize: 44px
    fontWeight: '400'
    lineHeight: '1.12'
    letterSpacing: -0.02em
  article-h2:
    fontFamily: Libre Caslon Text
    fontSize: 28px
    fontWeight: '400'
    lineHeight: '1.25'
    letterSpacing: -0.01em
  article-h3:
    fontFamily: Libre Caslon Text
    fontSize: 22px
    fontWeight: '400'
    lineHeight: '1.3'
  article-body:
    fontFamily: DM Sans
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.75'
  contact-email:
    fontFamily: Libre Caslon Text
    fontSize: 28px
    fontWeight: '400'
    lineHeight: '1.3'
rounded:
  none: 0
  sm: 2px
  md: 4px
spacing:
  unit: 8px
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 32px
  2xl: 48px
  3xl: 64px
  4xl: 80px
  5xl: 96px
  6xl: 120px
  gutter-mobile: 24px
  gutter-desktop: 32px
  margin-mobile: 24px
  margin-desktop: 64px
  editorial-gap: 96px
  editorial-gap-mobile: 64px
  measure-narrow: 640px
  measure-prose: 680px
  measure-wide: 1080px
  grid-columns: 12
motion:
  duration-fast: 150ms
  duration-normal: 200ms
  easing: cubic-bezier(0.25, 0.1, 0.25, 1)
components:
  site-header:
    backgroundColor: '{colors.canvas}'
    textColor: '{colors.ink}'
    typography: '{typography.nav}'
    padding: '{spacing.lg} 0'
  site-header-brand:
    typography: '{typography.headline-sm}'
    textColor: '{colors.ink}'
  site-nav-link:
    typography: '{typography.nav}'
    textColor: '{colors.ink-muted}'
  site-nav-link-hover:
    textColor: '{colors.accent}'
  site-nav-link-active:
    textColor: '{colors.accent}'
  hero-display-name:
    typography: '{typography.display-hero}'
    textColor: '{colors.ink}'
  hero-thesis:
    typography: '{typography.thesis}'
    textColor: '{colors.ink}'
  hero-legal-name:
    typography: '{typography.label-legal}'
    textColor: '{colors.ink-muted}'
  section-kicker:
    typography: '{typography.label-kicker}'
    textColor: '{colors.ink-muted}'
  proof-item-number:
    typography: '{typography.proof-number}'
    textColor: '{colors.rule}'
  proof-item-headline:
    typography: '{typography.proof-headline}'
    textColor: '{colors.ink}'
  proof-item-divider:
    backgroundColor: '{colors.rule}'
  text-link:
    typography: '{typography.body-md}'
    textColor: '{colors.accent}'
  text-link-hover:
    textColor: '{colors.accent-hover}'
  editorial-row-title:
    typography: '{typography.headline-sm}'
    textColor: '{colors.ink}'
  editorial-row-meta:
    typography: '{typography.caption}'
    textColor: '{colors.ink-muted}'
  editorial-row-summary:
    typography: '{typography.body-sm}'
    textColor: '{colors.ink-muted}'
  footer:
    typography: '{typography.caption}'
    textColor: '{colors.ink-muted}'
    padding: '{spacing.3xl} 0'
  focus-visible:
    outlineColor: '{colors.focus-ring}'
    outlineOffset: 3px
---

# Editorial Ledger — DESIGN.md

> Visual identity for **jamesrmccarthy.ai** V1. Direction B locked 2026-06-19.  
> Reference mock: `docs/ux/.working/direction-editorial-ledger.html` (spine wins on conflict).

## Brand & Style

**Editorial Ledger** is a warm-light operator property — not a personal brand funnel, not an executive coach site, not a startup landing page. The aesthetic inherits the **discipline** of Braemont Capital (whitespace, hierarchy, calm) applied to a **person** site: credible, findable, restrained.

The register is **editorial minimalism with tactile restraint** — the same philosophy as the BMAD reference *Linen & Logic*, but with stone canvas and deep teal wayfinding instead of tobacco and sun-faded red. Typography carries the brand; color stays quiet.

Target impression: a PE operating partner lands here and thinks *credible operator*, not *side project* or *LinkedIn consultant*.

**Hero V1:** typography-only. No headshot, no AI portrait, no gradient, no animation.

**Employer rule:** Vixxo never appears in visual chrome — only as plain text on `/about`.

## Colors

Palette is warm stone and charcoal ink with a single desaturated teal accent.

| Token | Hex | Role |
|---|---|---|
| `{colors.canvas}` | `#faf8f4` | Page background — warm off-white, never pure `#fff` except `{colors.surface}` inset blocks |
| `{colors.ink}` | `#1a1917` | Primary typography, display name |
| `{colors.ink-muted}` | `#6b6560` | Nav default, kickers, dates, legal name |
| `{colors.ink-subtle}` | `#9a948c` | De-emphasized metadata only |
| `{colors.rule}` | `#e8e4dc` | Hairline dividers inside lists (proof rows, writing index) |
| `{colors.rule-strong}` | `#d9d4cb` | Header/footer boundary when a rule is required |
| `{colors.accent}` | `#245656` | Links, hover nav, active nav, focus rings, proof number hover (optional) |
| `{colors.accent-hover}` | `#1a4242` | Link hover, pressed text-link |

**Accent usage:** teal is **wayfinding only** — inline links, nav active/hover, `:focus-visible` outlines, mailto on contact. Never as section backgrounds, never as hero decoration, never as button fills (there are no filled buttons in V1).

**Contrast:** `{colors.ink}` on `{colors.canvas}` ≈ 14.5:1. `{colors.accent}` on `{colors.canvas}` ≈ 7.2:1. `{colors.ink-muted}` on `{colors.canvas}` ≈ 5.1:1 (AA for body-scale captions ≥ 13px).

If teal fights a specific surface during implementation, fallback accent: warm slate `#5c574f` — same usage rules.

## Typography

Two-font editorial pairing. Load via Google Fonts:

```html
<link href="https://fonts.googleapis.com/css2?family=Libre+Caslon+Text:ital,wght@0,400;0,700;1,400&family=DM+Sans:ital,opsz,wght@0,9..40,400;0,9..40,500;1,9..40,400&display=swap" rel="stylesheet" />
```

| Role | Token | Face | Usage |
|---|---|---|---|
| Display hero | `{typography.display-hero}` | Libre Caslon Text 400 | Stacked `Jim` / `McCarthy` on home — optical sizing, tight leading |
| Thesis | `{typography.thesis}` | Libre Caslon Text 400 | Hero right column; max measure ~28rem |
| Page titles | `{typography.headline-lg}` | Libre Caslon Text 400 | Writing, About, Contact H1 |
| Article H1 | `{typography.article-h1}` | Libre Caslon Text 400 | Essay title (may match headline-lg on mobile) |
| Article H2/H3 | `{typography.article-h2}` / `{typography.article-h3}` | Libre Caslon Text 400 | Long-form section heads |
| Body | `{typography.body-md}` / `{typography.article-body}` | DM Sans 400 | Prose, teasers, contact copy |
| Nav & UI | `{typography.nav}` | DM Sans 400 | Header links, text-links |
| Kickers | `{typography.label-kicker}` | Libre Caslon Text 400 **italic** | Section labels — never all-caps tracked |
| Legal / meta | `{typography.label-legal}` / `{typography.caption}` | DM Sans 400 | James R. McCarthy line, dates, footer |
| Proof numeral | `{typography.proof-number}` | Libre Caslon Text 400 | Ghost index number in `{colors.rule}` |
| Proof line | `{typography.proof-headline}` | Libre Caslon Text 400 | One-line receipt headline |

**Rules:**
- Maximum two weights in view: 400 regular + optional 500 for text-link emphasis only.
- Display titles use **negative letter-spacing**; body uses default or +0.01em.
- Italic reserved for kickers and inline emphasis in prose — not nav, not proof headlines.
- No Inter, Roboto, system-default sans as primary faces.

**Base size:** `html { font-size: 18px }` desktop; `16px` at `max-width: 768px`.

## Layout & Spacing

**Grid:** 12-column fluid editorial grid, max content width `{spacing.measure-wide}` (1080px). Content is **asymmetric by default** — hero uses 7/5 column split desktop; proof block right-aligned to `{spacing.measure-prose}` (680px).

**Measures:**
- `{spacing.measure-narrow}` (640px) — about teaser, contact, long-form prose column
- `{spacing.measure-prose}` (680px) — proof list, writing index
- `{spacing.measure-wide}` (1080px) — page shell, hero grid

**Section rhythm:** Major sections separated by `{spacing.editorial-gap}` (96px desktop / 64px mobile). **Do not** stack identical `padding-block` + `border-top` on every section — that reads as markdown doc. Use whitespace as the primary separator; rules only **within** lists (proof rows, writing rows).

**Margins:** `{spacing.gutter-desktop}` (32px) horizontal inset; `{spacing.gutter-mobile}` (24px) on mobile.

**Hero grid (desktop ≥ 900px):**

```
┌──────────────── 1080px max ─────────────────┐
│ [col 1–7]              [col 8–12]             │
│ James R. McCarthy      (top padding 48px)     │
│ Jim                    Thesis paragraph       │
│ McCarthy               (Libre Caslon 24px)    │
│ (display 88px)                                │
└───────────────────────────────────────────────┘
        ↓ editorial-gap 96px
│ Proof block — width 680px, margin-left: auto  │
```

**Hero grid (mobile):** single column — legal name, stacked name, thesis, then editorial-gap to proof.

## Elevation & Depth

**Flat editorial.** No card shadows, no drop shadows, no elevated surfaces.

Depth is communicated through:
1. **Tonal layering** — `{colors.canvas}` base; optional `{colors.surface}` for future inset panels (unused in V1)
2. **Hairline rules** — `{colors.rule}` 1px horizontal rules inside proof and writing lists only
3. **Typographic scale** — ghost proof numerals recede via `{colors.rule}`; ink advances

**Banned:** box-shadow, gradient overlays, bordered card containers, parallax.

## Shapes

**Architectural sharpness.** Corner radius `{rounded.none}` (0) for all elements in V1. The site is typographic, not component-card based.

If a future form input is added, use `{rounded.sm}` (2px) maximum — never pills, never 8px+ shadcn default.

## Components

### Site header (desktop + mobile)

**Anatomy:** `{spacing.measure-wide}` container · brand link (left) · primary nav (right).

| Element | Spec |
|---|---|
| Brand | `{components.site-header-brand}` — `{site.name}`, links to `/` |
| Nav links | Writing · About · Contact — `{typography.nav}`, `{colors.ink-muted}` |
| Active | `aria-current="page"` → `{colors.accent}`, no underline |
| Hover | `{colors.accent}`, `transition: color {motion.duration-fast}` |
| Focus | 2px `{colors.focus-ring}` outline, `{spacing.xs}` offset |
| Border | Optional 1px `{colors.rule-strong}` bottom on scroll — **omit in V1** for cleaner header |

**Mobile (≤ 768px):** Same horizontal row — brand left, nav right with `{spacing.md}` gap. Nav does **not** collapse to hamburger in V1 (only three links). Reduce nav font to 14px if wrap occurs; allow wrap before hamburger.

### Hero block (home `/` only)

| Element | Spec |
|---|---|
| Legal name | `{typography.label-legal}`, `{colors.ink-muted}`, above display name |
| Display name | Stacked two lines: `Jim` / `McCarthy` — `{typography.display-hero}`, `{colors.ink}` |
| Thesis | Right column (desktop) or below name (mobile) — `{typography.thesis}`, no border, no pull-quote styling |
| CTA | None in hero — no buttons, no "Contact me" |

### Proof editorial list item

**Home:** headline-only (one line). No summary subline — summaries in `proof.ts` are for CMS/future use, not rendered on home.

| Element | Spec |
|---|---|
| Container | `<ol>` semantic list; each `<li>` grid `72px 1fr` gap `{spacing.lg}` |
| Number | `{typography.proof-number}`, `{colors.rule}` — ghost index |
| Headline | `{typography.proof-headline}`, `{colors.ink}` |
| Divider | `border-top: 1px {colors.rule}` between items; no border above first item |
| Hover | Headline `{colors.accent}` — subtle, optional |
| Kicker above list | `{typography.label-kicker}` italic — copy: *Field receipts* (not "PROOF" caps) |

### Section kicker

Italic serif label introducing a home section: *Field receipts*, *About*, *Latest writing*, *Contact*.

**Never:** `text-transform: uppercase`, `letter-spacing: 0.12em`, tracked SaaS labels.

### About teaser block (home)

| Element | Spec |
|---|---|
| Kicker | *About* — italic |
| Body | 2 short paragraphs, `{typography.body-md}`, `{spacing.measure-narrow}` |
| Text link | `Full bio →` — `{components.text-link}` |

No Vixxo mention on home.

### Writing index row

| Element | Spec |
|---|---|
| Layout | Vertical stack: date → title → optional subtitle → description |
| Date | `{typography.caption}`, `{colors.ink-muted}` |
| Title | `{typography.headline-sm}` serif, link inherits ink, hover `{colors.accent}` |
| Description | `{typography.body-sm}`, `{colors.ink-muted}`, max 2 lines optional |
| Divider | `border-bottom: 1px {colors.rule}`; first row `border-top` |

### Long-form article typography (`/writing/[slug]`)

| Element | Spec |
|---|---|
| Container | `{spacing.measure-narrow}`, centered |
| Header | Date (caption) → H1 (`{typography.article-h1}`) → subtitle (`{typography.body-lg}`, muted) |
| Body | `{typography.article-body}`, DM Sans |
| H2 | `{typography.article-h2}`, `{spacing.3xl}` margin-top, `{spacing.lg}` margin-bottom |
| H3 | `{typography.article-h3}` |
| Links | `{colors.accent}`, underline `text-underline-offset: 0.18em`, hover `{colors.accent-hover}` |
| `hr` | 1px `{colors.rule}`, `{spacing.3xl}` vertical margin — manifesto uses HR between major beats |
| `strong` | font-weight 500, no color change |
| `em` | italic, no color change |
| Pull quotes | **Not used in V1** — anti-pattern for this site |
| Max measure | 640px — ~65–70 characters per line at 18px |

### Footer

| Element | Spec |
|---|---|
| Content | `{site.name}` · `{site.legalName}` — disambiguation only |
| Copy | `{typography.caption}`, `{colors.ink-muted}` |
| Email | Optional mailto link in accent |
| **Exclude** | No Vixxo, no role line, no social icons |

### Contact page

| Element | Spec |
|---|---|
| H1 | Contact — `{typography.headline-lg}` |
| Subtitle | `{typography.body-md}`, muted — operating conversations framing |
| Email | `{typography.contact-email}` serif, `{colors.accent}` link |
| Body | One short paragraph below email |

### Focus / hover / active states (all interactives)

| State | Treatment |
|---|---|
| `:hover` | Color shift to `{colors.accent}` or `{colors.accent-hover}`; no background fill |
| `:focus-visible` | 2px solid `{colors.focus-ring}`, 3px offset `{colors.focus-ring-offset}` — **required** on all links and nav |
| `:active` | `{colors.accent-hover}`, no scale transform |
| `:visited` | Same as default link color (no purple) |

**Motion:** `{motion.duration-fast}` (150ms) color transitions only. No scroll-jacking, no hero animation, no parallax.

## Do's and Don'ts

**Do**
- Use `{spacing.editorial-gap}` between major home sections
- Stack hero name on two lines at display scale
- Keep proof to one scannable line per item on home
- Use italic serif kickers
- Maintain WCAG 2.1 AA contrast on all text
- Let Libre Caslon carry authority; DM Sans carry utility

**Don't**
- All-caps section labels (PROOF, ABOUT)
- Identical padded sections with horizontal rules between each
- Card grids, shadows, gradients
- Headshots, stock photos, AI portraits
- Vixxo logo, link, or hero mention
- Newsletter popups, social icon rows, giant pull quotes
- Proof summary sublines on home
- Generic Source Serif / Source Sans pairing from current scaffold
- Dark mode in V1
- Filled button components
