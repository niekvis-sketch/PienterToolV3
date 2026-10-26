`Icon` renders a glyph from the Kompas icon set — rounded 1.6px stroke, 24px grid, inherits `currentColor`. Use anywhere you need a UI icon; pair with text inside buttons, nav items and badges.

```jsx
<Icon name="plus" size={16} />
<Icon name="sparkle" size={18} accent />          {/* rose accent-dot */}
<button className="btn btn-primary"><Icon name="plus" size={15} />Nieuwe deal</button>
```

- `name` — one of `ICON_NAMES` (home, contacts, deals, pipeline, inbox, calendar, chart, settings, search, mail, phone, bell, user, filter, sort, star, flag, leaf, sparkle, plus, check, arrowR/Up/Dn, chev*, dots, eye, edit, trash, upload, grid, list…).
- `accent` — adds the signature rose dot top-right for "new / needs attention".
- Size via `size`; colour via the parent's text colour (`color`/`currentColor`).
