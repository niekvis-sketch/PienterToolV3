`Tabs` is an underline tab bar with a sage active indicator. Items can be plain strings or `{value,label,badge}`.

```jsx
<Tabs items={['Overzicht','Activiteit','Doelen','Notities']} defaultValue="Overzicht" onChange={setTab} />
<Tabs items={[{value:'inbox',label:'Inbox',badge:3},{value:'sent',label:'Verzonden'}]} value={tab} onChange={setTab} />
```

- Controlled (`value`+`onChange`) or uncontrolled (`defaultValue`).
- For top-level app sections use the sidebar `nav-item` pattern instead; `Tabs` is for in-page section switching.
