// Pienter CRM — left sidebar navigation.
const { Icon, Avatar, Badge } = window.VeldDesignSystem_c2e968;

function Sidebar({ active, onNavigate }) {
  const main = [
    { id: 'overview', label: 'Overzicht', icon: 'home' },
    { id: 'clients', label: 'Klanten', icon: 'contacts', meta: '248' },
    { id: 'deals', label: 'Deals', icon: 'deals', badge: 3 },
    { id: 'pipeline', label: 'Pijplijn', icon: 'pipeline' },
    { id: 'inbox', label: 'Inbox', icon: 'inbox' },
    { id: 'agenda', label: 'Agenda', icon: 'calendar' },
  ];
  const insight = [
    { id: 'reports', label: 'Rapportages', icon: 'chart' },
    { id: 'settings', label: 'Instellingen', icon: 'settings' },
  ];
  const Item = (n) => (
    <div
      key={n.id}
      className={'nav-item' + (active === n.id ? ' is-active' : '')}
      onClick={() => onNavigate(n.id)}
    >
      <Icon name={n.icon} size={17} />
      {n.label}
      {n.meta && <span className="mono" style={{ marginLeft: 'auto', fontSize: 11, color: 'var(--ink-3)' }}>{n.meta}</span>}
      {n.badge != null && <Badge variant="accent" style={{ marginLeft: 'auto', height: 18, padding: '0 7px', fontSize: 10.5 }}>{n.badge}</Badge>}
    </div>
  );
  return (
    <aside style={{
      background: 'var(--bg-elev)', borderRight: '1px solid var(--line)',
      padding: '20px 14px', display: 'flex', flexDirection: 'column', gap: 20, width: 232,
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '4px 6px' }}>
        <div style={{
          width: 28, height: 28, borderRadius: 'var(--r-2)', background: 'var(--primary)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          color: 'var(--on-primary)', fontWeight: 700, fontSize: 14,
        }}>K</div>
        <span style={{ fontWeight: 600, letterSpacing: '-0.01em' }}>Kompas CRM</span>
        <span className="accent-dot" style={{ marginLeft: 2 }} />
      </div>

      <div>
        <div className="caps" style={{ padding: '0 8px 8px' }}>Werkruimte</div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>{main.map(Item)}</div>
      </div>
      <div>
        <div className="caps" style={{ padding: '0 8px 8px' }}>Inzicht</div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>{insight.map(Item)}</div>
      </div>

      <div style={{ marginTop: 'auto', padding: 12, background: 'var(--surface)', border: '1px solid var(--line)', borderRadius: 'var(--r-3)' }}>
        <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
          <Avatar name="Sanne Krijger" />
          <div style={{ minWidth: 0 }}>
            <div style={{ fontSize: 13, fontWeight: 500, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>Sanne Krijger</div>
            <div style={{ fontSize: 11, color: 'var(--ink-3)' }}>Account manager</div>
          </div>
        </div>
      </div>
    </aside>
  );
}
window.Sidebar = Sidebar;
