`Checkbox` is a square sage-green checkbox with the brand check glyph. Works controlled or uncontrolled.

```jsx
<Checkbox label="Stuur me een herinnering" defaultChecked />
<Checkbox label="Voeg toe aan campagne" />
<Checkbox checked={sel} onChange={setSel} />   {/* controlled, e.g. table row */}
```

- Uncontrolled: `defaultChecked`. Controlled: `checked` + `onChange(next)`.
- Omit `label` for a bare box (table headers, row select).
