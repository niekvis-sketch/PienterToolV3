// Pienter CRM — Medewerkers "Archive" (recreates the real Pienter screen).
const { Avatar, Badge, Icon } = window.VeldDesignSystem_c2e968;

function Blob() {
  return (
    <svg viewBox="0 0 120 64" preserveAspectRatio="none"
      style={{ position: 'absolute', right: 0, bottom: 0, width: '55%', height: '100%' }}>
      <path d="M-10 64 C 20 30, 40 50, 60 36 C 80 22, 100 44, 130 30 L 130 64 Z" fill="var(--accent)" opacity=".55" />
      <path d="M20 64 C 50 44, 60 56, 90 44 C 110 36, 120 50, 140 44 L 140 64 Z" fill="var(--accent)" opacity=".85" />
    </svg>
  );
}

function PersonCard({ p }) {
  return (
    <div style={{
      position: 'relative', background: 'var(--surface)', border: '1px solid var(--line)',
      borderRadius: 'var(--r-3)', overflow: 'hidden', boxShadow: 'var(--shadow-1)',
      display: 'grid', gridTemplateColumns: '64px 1fr auto', gap: 14, padding: 12, alignItems: 'center',
    }}>
      <Avatar name={p.naam} tone="pink" size={64} style={{ zIndex: 1 }} />
      <div style={{ minWidth: 0, zIndex: 1 }}>
        <div style={{ fontWeight: 600, fontSize: 14, color: 'var(--ink)' }}>{p.naam}</div>
        <div style={{ fontSize: 12, color: 'var(--ink-3)' }}>{p.rol}</div>
      </div>
      <Badge variant="highlight" style={{ zIndex: 1, alignSelf: 'flex-start' }}>{p.tag}</Badge>
      <Blob />
    </div>
  );
}

function ArchiveScreen() {
  const people = [
    { naam: 'Niek Visser',    rol: 'UX Webdesign',    tag: 'Team website' },
    { naam: 'Sanne Krijger',  rol: 'Account manager', tag: 'Team sales' },
    { naam: 'Jens van Dijk',  rol: 'Frontend dev',    tag: 'Team product' },
    { naam: 'Iris Klamer',    rol: 'Designer',        tag: 'Team website' },
    { naam: 'Daan Versteeg',  rol: 'Backend dev',     tag: 'Team product' },
    { naam: 'Hester Tellier', rol: 'Marketing',       tag: 'Team sales' },
    { naam: 'Pjotr Bakker',   rol: 'Sales',           tag: 'Team sales' },
    { naam: 'Yusuf Aydın',    rol: 'Lead designer',   tag: 'Team product' },
    { naam: 'Ineke Robben',   rol: 'PM',              tag: 'Team product' },
  ];
  return (
    <div style={{ padding: '24px 28px' }}>
      <h1 style={{ fontSize: 36, fontWeight: 700, letterSpacing: '-0.02em', color: 'var(--primary)', margin: '0 0 18px', display: 'flex', alignItems: 'center', gap: 4 }}>
        Archive<span className="accent-dot" style={{ width: 10, height: 10 }} />
      </h1>
      <div className="card" style={{ padding: 16 }}>
        <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 6, marginBottom: 14 }}>
          <button className="btn btn-ghost btn-sm btn-icon" style={{ width: 28, height: 28 }} aria-label="Lijst"><Icon name="list" size={15} /></button>
          <button className="btn btn-ghost btn-sm btn-icon" style={{ width: 28, height: 28, background: 'var(--bg-elev)' }} aria-label="Grid"><Icon name="grid" size={15} /></button>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 10 }}>
          {people.map((p, i) => <PersonCard key={i} p={p} />)}
        </div>
      </div>
    </div>
  );
}
window.ArchiveScreen = ArchiveScreen;
