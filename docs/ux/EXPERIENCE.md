---
name: jamesrmccarthy.ai
status: final
updated: 2026-06-19
sources:
  - docs/ux/.decision-log.md
  - docs/ux/.working/direction-editorial-ledger.html
design_reference: docs/ux/DESIGN.md
---

# jamesrmccarthy.ai — Experience Spine

> Behavioral and IA contract for V1. Visual specs live in `DESIGN.md`.  
> Direction **B — Editorial Ledger** locked 2026-06-19.

## Foundation

| Attribute | Value |
|---|---|
| Form factor | Responsive marketing/content site — desktop-first editorial, mobile must not feel cramped |
| Stack | Astro 6, static output, Vercel deploy |
| Content | Markdown in `src/content/writing/` |
| UI system | None — custom CSS against `DESIGN.md` tokens |
| JS budget | Minimal — no client JS required for V1 layout or nav |
| Modes | Warm-light only in V1 — no dark mode toggle |

`DESIGN.md` is the visual identity reference. This spine owns IA, behavior, states, accessibility behavior, and journeys.

## Information Architecture

| Route | Purpose | Primary audience moment |
|---|---|---|
| `/` | Hero (thesis) → proof list → about teaser → latest writing → contact teaser | First referral click — 90-second evaluation |
| `/about` | Full bio, beliefs, operating model; Vixxo credential once at bottom | Deeper diligence after home passes |
| `/writing` | Essay index — operator essays only | Writing sample discovery |
| `/writing/everyone-builds` | Long-form manifesto (~2,500 words) | Marcus reads first 200 words |
| `/writing/[slug]` | Generic long-form template for future posts | Jim monthly publish |
| `/contact` | Email + framing copy | Sarah forwards URL → recipient contacts |

**Non-visual routes (required, spec behavior):**

| Route | Behavior |
|---|---|
| `/llms.txt` | Plain-text site summary for AI crawlers — person, thesis, key URLs |
| `/rss.xml` | RSS feed of writing collection |
| `/sitemap-index.xml` | Auto-generated sitemap (Astro `@astrojs/sitemap`) |
| `/robots.txt` | Allow all crawlers including AI bots |
| Person JSON-LD | In `BaseLayout.astro` — `{site.legalName}`, alternate names, jobTitle, worksFor Vixxo (structured data only, not visible chrome) |

**Nav (global):** Writing · About · Contact — plus brand link `Jim McCarthy` → `/`.

**Content rule:** Operator essays only. No No Doubles / Carevazo routine posts in the writing collection.

**Employer rule:** Visible copy mentions Vixxo **once** on `/about` only: plain line `Chief Operating Officer, Vixxo`. No logo, no link, no footer mention, no hero mention.

### Site map (logical)

```
/ ─────────────────────────────────────────────
├── Hero (thesis above fold)
├── Field receipts (proof ×4, one line each)
├── About teaser → /about
├── Latest writing → /writing/[slug]
└── Contact teaser → /contact

/writing ─── index of all essays
/writing/everyone-builds ─── manifesto
/writing/[slug] ─── future essays

/about ─── full bio
/contact ─── email
```

## Voice and Tone

Microcopy only — brand posture lives in `DESIGN.md` Brand & Style.

| Do | Don't |
|---|---|
| "Field receipts" | "PROOF" / "KEY WINS" / "HIGHLIGHTS" |
| "Full bio →" / "All writing →" | "Learn more" / "Read more" / "Get started" |
| "Operating conversations, board-adjacent work, and search-firm introductions." | "Let's connect!" / "I'd love to hear from you" |
| Complete sentences, operator register | Exclamation marks, hype, thought-leader cadence |
| Legal name where disambiguation matters | "Personal brand" / "thought leader" framing |

**Thesis** (locked copy, hero):  
*AI-native operating models produce startup build velocity at incumbent scale. Builder and product roles are converging. A small team with the right stack outruns a large team on legacy process.*

## Component Patterns

Behavioral rules. Visual anatomy in `DESIGN.md` Components.

| Component | Surfaces | Behavioral rules |
|---|---|---|
| Site header | All pages | Brand → `/`. Nav highlights current route via `aria-current="page"`. No sticky behavior V1. |
| Hero | `/` only | Typography-only. No CTA button. Thesis must be fully visible above fold on 1280×800 desktop without scroll. |
| Proof list | `/` | Render headline only — omit `summary` from `proof.ts` on home. Semantic `<ol>`. |
| Section kicker | Home sections | Italic label; not a heading level — use `<p>` not `<h2>`. |
| About teaser | `/` | Two paragraphs max + text link to `/about`. |
| Latest writing | `/` | Single most recent non-draft post by `pubDate`. Link to post + "All writing →". |
| Contact teaser | `/` | One sentence + mailto + link to `/contact`. |
| Writing index row | `/writing` | Sorted newest first. Entire title is link target. Show date, title, subtitle (if any), description. |
| Article body | `/writing/[slug]` | Rendered markdown via Astro content. No comments, no share buttons, no TOC V1. |
| Footer | All pages | `{name} · {legalName}` only. Optional mailto. No employer line. |
| Text link | Teasers | Trailing arrow `→` in label. Entire phrase is one link. |

## State Patterns

| State | Surface | Treatment |
|---|---|---|
| Default | All | Warm canvas, static HTML |
| Nav current | Any | `aria-current="page"`, accent color per `DESIGN.md` |
| Nav hover | Any | Accent color, 150ms transition |
| Link hover | All links | Accent hover color |
| Focus visible | All interactives | 2px accent outline, 3px offset — must be visible on canvas |
| Empty writing index | `/writing` | If zero posts: "No essays yet." — unlikely in V1 |
| 404 | Unknown route | Astro default or minimal branded 404 — out of V1 scope unless already present |
| RSS / llms | Machine routes | `Content-Type` correct; no HTML chrome |

**No loading states** — static site, no client fetch.

## Interaction Primitives

- **Click/tap:** Navigate only. No modals, drawers, or accordions in V1.
- **Scroll:** Native browser scroll. No scroll-jacking or parallax.
- **Keyboard:** Tab order follows DOM reading order — header brand → nav → main content → footer.
- **Mobile nav:** Inline horizontal links — no hamburger menu (three links fit).
- **Mailto:** `jamesrmccarthy@gmail.com` opens native mail client.

**Banned:** carousels, newsletter modals, cookie banners (unless legally required later), social share widgets, animated hero, video backgrounds.

## Accessibility Floor

Target: **WCAG 2.1 AA**.

| Requirement | Implementation |
|---|---|
| Color contrast | Per `DESIGN.md` Colors — 4.5:1 body text, 3:1 large text |
| Focus indicators | `:focus-visible` on all links and nav — never `outline: none` without replacement |
| Heading order | One H1 per page. Home sections use kickers (`<p>`), not skipped heading levels. Essay H2/H3 nest correctly under article H1. |
| Landmarks | `<header>`, `<main>`, `<footer>`, `<nav aria-label="Primary">`, `<article>` for posts |
| Link purpose | Nav links descriptive. "Full bio →" not "click here". |
| Motion | `prefers-reduced-motion: reduce` — disable color transitions or set `transition: none` |
| Language | `<html lang="en">` |
| Proof list | Semantic `<ol>`; numbers decorative styling OK if `<li>` order preserved |
| Font size | Respect user zoom to 200% — layout must not break; type uses rem/clamp |

## Inspiration & Anti-patterns

**Lifted from Braemont Capital:** generous whitespace, calm hierarchy, no visual noise — applied to operator-person site, not fund marketing.

**Lifted from BMAD *Linen & Logic* example:** editorial minimalism, fluid grid with intentional asymmetry, ghost index numerals, serif/sans pairing discipline.

**Rejected — current Astro scaffold:** flat stacked sections, identical padding, Source Serif/Sans default pairing, all-caps section labels, proof with headline + summary sublines.

**Rejected — executive coach template:** hero CTA buttons, testimonial cards, headshots, "work with me" funnels.

**Rejected — thought-leader tropes:** giant pull quotes, newsletter popups, social icon rows, LinkedIn embed.

**Rejected — SaaS landing patterns:** card grids with shadows, gradient heroes, feature bullet grids.

## Responsive & Platform

| Breakpoint | Behavior |
|---|---|
| ≥ 900px (desktop) | Hero 7/5 asymmetric grid. Proof block 680px right-aligned. Display hero 88px. Editorial gap 96px. |
| 768px – 899px (tablet) | Hero single column; display hero scales via clamp. Proof full width with ghost numerals. |
| ≤ 767px (mobile) | Base 16px. Gutter 24px. Hero name stacked. Nav 14–15px, may wrap. Proof grid 56px + 1fr. Editorial gap 64px. Thesis below name. |

**Above-fold (mobile 390×844):** Legal name + first line of display name + first sentence of thesis visible without scroll — acceptable if full thesis requires slight scroll.

**Touch targets:** Nav links and text links — minimum 44×44px tap area via padding if needed.

## Key Flows

### Flow 1 — PE referral validation (Sarah Chen, PE operating partner)

**Context:** Googled "James R. McCarthy COO" after a referral. 90 seconds. Needs disambiguation, thesis clarity, proof of real operator, path to contact.

1. Lands on `/` from search or forwarded link.
2. **Scan header:** "Jim McCarthy" brand + nav — professional, not template.
3. **Scan hero left:** "James R. McCarthy" legal line → stacked "Jim / McCarthy" → disambiguation achieved.
4. **Scan hero right (or below on mobile):** Thesis paragraph — understands AI-native operating thesis in one read.
5. **Scroll or glance to proof:** *Field receipts* kicker + four one-line items — credible field evidence, not marketing bullets.
6. **Optional:** Glances at About teaser or latest writing title — confirms substance.
7. **Climax:** Clicks Contact in nav or copies email from contact teaser — forwards URL to search partner with confidence.

**Failure:** If hero reads as generic blog or proof has marketing sublines → Sarah closes tab. Design prevents via Editorial Ledger hierarchy.

**Success metric:** Disambiguation + thesis + proof + contact path within 90 seconds without hunting.

---

### Flow 2 — Exec search writing sample (Marcus Webb, search consultant)

**Context:** Building COO shortlist. Compares candidates. Needs scannable proof, credible writing, professional tone without corporate varnish.

1. Lands on `/` — validates operator register (not coach, not influencer).
2. Scans proof list in ~10 seconds — four receipts register as specific and field-born.
3. Clicks **Writing** in nav → `/writing`.
4. Sees *Everyone Builds* with date and description.
5. Opens essay → reads first 200 words of manifesto body.
6. **Climax:** Stays — prose is long-form editorial (680px measure, proper H2 rhythm), voice is operator not pundit.

**Failure:** Essay page unstyled markdown wall → Marcus bounces. `DESIGN.md` article typography prevents this.

**Success metric:** Reads ≥200 words of Everyone Builds without layout friction.

---

### Flow 3 — Owner publishing (Jim McCarthy)

**Context:** Adds one essay monthly. Needs index + post template that stay on-brand without redesign.

1. Creates `src/content/writing/new-essay.md` with frontmatter (`title`, `description`, `pubDate`, optional `subtitle`, `draft: false`).
2. Runs build/deploy.
3. New post appears on `/writing` index (newest first) and as home "Latest writing" if most recent.
4. Post renders at `/writing/new-essay` using `[slug].astro` + prose styles.
5. RSS and sitemap update automatically.
6. **Climax:** Markdown drops in — Libre Caslon headings, DM Sans body, correct measure — no manual styling.

**Failure:** New post bypasses prose classes or breaks heading order → fix in layout template, not per-post.

**Success metric:** Zero design intervention per new essay.

---

## Key Screen Wireframes

Spine-level layout guidance for dev implementation. Visual tokens from `DESIGN.md`.

### Home (`/`)

```
┌──────────────────────────────────────────────────────────────┐
│ Jim McCarthy                    Writing · About · Contact    │
├──────────────────────────────────────────────────────────────┤
│                                                              │
│  James R. McCarthy              AI-native operating models     │
│  Jim                            produce startup build          │
│  McCarthy                       velocity at incumbent…       │
│  (7 cols, display)              (5 cols, thesis 24px)        │
│                                                              │
│              ─── editorial-gap 96px ───                      │
│                                                              │
│                    Field receipts (italic)                   │
│                    ┌──────────────────────────── 680px ──┐   │
│                    │ 01   Legacy system rebuilt in…      │   │
│                    │─────────────────────────────────────│   │
│                    │ 02   Weekend TAM assessment…        │   │
│                    │ …                                   │   │
│                    └─────────────────────────────────────┘   │
│                                                              │
│  About (italic)                                              │
│  Two paragraphs, 640px                                       │
│  Full bio →                                                  │
│                                                              │
│  Latest writing (italic)                                     │
│  [date] Everyone Builds                                      │
│  All writing →                                               │
│                                                              │
│  Contact (italic)                                            │
│  For operating conversations… jamesrmccarthy@gmail.com       │
│  Contact →                                                   │
├──────────────────────────────────────────────────────────────┤
│ Jim McCarthy · James R. McCarthy                             │
│ jamesrmccarthy@gmail.com                                     │
└──────────────────────────────────────────────────────────────┘
```

### Writing index (`/writing`)

```
┌──────────────────────────────────────────────────────────────┐
│ [header]                                                     │
│  Writing                                                     │
│  Operator essays. Sector-neutral. Operating model only.      │
│                                                              │
│  June 19, 2026                                               │
│  Everyone Builds                          ← link, serif H2   │
│  An operating view on AI                                     │
│  AI-native operating models let more people build…           │
│  ─────────────────────────────────────────────────────────   │
│  (future rows…)                                              │
└──────────────────────────────────────────────────────────────┘
```

### Essay (`/writing/everyone-builds`)

```
┌──────────────────────────────────────────────────────────────┐
│ [header]                                                     │
│  June 19, 2026                                               │
│  Everyone Builds                         ← H1, 44px serif    │
│  An operating view on AI                 ← subtitle, muted   │
│                                                              │
│  ┌────────────── 640px prose ──────────────┐                 │
│  │ Body 18px DM Sans, 1.75 line-height     │                 │
│  │                                         │                 │
│  │ ## Continuous improvement…              │ ← H2 serif 28px│
│  │                                         │                 │
│  │ ─────────── hr rule ───────────         │                 │
│  └─────────────────────────────────────────┘                 │
└──────────────────────────────────────────────────────────────┘
```

### About (`/about`)

```
┌──────────────────────────────────────────────────────────────┐
│  About                                                       │
│  ┌────────────── 640px ──────────────┐                       │
│  │ Prose paragraphs — career arc,    │                       │
│  │ beliefs, operating model          │                       │
│  │                                   │                       │
│  │ Chief Operating Officer, Vixxo    │ ← plain text, bottom  │
│  └───────────────────────────────────┘                       │
└──────────────────────────────────────────────────────────────┘
```

### Contact (`/contact`)

```
┌──────────────────────────────────────────────────────────────┐
│  Contact                                                     │
│  Operating conversations, board-adjacent work…               │
│                                                              │
│  jamesrmccarthy@gmail.com          ← serif 28px, accent link │
│                                                              │
│  I read everything that comes through this address…          │
└──────────────────────────────────────────────────────────────┘
```

### Mobile nav (≤ 767px)

```
┌─────────────────────────┐
│ Jim McCarthy            │
│ Writing About Contact   │  ← same row or wrap; no hamburger
├─────────────────────────┤
│ James R. McCarthy       │
│ Jim                     │
│ McCarthy                │
│ Thesis paragraph…       │
│ …                       │
└─────────────────────────┘
```

## Implementation Handoff Notes

**Repo:** `~/Projects/jamesrmccarthy.ai` — redesign in place.

**Files to refactor (dev agent):**
- `src/styles/global.css` — replace token system per `DESIGN.md` frontmatter
- `src/pages/index.astro` — hero grid, kickers, omit proof summaries
- `src/components/ProofList.astro` — headline-only mode
- `src/components/Header.astro` — focus states
- `src/components/Footer.astro` — remove Vixxo role line
- `src/pages/writing/[slug].astro` — article prose classes
- `src/layouts/BaseLayout.astro` — font link swap

**CSS custom properties:** Map YAML tokens to `:root` variables using kebab-case (e.g. `--color-canvas`, `--font-display-hero`).

**Google Fonts:** See `DESIGN.md` Typography section.

**Validate after build:** Lighthouse accessibility ≥ 90; manual keyboard tab through nav; contrast check accent on canvas.

## Open Items

None blocking V1 implementation. Optional future: Reviewer Gate (Editorial + Accessibility lenses) if Jim requests post-implementation validation pass.
