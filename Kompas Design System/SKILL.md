---
name: kompas-design
description: Use this skill to generate well-branded interfaces and assets for Kompas — the design system of the Pienter CRM/sales dashboard tool — either for production or throwaway prototypes/mocks. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping. Calm sage-green + soft-rose, warm cream, Poppins/JetBrains Mono, Dutch product copy.
user-invocable: true
---

Read the `readme.md` file within this skill, and explore the other available files (tokens in `tokens/`, components in `components/core/`, foundation cards in `guidelines/`, the Pienter CRM recreation in `ui_kits/pienter-crm/`).

If creating visual artifacts (slides, mocks, throwaway prototypes, etc.), copy assets out and create static HTML files for the user to view — link `styles.css` for tokens + fonts, and reuse the component recipe classes (`.btn`, `.card`, `.badge`, `.input`, `.tbl`, `.nav-item`, `.avatar`) and the `Icon` SVG set. If working on production code, copy assets and read the rules here to become an expert in designing with this brand.

If the user invokes this skill without any other guidance, ask them what they want to build or design, ask some questions, and act as an expert designer who outputs HTML artifacts _or_ production code, depending on the need.

Key brand notes:
- Sage green `#48B070` is the brand identity green (decorative, charts, soft tints). For buttons and green text use the accessible `--primary-strong #2C7D49` (white ≈ 5:1). Soft rose `#F6BDCA` is decorative only — use `--accent-deep #B85674` for rose text. Amber `#FFAB40` for tags. Warm cream `#F9F7F2` base.
- Poppins for UI, JetBrains Mono for numbers/data. Sentence case; small caps labels only. Dutch copy, informal "je/jij", no emoji.
- Subtle 4–12px radii, hairline borders, paper-soft warm shadows, quiet 120–220ms motion. The one playful motif is the rose blob on people cards.
