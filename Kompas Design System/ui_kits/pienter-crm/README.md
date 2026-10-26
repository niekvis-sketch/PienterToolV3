# Pienter CRM — UI kit

High-fidelity recreation of the Pienter dashboard tool, built on Kompas primitives.

## Screens
- **index.html** — interactive shell. Sidebar nav switches the workspace between screens (live, fake data).
- **DashboardScreen.jsx** — "Overzicht": tabs, stat cards, revenue line chart, deals-per-phase bars, recent-activity feed.
- **TableScreen.jsx** — "Deals": filterable data table with status badges, probability bars, owner avatars.
- **ArchiveScreen.jsx** — "Medewerkers / Archive": the signature people grid — solid-rose avatars, amber team tags, decorative rose blobs. Recreated from the real product screen (`assets/pienter-archive-screenshot.png`).
- **Sidebar.jsx** / **TopBar.jsx** — chrome: branded sidebar with grouped nav + user card; top bar with breadcrumb, ⌘K search, notifications, "Nieuw".

## How it loads
`index.html` links `../../styles.css`, loads `../../_ds_bundle.js`, then each screen `.jsx` via Babel. Screens read primitives from `window.VeldDesignSystem_c2e968` (Button, Badge, Card, Icon, Avatar, …) and the global recipe classes (`.nav-item`, `.tbl`, `.card`, `.input`).

## Notes
- Data is illustrative (Dutch names, € values, sales pipeline) — matches the product's domain (B2B sales CRM).
- The rose blob + solid-rose avatar treatment on the Archive cards is the brand's one playful flourish; keep it to people/cards, not data-dense views.
