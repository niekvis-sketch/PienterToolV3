// Pienter CRM — top bar (breadcrumb, search, actions).
const { Icon, Button, Input } = window.VeldDesignSystem_c2e968;

function TopBar({ crumb = 'Overzicht', onNew }) {
  return (
    <header style={{
      height: 60, borderBottom: '1px solid var(--line)', display: 'flex',
      alignItems: 'center', padding: '0 24px', gap: 16, background: 'var(--bg)', flexShrink: 0,
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 13, color: 'var(--ink-3)' }}>
        <span>Werkruimte</span>
        <Icon name="chevR" size={13} />
        <span style={{ color: 'var(--ink)', fontWeight: 500 }}>{crumb}</span>
      </div>
      <div style={{ marginLeft: 'auto', display: 'flex', gap: 10, alignItems: 'center' }}>
        <div style={{ position: 'relative' }}>
          <Icon name="search" size={15} style={{ position: 'absolute', left: 10, top: '50%', transform: 'translateY(-50%)', color: 'var(--ink-3)' }} />
          <input className="input" placeholder="Zoek…" style={{ width: 220, height: 36, paddingLeft: 32, paddingRight: 44 }} />
          <span className="mono" style={{ position: 'absolute', right: 8, top: '50%', transform: 'translateY(-50%)', fontSize: 10.5, color: 'var(--ink-3)', background: 'var(--bg)', padding: '2px 6px', borderRadius: 4, border: '1px solid var(--line)' }}>⌘K</span>
        </div>
        <button className="btn btn-secondary btn-icon" style={{ height: 36, width: 36 }} aria-label="Meldingen">
          <span style={{ position: 'relative', display: 'inline-flex' }}>
            <Icon name="bell" size={16} />
            <span className="accent-dot" style={{ position: 'absolute', top: -2, right: -2, width: 6, height: 6 }} />
          </span>
        </button>
        <Button variant="primary" size="sm" onClick={onNew}><Icon name="plus" size={14} />Nieuw</Button>
      </div>
    </header>
  );
}
window.TopBar = TopBar;
