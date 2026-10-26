`Switch` is a pill toggle for instant settings (sync, notifications). Sage track when on. Controlled or uncontrolled.

```jsx
<Switch label="Synchroniseer met agenda" defaultChecked />
<Switch checked={sync} onChange={setSync} />
```

Use `Switch` for "applies immediately" settings; use `Checkbox` for form selections that submit later.
