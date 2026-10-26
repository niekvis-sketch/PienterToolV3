`Button` is the brand's primary action control — six token-driven variants in three sizes. Use `primary` (sage) for the main action, `secondary`/`ghost` for lower emphasis, `accent` for AI/new actions, `destructive` for deletes.

```jsx
<Button variant="primary"><Icon name="plus" size={15} />Nieuwe deal</Button>
<Button variant="secondary" size="sm">Importeer</Button>
<Button variant="accent"><Icon name="sparkle" size={15} />Vraag Kompas AI</Button>
<Button variant="ghost">Annuleren</Button>
<Button variant="secondary" iconOnly aria-label="Zoek"><Icon name="search" size={16} /></Button>
```

- `variant`: primary · accent · highlight · secondary · ghost · destructive
- `size`: sm · md · lg  ·  `iconOnly` for square icon buttons
- Disabled via the native `disabled` prop (drops to 45% opacity).
