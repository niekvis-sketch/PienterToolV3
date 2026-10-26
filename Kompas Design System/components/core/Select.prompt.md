`Select` is the brand dropdown — a native `<select>` with custom styling and the Kompas chevron. Pass `<option>` children.

```jsx
<Select label="Pijplijn fase" defaultValue="Onderhandeling">
  <option>Eerste contact</option>
  <option>Onderhandeling</option>
  <option>Offerte verstuurd</option>
  <option>Gewonnen</option>
</Select>
```

- `label`/`help` optional; renders bare otherwise.
- Same height + focus ring as `Input`.
