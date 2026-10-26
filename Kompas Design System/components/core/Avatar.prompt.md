`Avatar` shows a person's initials (or an image) in a brand-tinted circle. `tone="pink"` is the signature solid-rose people tag used on Pienter's employee cards.

```jsx
<Avatar name="Sanne Krijger" />                {/* sage tint, "SK" */}
<Avatar name="Niek Visser" tone="pink" size={64} />
<Avatar src="/photo.jpg" name="Iris Klamer" size={48} />
```

- `tone`: primary (sage) · accent (soft rose) · pink (solid rose) · neutral (cream)
- Initials are the first letter of the first two words, uppercased.
