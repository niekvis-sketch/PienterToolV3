`Input` is the brand text field. Pass `label`/`help`/`error` to get the full field, or use it bare. `icon` adds a leading glyph (great for search).

```jsx
<Input label="E-mailadres" type="email" placeholder="naam@bedrijf.nl" help="We sturen geen marketingmails." />
<Input icon="search" placeholder="Zoek klanten, deals, mails…" />
<Input label="Veld met fout" defaultValue="info@" error="Ongeldig e-mailadres." />
```

- `label`, `help`, `error` are optional; with none of them it renders just the `<input>`.
- `icon` = any Kompas icon name; `invalid` forces the red border.
- For a dropdown use `Select`; for multi-line use a `.textarea` element.
