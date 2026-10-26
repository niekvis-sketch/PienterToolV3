`Card` is the surface container — white, hairline border, paper-soft shadow. Compose with `CardHeader` and `CardBody`.

```jsx
<Card>
  <CardHeader>
    <span style={{ fontWeight: 600 }}>Recente activiteit</span>
    <Button variant="ghost" size="sm">Alles tonen<Icon name="arrowR" size={13} /></Button>
  </CardHeader>
  <CardBody>…</CardBody>
</Card>
```

- Bare metric cards: skip the header, put content directly in `CardBody` (or pass `style={{ padding: 16 }}` on the `Card`).
- Cards never use heavy shadows at rest — lift to `--shadow-2` only on hover/active states.
