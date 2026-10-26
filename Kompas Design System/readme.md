# Kompas Design System

**Kompas** (`/ˈkɔmpɑs/` — Dutch for "compass") is the design system behind the **Pienter** dashboard tool: a calm, business-like B2B sales/CRM product. The system pairs a sage-green primary with a soft-rose decorative accent and an amber highlight, all on a warm cream base — built for long, focused workdays: quiet in colour, clear in hierarchy. The name signals its job: helping teams keep direction and overview.

> Product context: Pienter is a Dutch CRM/sales workspace ("Klanten", "Deals", "Pijplijn", "Medewerkers"). All product copy is in Dutch. The signature product screen is the **Medewerkers / Archive** people grid (solid-rose avatars, amber team tags, decorative rose blobs) — recreated in the UI kit.

## Sources
- `uploads/Pienter tool design system overzetten.zip` — the original self-contained design canvas (tokens, primitives, artboards) plus the brand-spec PDFs. Extracted to `extracted/` for reference.
- Brand-spec PDFs (in the zip, under `uploads/`): **Intro**, **Kleurpalet** (colour), **Typografie**, **Buttons**. Token values here are verified against these.
- `assets/pienter-archive-screenshot.png` — a real screenshot of the live Pienter "Archive" screen.

No external Figma or repo was provided; this system is self-contained.

---

## Content fundamentals

**Language.** All product copy is **Dutch**. Keep it that way unless asked otherwise.

**Voice.** Calm, professional, plain-spoken — never salesy or cute. Addresses the user informally with **je/jij** ("We sturen geen marketingmails", "Stuur me een herinnering"). Reassuring and low-pressure.

**Casing.** Sentence case everywhere — buttons, labels, headings ("Nieuwe deal", "Contact toevoegen", "Recente activiteit"). The only uppercase is the small **eyebrow / caps label** (`.caps`, `.eyebrow`): 11px, +0.04em tracking, muted ink (e.g. "WERKRUIMTE", "MAAND OMZET").

**Buttons** use imperative verbs: *Importeer, Exporteren, Verwijder, Annuleren, Volgende*. Primary actions name the object ("Nieuwe deal", "Contact toevoegen").

**Numbers & data** use Dutch formatting and the mono face: `€ 12.480,00` (period thousands, comma decimals), `NL · Utrecht`, `#B-203`, `⌘K`, percentages `78%`. Relative time is lowercase ("4 min", "1 uur", "gisteren").

**No emoji.** Status and emphasis come from badges, the rose accent-dot, and small status pips — never emoji. Avoid exclamation marks; let the calm tone carry.

**Microcopy examples.** "We sturen geen marketingmails." · "Ongeldig e-mailadres." · "6 van 248" · "+ 12% versus vorige maand" · "Bijgewerkt 4 minuten geleden".

---

## Visual foundations

**Colour.** Sage green `--primary #48B070` is the brand's identity green — used for decorative fills, charts, soft tints and the focus border. Because #48B070 is too light to carry white text or read as green text on white accessibly (~2.7:1), a deeper **`--primary-strong #2C7D49`** (white ≈ 5:1, AA) carries the *working* role: buttons, green links, active nav text and badge text. Soft rose `--accent #F6BDCA` is **decorative**: blobs, photo frames, accent-dots, soft fills — it is too light for text on white, so use `--accent-deep #B85674` when rose text is needed. Amber `--highlight #FFAB40` is the category/team tag pop. Everything sits on warm cream `--bg #F9F7F2` with white `--surface` cards. Status colours are warm-tinted (success is a green-leaning teal, not neon). Ink is a soft near-black with a green undertone (`--ink #1F2A22`), never pure black.

**Typography.** **Poppins** for all UI; **JetBrains Mono** for numbers, codes, keyboard hints and data. Scale: Display 44 / H1 32 / H2 24 / H3 18 / Body 14 / Small 12 (px). Tight tracking (`-0.02em`) on large headings, neutral in body, wide (`+0.04em`) on caps labels. Weights 400/500/600/700; most UI text is 500. Body line-height 1.5, headings ~1.15.

**Spacing.** 4px base (`--s-1`…`--s-16`). Comfortable density by default (44px rows, 12px cell padding); compact and spacious variants via `[data-density]`.

**Radii.** Subtle and small — 4 / 6 / 8 / 12px (`--r-1`…`--r-4`), pill (999px) only for badges, avatars and toggles. Adjustable via `[data-radius="sharp|subtle|soft"]`.

**Borders.** Hairline `1px solid var(--line)` (#ECE7DA) for dividers and card edges; `--line-strong` for inputs. Dashed dividers (`.divider-dotted`, 1px dashed) separate list rows softly.

**Shadows.** Paper-soft and warm-tinted (green-black, low opacity), never harsh grey. Three steps: `--shadow-1` (hover lift / resting cards), `--shadow-2` (dropdowns), `--shadow-3` (modals). Cards rest on `--shadow-1` and only lift on hover.

**Cards** = white surface + hairline border + `--shadow-1` + `--r-3` (8px). Optional `card-header` (title left, action right, divider below) and `card-body` (18px padding). No heavy elevation, no coloured left-border accents.

**Backgrounds.** Flat warm cream — **no gradients, no photographic hero washes, no noise textures**. The one decorative motif is the **rose blob**: a soft organic SVG shape tucked into the bottom-right of people cards (see ArchiveScreen). Use it sparingly and only on card surfaces.

**Motion.** Quiet and quick. Hover tints 120ms ease; button/card lifts 150ms ease; modals/drawers 220ms cubic-bezier(.2,.7,.3,1). No bounces, no infinite/looping decorative animation. Respect `prefers-reduced-motion`.

**Hover / press states.** Hover = a darker shade of the same colour (e.g. `--primary-hover`) or a soft tint background (ghost → `--primary-soft`); secondary buttons darken their border. Press = `translateY(1px)` plus the `*-press` shade. Focus = the rose-tinted focus ring (`--focus-ring`, 3px `--accent` @ 30%).

**Transparency / blur.** Used minimally. `color-mix(in srgb, … X%, transparent)` produces soft tints (nav hover, neutral badge); the rose blob uses opacity .55/.85. No glassmorphism / backdrop-blur.

**Imagery vibe.** Warm and natural; people photos in solid-rose circular avatars. When a real photo is absent, fall back to initials on a rose/sage tint.

**Themes.** Default cream (light). `[data-theme="cool"]` (cooler greens) and `[data-theme="dark"]` are available; accent can be swapped via `[data-accent="amber|coral|lilac"]`.

---

## Iconography

A small **bespoke line-icon set** in the Kompas house style — rounded **1.6px stroke** on a **24px grid**, `currentColor`, round caps/joins. No filled icons, no external icon font. Shipped as the React `Icon` component (`components/core/Icon.jsx`); `ICON_NAMES` lists all glyphs (home, contacts, deals, pipeline, inbox, calendar, chart, settings, search, mail, phone, bell, user, filter, sort, star, flag, leaf, sparkle, plus, check, arrow*, chev*, dots, eye, edit, trash, upload, grid, list…).

The signature flourish is the optional **rose accent-dot** (top-right, `--accent`) — set `accent` on `Icon` to mark a new or actionable item. Use it sparingly. Emoji and Unicode symbols are **not** used as icons (the only Unicode in UI is `⌘K` in the mono keyboard hint and `€`/`·` in data).

To reuse outside React, copy the inline SVGs from `Icon.jsx` (the `PATHS` map) — `guidelines/iconography.card.html` shows the pattern. Do not hand-roll new icons in a different style; extend the set in the same 1.6px / 24px grid manner.

---

## Index / manifest

**Root**
- `styles.css` — the single entry point consumers link (`@import`-only).
- `readme.md` — this guide. · `SKILL.md` — Agent-Skills wrapper.

**Tokens** (`tokens/`, all reachable from `styles.css`)
- `fonts.css` — Poppins + JetBrains Mono (Google Fonts `@import`).
- `colors.css` — base scale, semantic aliases, theme + accent variants.
- `typography.css` — type scale, weights, `.mono`/`.caps`/`.eyebrow` helpers.
- `spacing.css` — spacing, radii, shadows, motion, density/radius variants.
- `recipes.css` — global component classes (`.btn`, `.input`, `.badge`, `.card`, `.tbl`, `.nav-item`, `.avatar`, `.kompas-app`).

**Components** (`components/core/`) — React primitives, each with `.jsx` + `.d.ts` + `.prompt.md`:
Icon · Button · Badge · Input · Select · Checkbox · Switch · Card (+ CardHeader, CardBody) · Avatar · Tabs.
Cards: `actions.card.html`, `forms.card.html`, `data.card.html`.

**Foundations** (`guidelines/`) — specimen cards for the Design System tab:
colours (primary / accent / status / neutrals), type (scale / mono & weights), spacing (scale / radii / shadows & motion), brand (logo / wordmark / iconography).

**Logo** (`assets/logo/`) — three brand assets plus on-dark inverses; specimen in `guidelines/brand-logo.card.html`:
- `kompas-beeldmerk.svg` — the standalone mark (sage compass + rose needle). App-icon, favicon, avatar.
- `kompas-wordmark.svg` — the wordmark text only (black). Use when the mark is already visible.
- `kompas-logo.svg` — the default lockup (mark + wordmark).
- `kompas-logo-inverse.svg` / `kompas-wordmark-inverse.svg` — white wordmark for dark surfaces; the mark keeps its sage + rose.
Keep clearspace = the mark's height around the logo; min size lockup 120px / mark 24px. Never restretch, recolour, add shadow, or place on a busy photo.

**UI kit** (`ui_kits/pienter-crm/`) — interactive Pienter CRM recreation: `index.html` (shell + starting point), `Sidebar`, `TopBar`, `DashboardScreen`, `TableScreen`, `ArchiveScreen`. See its `README.md`.

**Assets** (`assets/`) — `pienter-archive-screenshot.png` (live product reference).

**Reference** (`extracted/uploads/`) — the original brand-spec PDFs (Intro, Kleurpalet, Typografie, Buttons), kept for provenance.

> Consumers use `window.VeldDesignSystem_c2e968` (e.g. `const { Button, Icon } = window.VeldDesignSystem_c2e968`) after loading `_ds_bundle.js`. (This JS namespace is an internal compiler-generated identifier and keeps its original spelling — it is not a user-facing name.)
